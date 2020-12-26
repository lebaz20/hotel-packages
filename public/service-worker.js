/* eslint-disable no-undef,no-restricted-globals */
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
);

//The new installed service worker replaces the old service worker immediately
self.skipWaiting();

workbox.setConfig({
  debug: true,
});

const { BackgroundSyncPlugin } = workbox.backgroundSync;
const { registerRoute } = workbox.routing;
const { NetworkOnly } = workbox.strategies;

const bgSyncPlugin = new BackgroundSyncPlugin("graphQLQueue", {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
  /.*\/graphql.*/,
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST"
);
