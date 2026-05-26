---
title: double-ended queue
description: API docs for deepstream's double-ended queue (Dq) object, a network efficient collection of record names
---

Dq's are a new implementation of lists that favour network efficiency over record size. They are presented at the client level just like a list, an array of record names, but have a different API for data handling that uses a fraction of message size to propagate changes, unlike lists that require for every change to resend the complete list over the wire. The caveat is the record can be up to 1.9x the size of a list, but propagating changes has a message size of ~100 bytes (depending on the actual data that is being added/removed from the dq).

:::info
Mutations (`unshift`, `push`, `insertEntry`, `removeEntry`) require multiple writes to the underlying linked-list structure — a new node plus updates to the head pointer and neighbouring nodes. As of deepstream **server 10.1+** and **client 7.1+**, these writes are bundled into a single atomic `PATCH_MULTI` message: one version bump, one cache write, no observable intermediate state. Older deployments issued the writes individually, which opened a race window in which two concurrent writers could collide on the version counter and produce `VERSION_EXISTS` errors. If you connect a new client to an old server, mutations will be rejected with `INVALID_MESSAGE_DATA`; pass a callback (or use the `*WithAck` variants) to detect this and fall back to `setEntries`.
:::

## Creating Dqs
Double ended queues are created and retrieved using `client.record.getDq( 'name' );`

```javascript
const dq = client.record.getDq( 'cars' );
```

## Properties

|Argument|Type|Description|
|---|---|---|
|name|String|The name of the Dq, as specified when calling `client.record.getDq( 'name' );`|
|isReady|Boolean|True once the Dq has received its current data and emitted the `'ready'` event|

## Events

### entry-added
Emitted whenever a new entry is added to the Dq. Passes the entry and its position within the Dq to the callback.

### entry-moved
Emitted whenever an entry is moved within the Dq. Passes the entry and its new position within the Dq to the callback.

### entry-removed
Emitted whenever an entry is removed from the Dq. Passes the entry and its last position within the Dq to the callback.

### delete
Emitted when the Dq was deleted, whether by this client or by another.

### discard
Emitted once the Dq was discarded.

### error
Emitted if the Dq encounters an error. The error message is passed to the event callback.

## Methods

### whenReady( callback? | Promise )

|Argument|Type|Optional|Description|
|---|---|---|---|
|callback|Function|true|A function that will be invoked as soon as the Dq is ready. Receives the Dq as an argument|

Invokes `callback` once the Dq has been loaded. This might happen synchronously if the Dq is already available or asynchronously if the Dq still needs to be retrieved. Some methods, e.g. `addEntry()` or `setEntries()` or `subscribe()` can be used before the Dq is ready.

```javascript
// Callback
dq.whenReady( ( dq ) => {
  // interact with the dq
});

// ES6
await dq.whenReady()
```

### isEmpty()

Returns `false` if the Dq has entries or `true` if it doesn't.

```javascript
if( dq.isEmpty() ) {
  // You don't have any entries
}
```

### getEntries()
Returns an array of the current entries in the Dq.

```javascript
const entries = dq.getEntries()
console.log( entries ) // [ 'car/1', 'car2' ]
```

### setEntries( entries, callback? )

|Argument|Type|Optional|Description|
|---|---|---|---|
|entries|Array|false|An array of record name strings|
|callback|Function|true|Will be called with the result of the write when using record write acknowledgements|

Sets the contents of the Dq to the provided array of record names. To add or remove specific entries see further methods.

```javascript
dq.setEntries( [ 'car/1', 'car/2' ] );
```

### setEntriesWithAck( entries)

Same as `setEntries` but returns a promise that fulfills when writing to cache or storage is completed.

### getLast

Get last entry

```javascript
dq.getLast()
```

### getFirst

Get first entry

```javascript
dq.getFist()
```

### shift

Remove first value from dq and return it

```javascript
dq.shift()
```

### pop

Remove last value from dq and return it

```javascript
dq.pop()
```

### unshift( entry, callback? )

|Argument|Type|Optional|Description|
|---|---|---|---|
|entry|String|false|A record name to insert at the head of the dq|
|callback|Function|true|Will be called with the result of the write when using record write acknowledgements|

Adds the entry at the first position. The pointer updates to the new node, the head, and the previous first node's back-pointer are sent as a single atomic `PATCH_MULTI` message; either all three apply or the whole insert is rejected.

```javascript
dq.unshift('first')

// With write acknowledgement
dq.unshift('first', err => {
  if (err) console.log('unshift failed:', err)
})
```

### unshiftWithAck( entry )

|Argument|Type|Optional|Description|
|---|---|---|---|
|entry|String|false|A record name to insert at the head of the dq|

Same as `unshift` but returns a promise that resolves when writing to cache or storage completes, and rejects on server error (including `INVALID_MESSAGE_DATA` when the server doesn't support `PATCH_MULTI`).

```javascript
try {
  await dq.unshiftWithAck('first')
} catch (err) {
  // fall back to setEntries if needed
}
```

### push( entry, callback? )

|Argument|Type|Optional|Description|
|---|---|---|---|
|entry|String|false|A record name to append at the tail of the dq|
|callback|Function|true|Will be called with the result of the write when using record write acknowledgements|

Adds the entry at the last position. Like `unshift`, all pointer updates ship in a single atomic `PATCH_MULTI` message.

```javascript
dq.push('last')

// With write acknowledgement
dq.push('last', err => {
  if (err) console.log('push failed:', err)
})
```

### pushWithAck( entry )

Same as `push` but returns a promise that resolves on successful write and rejects on server error.

```javascript
await dq.pushWithAck('last')
```

### insertEntry( entry, index, callback? )

|Argument|Type|Optional|Description|
|---|---|---|---|
|entry|String|false|A record name that should be inserted to the dq|
|index|Number|false|Index that the new entry should be inserted at|
|callback|Function|true|Will be called with the result of the write when using record write acknowledgements|

Adds a new record name to the Dq at an intermediate position. The new node, the next node's back-pointer, and (if present) the previous node's forward-pointer are written in a single atomic `PATCH_MULTI` message.

```javascript
function addCarAt2( number ) {
  const id = 'car/' + client.getUid();
  client.record.getRecord( id ).set( 'number', number );
  dq.insertEntry( id, 2 );
}
```

### removeEntry( entry, index?)

|Argument|Type|Optional|Description|
|---|---|---|---|
|entry|String|false|A record name that should be removed to the dq|
|index|Number|true|An optional index that the entry should be removed from at. If ommited, the first entry of the given name will be removed.|

Removes an entry from the dq. `removeEntry` will throw an error if the entry doesn't exist.

```javascript
function removeCar( carRecord ) {
  dq.removeEntry( carRecord.name );
}
```

### subscribe( position?, callback, triggerNow )

|Argument|Type|Optional|Description|
|---|---|---|---|
|position|String|true|Option to subscribe to changes to the `first` or `last` element of the dq|
|callback|Function|false|A callback function that will be called whenever the content of the dq, or the `first/last` element changes|
|triggerNow|Boolean|true|If true, the callback function will be called immediately with the current value|

Registers a function that will be invoked whenever any changes to the dq's contents occur. You can pass the position: `first|last` as first argument to be informed of changes made only to the `first|last` element. Optionally you can also pass `true` to execute the callback function straight away with the dq's current entries.

```javascript
function dqChanged( entries ) {
  // entries in dq has changed
}
dq.subscribe( dqChanged, false );
```

```javascript
function firstChanged( firstElement ) {
  // first element has changed
}
dq.subscribe( 'first', firstChanged, true );
```

### unsubscribe( position?, callback )

|Argument|Type|Optional|Description|
|---|---|---|---|
|position|String|true|The previously registered option if you wish to unsubscribe only that case|
|callback|Function|true|The previously registered callback function. If ommited, all listeners will be unsubscribed.|

Removes a subscription that was previously made using `dq.subscribe()`. If the position is specified, only the subscription to the position changes will be removed.

Please Note: unsubscribe is purely a client side operation. To notify the server
that the app no longer requires updates for this dq use `discard()`.

```javascript
dq.unsubscribe( dqChanged );
```

### discard()
Removes all change listeners and notifies the server that the client is no longer interested in updates for this dq.

```javascript
dq.discard();
```

:::info
It is important to make sure that `discard()` is called for any dq that's no longer needed. If you only remove the listeners using `unsubscribe()` the server won't be notified and will continue to send updates to the client.
:::

### delete(callback? | Promise)
|Argument|Type|Optional|Description|
|---|---|---|---|
|callback|Function|true|A function that will be invoked as soon as the dq is deleted|

Deletes the dq on the server. This action deletes the dq for all users from both cache and storage and is irreversible.

```javascript
dq.delete();
```

```javascript
// ES6
await dq.delete();
```
