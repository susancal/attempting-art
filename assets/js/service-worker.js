/**
 * Service Worker for attempting.art
 * Provides offline functionality and performance improvements
 */

'use strict';

// Cache version - update when site content changes
const CACHE_VERSION = 'v1';
const CACHE_NAME = `attempting-art-${CACHE_VERSION}`;

// Assets to cache on install
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/css/inspiration.css',
  '/assets/js/inspiration.js',
  '/assets/js/data/quotes.json',
  '/assets/js/data/palettes.json',
  '/assets/js/data/prompts.json',
  '/assets/js/data/adjectives.json',
  '/assets/js/data/nouns.json',
  '/assets/js/data/music.json',
  '/assets/images/discoyard.jpg',
  '/assets/images/inspiration-header.jpg',
  '/get-inspired/'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  // Skip waiting to activate the new service worker immediately
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Add all static assets to the cache
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .catch(error => {
        console.error('Cache initialization failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  // Take control of all clients immediately
  event.waitUntil(clients.claim());

  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName.startsWith('attempting-art-') && cacheName !== CACHE_NAME)
            .map(cacheName => caches.delete(cacheName))
        );
      })
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip YouTube embeds and external resources
  const url = new URL(event.request.url);
  if (url.hostname.includes('youtube') || 
      url.hostname.includes('fonts.googleapis') || 
      url.hostname.includes('fonts.gstatic')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached response if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response to cache and return
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(error => {
            // Return a fallback for HTML pages if offline
            if (event.request.headers.get('Accept').includes('text/html')) {
              return caches.match('/offline.html');
            }
            
            // Just propagate the error otherwise
            throw error;
          });
      })
  );
});