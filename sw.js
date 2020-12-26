const staticCacheName = "_app-static_v1"

const assets = ["/", "/index.html", "/manifest.json"]

const runtimeRegExp = /(.css|.png|.jpg|.PNG|.mp3|.svg|.js|.json|.woff2|.ttf|.woff)$|^(https:\/\/fonts.googleapis.com|https:\/\/fonts.gstatic.com)/

// install SW
self.addEventListener("install", e => {
  e.waitUntil(
    caches
      .open(staticCacheName)
      .then(cache => cache.addAll(assets))
      .then(() => self.skipWaiting())
  )
})

// activate event
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
      )
    })
  )
})

// fetch event
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response1 => {
      return (
        response1 ||
        fetch(e.request).then(response => {
          if (!response || response.status !== 200) {
            return response
          }

          const responseToCache = response.clone()
          if (response.url.match(runtimeRegExp)) {
            caches.open(staticCacheName).then(cache => {
              cache.put(e.request, responseToCache)
              return response
            })
          }
        })
      )
    })
  )
})
