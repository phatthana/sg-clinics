const cacheName = 'myPWACache';
const filesToCache = [
    '/',
    '/index.html'
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(filesToCache);
        })
    )
});

self.addEventListener("activate", (e) => {
    e.waitUntil(
        console.log("Activated Service worker")
    )
 })

 self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request)
        .then((response) => {
            return response || fetch(e.request)
        })
    )
 })