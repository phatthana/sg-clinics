// const cacheName = 'myPWACache';
// const filesToCache = [
//     '/',
//     '/index.html',
//     '/static/css/2.b179ccdc.chunk.css'
// ];

// self.addEventListener("install", (e) => {
//     e.waitUntil(
//         caches.open(cacheName).then((cache) => {
//             cache.addAll(filesToCache);
//         })
//     )
// });

// self.addEventListener("activate", (e) => {
//     e.waitUntil(
//         console.log("Activated Service worker")
//     )
//  })

//  self.addEventListener("fetch", (e) => {
//     e.respondWith(
//         caches.match(e.request)
//         .then((response) => {
//             return response || fetch(e.request)
//         })
//     )
//  })

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);