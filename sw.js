importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/45c60b4cae96059c885f.js",
    "revision": "0d798c182b34c99f9389463fa679f577"
  },
  {
    "url": "/_nuxt/5a9fa969f45ccb0c2dac.js",
    "revision": "27343126300278bc2c196e0c14bf16e6"
  },
  {
    "url": "/_nuxt/79ae76f21235001394b6.js",
    "revision": "d14269a3b0098926c80d97917c9412b2"
  },
  {
    "url": "/_nuxt/aa9539502ae8ae48eea2.js",
    "revision": "11ba064d3794e55d6398c0ef8d34310e"
  },
  {
    "url": "/_nuxt/d5cf22a65493a269fe22.js",
    "revision": "89f260289fb71ee255e4a86eabf7c624"
  }
], {
  "cacheId": "nuxt-app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
