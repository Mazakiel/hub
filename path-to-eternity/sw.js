// Minimal service worker for PWA installability
// No caching in dev mode - always fetch from network

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass through - no caching in dev mode
  event.respondWith(fetch(event.request));
});
