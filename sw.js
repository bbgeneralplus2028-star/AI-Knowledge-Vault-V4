self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("vault").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./app.js",
        "./ocr.js",
        "./ai-engine.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
