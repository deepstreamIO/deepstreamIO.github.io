---
title: Node API
description: API docs for using deepstream within your own node application
---

API docs for using deepstream within your own node application

### `constructor(options)`
Instantiate a new deepstream server instance. You can pass an optional object
which contains the configuration or a filePath to the configuration file. Missing options will be merged with default values.

If you omit the argument, deepstream will use default values. Read more about
the [configuration and default values](20-configuration.mdx).

|Parameter|Type|Optional|Description|
|---|---|---|---|
|options|Object or string|true|Either the configuration object or a filepath to the configuration file|

```javascript
const { Deepstream } = require('@deepstream/server')
const server = new Deepstream({})
```

:::tip
calling `server = new Deepstream({})` only creates the instance, to actually start the server, you still need to call `server.start()`
:::

## Events

### `started`
Emitted once `deepstream.start()` has been called and the startup procedure has completed successfully.

### `stopped`
Emitted once `deepstream.stop()` has been called and the server has been completely shut down.

:::tip
Stopping the server does not imply exiting the Node.js process. To do so, the following code can be used:

```javascript
server.on('stopped', () => process.exit(0))
```
:::
---

### `DEEPSTREAM_STATE_CHANGED`

Emitted for each state transition, useful for debuging purposes.

## Methods

### `start()`
Starts the server.

### `stop()`
Stops the server. Once the server is stopped, it can not be started again using the same instance of the server.

### `isRunning()`

Returns true if the deepstream server is running, otherwise false.

### `getServices()`

Return all running services

### `getConfig()`

Returns server configuration options

### `set(key, value)`
This method allows you to overwrite particular configuration options which were built via the
configuration initialization step.

:::note
If deepstream is initialized with a configuration object, `set()` will override the keys in your initial configuration. This is useful for passing in objects which are shared between deepstream and the rest of your application, such as a cache connector. You can override any of the options using the same name within your [configuration](20-configuration.mdx), except for the notable difference(s) below.
:::

|Parameter|Type|Optional|Description|
|---|---|---|---|
|key|String|false|The configuration option that should be set|
|value|JSONValue|false|The value that should be used|

##### Differences when using `set(key, value)`

These options might have a different name and location in the structure of the configuration object. If you use `set()` you also need to provide the instantiated instance as the `value`.

- `authentication`
- `permission`
- `logger`
- `cache`
- `storage`

Make sure you run `server.start()` after you set all your options.

Some examples of overriding plugins are initialization:

```javascript
/**
* An object that exposes an isValidUser function.
*/
server.set('authentication', new OAuthHandler({
  options: ''
}, server.getServices()))

/**
* An object that that exposes a canPerformAction function.
*/
server.set('permission', new LdapPermissionHandler({

}, server.getServices()))

/**
* A logger
*/
server.set('logger', new FileLogger({

}, server.getServices()))
```
