---
title: Plugin Introduction
description: What is a deepstream plugin and how can I make my own?
---

Deepstream at is core is a collection of plugins, handlers and a protocol that interact with each to provide a powerful set of features that can power large realtime applications.

There are currently a total of 7 plugins that are required by deepstream to run, all of which have defaults built in. Before we dive into those, let's first look at the core `PluginAPI`:

```typescript
interface PluginOptionsConfig {
    ... all options go here ...
}

interface DeepstreamPlugin {
  constructor (pluginOptions: PluginOptionsConfig, services: DeepstreamServices, config: DeepstreamConfig)
  // The name of plugin to be shown when loaded succesfully
  public abstract description: string
  // An async callback to indicate the plugin is ready to use,
  // for example when setting up a connection to a database
  public async whenReady (): Promise<void> {}
  // An optional API that is called after whenReady. This helps
  // plugins remove logic from the constructor, which is sometimes
  // a useful pattern
  public init? (): void
  // An async call back that indicates when the connector has shutdown
  // succesfully
  public async close (): Promise<void> {}
}
```

Implementing this API is all that is needed for deepstream to register the plugin. Obviously
just having this code wouldn't add any functionality! Deepstream offers a powerful set of interfaces
that allow developers to modify nearly every aspect of functionality or add your own. Let's look at the
different types, and remember to take a deeper dive into each section to see an example implementation!

## Authentication

Authentication provides three pieces of functionality to deepstream:

1. Validates whether a user is allowed to login
2. It returns serverData, which is sensitive information used by deepstream to aid permissioning
3. It returns clientData, which is data that is forwarded to the client on login

To see a guide of an Authentication plugin that only allows users to login with a preconfigured
token please look [here](https://github.com/deepstreamIO/deepstream.io-example-plugins/tree/master/src/auth)

## Permissioning

Permissioning checks every single message that goes through the system to ensure the sender is
allowed to perform the operation. Deepstream offers a powerful permissioning language called Valve
that allows users to write rules that map against simplified representations. However, users can
generate their own permissioning logic, which can allow you to interact with third-party APIs or
implement smarter caching depending on your use case.

To see a guide of a Permission plugin that only allows users to interact with actions that have
their userId in the name please look [here](https://github.com/deepstreamIO/deepstream.io-example-plugins/tree/master/src/permission)

## Cache

The cache plugin provides a way for deepstream to optimally store, retrieve and delete data in a
simple (usually key/value) data store. Deepstream offers a few out of the box for most of the
popular techs, like Redis, Memcache, Hazelcast and in memory. However you can easily implement
your own by implementing it's simple API.

The main performance benefit you always want to implement with cache layers is to seperate the version
and values so that retrieving thousands of records in one go is significantly faster!

To see a guide of a Cache plugin that stores data in memory please look [here](https://github.com/deepstreamIO/deepstream.io-example-plugins/tree/master/src/cache)

## Storage

The storage API is a subset of the Cache API. It's used alot less frequent than the cache layer,
once for each write, but only once for a record thoughout the records entire lifetime!

To see a guide of a simple storage plugin that stores it's data please look [here](https://github.com/deepstreamIO/deepstream.io-example-plugins/tree/master/src/storage).
Word of advice though, please don't use this system in production unless your okay with insanely
slow speeds.

## Logger

The Logger is responsible for getting important deepstream information out into the world for us
to be able to trace actions efficiently. Currently the default logger is that std out, as dealing
with logs is usually quite expensive and so is better to leave for seperate processes. However you can
easily integrate with multiple logging solutions and send your logs directly to your logging frameworks.

To see a guide of a simple log plugin that buffers debug logs in memory until an error occurs (helps debugging!)
please look [here](https://github.com/deepstreamIO/deepstream.io-example-plugins/tree/master/src/logger)

## Connection Endpoints

A connection endpoint is the deepstream nervous system. Without it you can't get any messages back and forth between
it and the outside world. We provide three build in solutions, [ws](https://github.com/websockets/ws), [uWebsockets.js](https://github.com/uNetworking/uWebSockets.js/) and HTTP via a standard called JIF.

However its super simple to build your own, which in turn will allow you to create your own crazy protocols. Check out the source code for inspiration.

## Monitoring

Monitoring is a new API that allows users to track all high level actions that happen in deepstream and show it in a
pretty display using a system such as grafana.

To see an example monitoring plugin that exposes a HTTP server to allow users to query it's currently state please
look [here](https://github.com/deepstreamIO/deepstream.io-example-plugins/tree/master/src/monitoring)

Using the monitoring plugin it's straightforward to implement an audit log of every user message (event, record, rpc request and data) that goes through the server for compliance purposes.

## Cluster Node

The almighty cluster node!. It's responsible for allowing deepstream nodes to communicate with each other. The server comes with a no-cluster and vertical cluster options in order to use all CPU cores.

There's no magic to this, purely just a `send`, `sendDirect` and `recieve` method.

To see an example clustering plugin that allows nodes to talk to each other using redis please look at the redis cluster node source code [here](https://github.com/deepstreamIO/deepstream.io-clusternode-redis) or the vertical cluster source code [here](https://github.com/deepstreamIO/deepstream.io/blob/master/src/services/cluster-node/vertical-cluster-node.ts)

## Locks

Deepstream needs distributed locks for listening. The build in mechanism works fine, but if you want all state to live in an external system (like redis) you can build your own.

If anyone would like a guide on how to write your own please let us know!


## Cluster Registry

Deepstream needs a registry of all servers within the cluster in order to cleanup state effectively when a node
exits and to elect a leader to decisions that can't be distributed, like who should be in charge of locks (when using the default plugin). This API is currently sync which makes it quite hard to be experimental with. Why? Because
sync is just way quicker than using async/await. Once that changes (or someone really wants an async API) we'll demonstrate how to write one!

## State Registry Factory

The State Registry is what allows deepstream to be aware of the state of the entire cluster, useful in order to unify
presence, subscriptions and listening across multiple nodes. This API is currently sync which makes it quite hard to be experimental with. Why? Because sync is just way quicker than using async/await. Once that changes (or someone really wants an async API) we'll demonstrate how to write one!


## Subscription Registry Factory

The Subscription Registry is sort of like the dispatch centre of deepstream. It holds all subscriptions and gets told whenever someone subscribes or unsubscribes to anything. It's also responsible for sending those messages out
to all interested clients. This is a plugin purely because we want to start experimenting with different broadcast
patterns and allowing users to decide which one makes most sense. We'll be adding an example plugin to this in the future as it's quite complex. However if anyone is interested please raise a git issue and we'll be more than happy to run you through it!

## Custom Plugins

A custom plugin is something that can add new functionality to connect your world to internal deepstream logic and services. A couple of random examples:

- Forcefully terminating user sessions via a HTTP request
- Refreshing valve permissions on demand without a server restart
- Send login/logout events to a third party system
- Changing deepstream configuration during runtime (like timeout durations)

The custom plugin API currently is just in its infancy, and we're hoping that we get requests of useful (and crazy!)
ideas to help us mold it into something even more powerful!

To see example custom plugins please look at [building custom plugins](20-custom-plugin.md)
