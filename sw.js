const staticAssets = [
    './',
    './app-style.css',
    './add-website/app.js'
];


self.addEventListener('install', event => {
    const cache = await caches.open();
    cache.addAll(staticAssets);
    console.log('install');
});

self.addEventListener('fetch', event => {
    console.log('fetch');
});
