// Name des Caches
const CACHE_NAME = "meine-pwa-cache-v1";

// Dateien, die offline verfügbar sein sollen
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

// Installations-Event: Dateien in Cache legen
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch-Event: Versuche zuerst aus dem Cache zu laden
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
