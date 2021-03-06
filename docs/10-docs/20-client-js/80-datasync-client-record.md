---
title: Record Factory
description: This class gives you access to all methods related to data-sync
---

`client.record` gives you access to all methods related to data-sync.

## Prerequisite

You need to connect to the deepstream server:

```javascript
const { DeepstreamClient } = require('@deepstream/client')
const client = deepstream( 'localhost:6020')
client.login()
```

## Methods

### client.record.getRecord(name)

|Argument|Type|Optional|Description|
|---|---|---|---|
|name|String|false|The name of the record.|

Retrieves and if necessary creates a [Record](datasync-record) with the given name. Records are persistent data structures that are synced between clients. To learn more about what they are used for and how they work, head over to the [record tutorial](../../tutorials/core/datasync/records).

```javascript
const record = client.record.getRecord('user/johndoe')
```
:::info
The record will be loaded asynchronously. To ensure the record is loaded put your logic into the [whenReady](../../tutorials/core/datasync/records#record-lifecycle) callback. However you can perform set operations without waiting for the record to be ready.
:::

### client.record.getList(name)

|Argument|Type|Optional|Description|
|---|---|---|---|
|name|String|false|The name of the list.|

Retrieves or creates a [List](datasync-list) with the given name. Lists are arrays of recordNames that clients can manipulate and observe. You can learn more about them in the [list tutorial](../../tutorials/core/datasync/lists/).

```javascript
const beatlesAlbums = client.record.getList('albums')
beatlesAlbums.whenReady(() => {
  console.log(beatlesAlbums.getEntries())
})
/*
  [
    "album/i9l0z34v-109vblpqddy",
    "album/i9l0z3v4-ibrbp139rbr",
    "album/i9l0z4d8-1w0p8xnk1sy"
  ]
*/
```

:::info
The list will be loaded asynchronously. To ensure the list is loaded put your logic into the [whenReady](../../tutorials/core/datasync/records#record-lifecycle) callback.
:::

### client.record.getAnonymousRecord()

Returns an [AnonymousRecord](datasync-anonymous-record).

An AnonymousRecord is a record that can change its name. It acts as a wrapper around an actual record that can be swapped out for another one whilst keeping all  bindings intact. You can learn more about anonymous records [here](../../tutorials/core/datasync/anonymous-records/).

```javascript
const record = client.record.getAnonymousRecord()
record.setName('user/johndoe')
record.setName('user/maxpower')
```

### client.record.names()

Returns all the available data-sync names.

Please note: Lists, AnonymousRecords and Records are all essentially the same thing within the SDK, so this array will contain a list of everything.

Due to how records work as well even after a discard this list will take a while to update. This is intentional as their is an option for how long a record will survive before being discarded! You can change that via the `recordDiscardTimeout: milliseconds` option.


### client.record.has(name, callback | Promise)

|Argument|Type|Optional|Description|
|---|---|---|---|
|name|String|false|The name of the record.|
|callback|Function|true|Arguments are (String) error and (Boolean) hasRecord|

The callback contains an error argument and a boolean to indicate whether or not the record exists in deepstream. This is useful to avoid creating a record via `getRecord( name )` if you only want to edit the contents. The callback is invoked immediately if the record exists on the client.

```javascript
// Callback
client.record.has('user/johndoe', (error, hasRecord) => {
  // ...
})

// Promise
try {
  const hasRecord = await client.record.has('user/johndoe')
  // ...
} catch (error) {

}
```

### client.record.head(name, callback | Promise)

|Argument|Type|Optional|Description|
|---|---|---|---|
|name|String|false|The name of the record.|
|callback|Function|true|Arguments are (String) error and (Number) version|

The callback contains an error argument and a number to indicate the current record version in deepstream.

```javascript
// Callback
client.record.head('user/johndoe', (error, version) => {
  // ...
})

// Promise
try {
  const recordVersion = await client.record.head('user/johndoe')
  // ...
} catch (error) {

}
```

### client.record.snapshot(name, callback | Promise)

|Argument|Type|Optional|Description|
|---|---|---|---|
|name|String|false|The name of the record.|
|callback|Function|true|Arguments are (String) error and (Object) data|

The callback contains the record's content without subscribing to updates. This can be used to avoid scenarios where you would request the record and discard it immediately afterwards. The callback is invoked immediately if the record data is already loaded and ready.

```javascript
// Callback
client.record.snapshot('user/johndoe', (error, data) => {
	// ...
})

// Promise
try {
  const data = await client.record.snapshot('user/johndoe')
} catch (error) {

}
```

### client.record.setData(name, path, data, callback)

|Argument|Type|Optional|Description|
|---|---|---|---|
|name|String|false|The name of the record.|
|path|String|true|The path of the record to set data.|
|data|Various|false|The data to set on the record.|
|callback|Function|true|Arguments are (String) error|

An upsert operation that allows updating of a record without being subscribed to it. If the record does not exist deepstream will try and permission the request to create the record. The callback if provided will be called with any errors that occurred while writing to the record.

```javascript
// Set the entire record's data - record will be created if it doesn't exist
client.record.setData('user/homer', { status: 'married' })

// Update only marriage status
record.set('user/homer', 'status', 'single')

// Set the entire record's data with write acknowledgement
client.record.setData('user/homer', { status: 'married' }, (error) => {
  // ...
})

// Update only a property with write acknowledgement
client.record.setData('user/homer', 'son', 'Bart', (err) => {
  // ...
})
```

### client.record.setDataWithAck(name, path, data)

The same as `setData` but returns a Promise.


### client.record.listen(pattern, callback)

|Argument|Type|Optional|Description|
|---|---|---|---|
|pattern|String (regex)|false|The pattern to match records which subscription status you want to be informed of|
|callback|Function|false|A function that will be called whenever a record matching the `pattern` has been initially subscribed to. When there are no more subscriptions to any records matching `pattern`, the callback passed to `response.onStop()` is called. Arguments are (String) match, and response (Object).|

Allows to listen for record subscriptions made by other clients. This is useful to create "active" data providers, e.g. providers that only provide data for records that users are actually interested in. You can find more about listening in the [record tutorial](../../tutorials/core/datasync/records/).

The callback is invoked with three arguments:
- **match**: The name of the record that has been matched against the provided pattern
- **response**: contains two functions (`accept` and `reject`), one of them needs to be called

```javascript
client.record.listen('raceHorse/.*', (match, response) => {
  // see tutorial for more details
})
```

:::info
The callback will be called for all matching subscriptions that already exist at the time its registered.
:::

### client.record.unlisten(pattern)

|Argument|Type|Optional|Description|
|---|---|---|---|
|pattern|String (regex)|false|The previously registered pattern|

```javascript
client.record.unlisten('raceHorse/.*')
```

Removes a listener that was previously registered using `listen()`.


### client.record.notify(recordNames, callback? | Promise)

|Argument|Type|Optional|Description|
|---|---|---|---|
|recordNames|Array|false|The record names to be notified of data changes|
|callback|Function|true|Arguments are (String) error|

Notify that the record data was changed at the database without using deepstream APIs. Useful for third party integrations.

```javascript
client.record.notify(['raceHorse', 'pony'], (error) => {
  // ...
})

// Promise
try {
  const data = await client.record.notify(['raceHorse', 'pony'])
} catch (error) {
  // ...
}
```

### client.record.setMergeStrategy (recordName, mergeStrategy)

|Argument|Type|Optional|Description|
|---|---|---|---|
|recordName|String|false|The record name merge strategy to be changed|
|mergeStrategy|Function|false|Merge strategy to be set for the record|

Set merge strategy for a given record. See [handling data conflicts](../../tutorials/core/datasync/handling-data-conflicts) for more information.

### client.record.setMergeStrategyRegExp (pattern, mergeStrategy)

|Argument|Type|Optional|Description|
|---|---|---|---|
|pattern|String(regex)|false|The reg exp to match record names for which the merge strategy is to be changed|
|mergeStrategy|Function|false|Merge strategy to be set for the records|

Set merge strategy for a given record. See [handling data conflicts](../../tutorials/core/datasync/handling-data-conflicts) for more information.

### client.record.saveToOfflineStorage()

Save all records in memory to offline storage

```js
client.record.saveToOfflineStorage()
```

### client.record.clearOfflineStorage(callback? | Promise)

Clears offline storage data