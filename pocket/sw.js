/* Pocket revision: keeps the app working with no signal. Network first for the page (so updates arrive), cache for everything else. */
var V = "pocket-138bc2f3";
var FILES = ["./", "index.html", "data.js?v=138bc2f3", "manifest.webmanifest", "img/l-0.webp", "img/l-1.webp", "img/l-2.webp", "img/l-3.webp", "img/l-5.webp", "img/b-neutral.webp", "img/b-happy.webp", "img/icon-192.png", "img/apple-touch-icon.png"];
self.addEventListener("install", function(e){ e.waitUntil(caches.open(V).then(function(c){ return c.addAll(FILES); }).then(function(){ return self.skipWaiting(); })); });
self.addEventListener("activate", function(e){ e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.filter(function(k){ return k.indexOf("pocket-") === 0 && k !== V; }).map(function(k){ return caches.delete(k); })); }).then(function(){ return self.clients.claim(); })); });
self.addEventListener("fetch", function(e){
  var u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin || u.pathname.indexOf("/pocket/") < 0) return;
  if (e.request.mode === "navigate" || /\/pocket\/(index\.html)?$/.test(u.pathname)){
    e.respondWith(fetch(e.request).then(function(r){ var cp = r.clone(); caches.open(V).then(function(c){ c.put("index.html", cp); }); return r; }).catch(function(){ return caches.match("index.html"); }));
    return;
  }
  e.respondWith(caches.match(e.request).then(function(r){ return r || fetch(e.request).then(function(n){ var cp = n.clone(); caches.open(V).then(function(c){ c.put(e.request, cp); }); return n; }); }));
});
