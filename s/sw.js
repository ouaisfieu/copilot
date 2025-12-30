const CACHE = 'vc-cache-v1';
const ASSETS = ['/', '/index.html', '/styles.css', '/app.js', '/data_sample.csv'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
