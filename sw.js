self.addEventListener('install',function(e){
  e.waitUntil(
    caches.open('FoodItem').then(function(cache){
      return cache.addAll([
        '/index.html',
        '/style.css',
        '/main.js',
        '/data.json',
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});
