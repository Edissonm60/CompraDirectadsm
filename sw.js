// Service worker mínimo: permite instalar la app. Los datos siempre vienen en vivo de Firebase.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
