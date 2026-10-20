// Zelo: service worker mínimo. Serve para o Chrome reconhecer o Zelo como app instalável.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
