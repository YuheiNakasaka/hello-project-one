importScripts('/hello-project-one/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/hello-project-one/_nuxt/07009234008d0208e274.js",
    "revision": "17d450652f4d51a6ec359931b4c0a92c"
  },
  {
    "url": "/hello-project-one/_nuxt/09c9139ef7c157d577ad.js",
    "revision": "01f105fb7eeca8d4922579c2d45f346e"
  },
  {
    "url": "/hello-project-one/_nuxt/3df11b66c4f58bb53a04.js",
    "revision": "0b223c27fd5d0f22d99e1bb5869a66fc"
  },
  {
    "url": "/hello-project-one/_nuxt/4af7559771906309c3ab.js",
    "revision": "571d06e0323e8bf41ef8c58fc175bafe"
  },
  {
    "url": "/hello-project-one/_nuxt/5e35f20e1041f16c6c45.js",
    "revision": "64fdd525ee1baa20940eda7efcef607b"
  },
  {
    "url": "/hello-project-one/_nuxt/94a32a97a90285989227.js",
    "revision": "147c662223ee9b5dee7ebe844d75b305"
  },
  {
    "url": "/hello-project-one/_nuxt/c826f3ddc429178a70c9.js",
    "revision": "c06b0df09332a53b35799b7c3058aa44"
  }
], {
  "cacheId": "hello-project-one",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/hello-project-one/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/hello-project-one/.*'), workbox.strategies.networkFirst({}), 'GET')
