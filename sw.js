// sw.js (create a file named sw.js at project root)
self.addEventListener('install', event => {
    // Cache app shell (optional) - adjust paths if hosting under a subpath
    event.waitUntil(
        caches.open('todo-app-shell-v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
            ]).catch(() => { });
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

// Simple fetch handler that tries network first, falls back to cache for app shell
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    // For same-origin navigation/app shell
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => caches.match('/index.html'))
        );
        return;
    }

    // All other requests: try network then cache
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});