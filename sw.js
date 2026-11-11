// Entre Ciel et Terre — fonctionnement hors ligne
const VERSION = 'ect-v2';
const FICHIERS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icones/icone-192.png',
  './icones/icone-512.png',
  './icones/icone-maskable-512.png',
  './icones/icone-180.png',
  './polices/lora.ttf',
  './polices/lora-italique.ttf'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(cles => Promise.all(cles.filter(k => k !== VERSION && k !== 'ect-polices').map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Polices Google : gardées pour toujours après le premier chargement
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open('ect-polices').then(c => c.match(req).then(r => r || fetch(req).then(rep => {
        if (rep.ok || rep.type === 'opaque') c.put(req, rep.clone());
        return rep;
      }).catch(() => new Response('', { status: 503 }))))
    );
    return;
  }

  if (url.origin !== location.origin) return;

  // Appli : d'abord le cache, puis mise à jour en arrière-plan
  e.respondWith(
    caches.open(VERSION).then(c => c.match(req, { ignoreSearch: true }).then(enCache => {
      const reseau = fetch(req).then(rep => {
        if (rep.ok) c.put(req, rep.clone());
        return rep;
      }).catch(() => enCache || c.match('./index.html'));
      return enCache || reseau;
    }))
  );
});
