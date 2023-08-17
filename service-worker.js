// const CACHE_NAME = 'my-app-cache-v14';
// const urlsToCache = [
//   '/',
//   '/pinzas',
//   '/about',
//   '/use',
//   '/pinzas',
//   '/product',
//   '/blog',
  
 
//   // Agrega aquí todos los recursos que deseas almacenar en caché
// ];

// self.addEventListener('install', (event) => {
//   self.skipWaiting();
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName !== CACHE_NAME) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
//   return self.clients.claim();
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });
