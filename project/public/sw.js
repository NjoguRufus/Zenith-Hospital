const CACHE_NAME = 'zenith-hospital-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/robots.txt',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        // Cache images and static assets
        if (
          fetchResponse.status === 200 &&
          (event.request.url.endsWith('.jpg') ||
            event.request.url.endsWith('.png') ||
            event.request.url.endsWith('.css') ||
            event.request.url.endsWith('.js'))
        ) {
          const responseClone = fetchResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return fetchResponse;
      });
    })
  );
});