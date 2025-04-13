/**
 * Sophisticated Artistic Inspiration Tools
 * Elegantly designed for my creative journal
 * Security and performance optimized version
 */

// Use strict mode for better error catching and prevention of global leaks
'use strict';

// Initialize all tools when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Only initialize if we're on the Get Inspired page
  const quoteGenerator = document.getElementById('quote-generator');
  if (quoteGenerator) {
    // Initialize all inspiration tools
    // Load data files first then initialize components
    Promise.all([
      fetchData('/assets/js/data/quotes.json'),
      fetchData('/assets/js/data/palettes.json'),
      fetchData('/assets/js/data/prompts.json'),
      fetchData('/assets/js/data/adjectives.json'),
      fetchData('/assets/js/data/nouns.json'),
      fetchData('/assets/js/data/music.json')
    ])
    .then(function(results) {
      // Initialize each component with its data
      initQuoteGenerator(results[0] || defaultQuotes);
      initColorPalette(results[1] || defaultPalettes);
      initCreativePrompts(results[2] || defaultPrompts);
      initWordCombinator(results[3] || defaultAdjectives, results[4] || defaultNouns);
      initColorExplorer();
      initMusicInspiration(results[5] || defaultMusic);
    })
    .catch(function(error) {
      console.error('Error loading inspiration data:', error);
      // Fall back to default data
      initQuoteGenerator(defaultQuotes);
      initColorPalette(defaultPalettes);
      initCreativePrompts(defaultPrompts);
      initWordCombinator(defaultAdjectives, defaultNouns);
      initColorExplorer();
      initMusicInspiration(defaultMusic);
    });
  }
});

// Utility function to fetch JSON data
function fetchData(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    });
}

// Default data fallbacks if JSON files can't be loaded
const defaultQuotes = [
  '"Art washes away from the soul the dust of everyday life." - Pablo Picasso',
  '"Creativity takes courage." - Henri Matisse',
  '"Every artist was first an amateur." - Ralph Waldo Emerson'
];

const defaultPalettes = [
  ['#D4AF37', '#800020', '#4B0082', '#191970', '#014421'],
  ['#B87333', '#704214', '#5E3200', '#9C5903', '#F5DEB3'],
  ['#A67B5B', '#614E1A', '#96511E', '#836953', '#C9A66B']
];

const defaultPrompts = [
  'Juxtapose ordinary moments with surreal elements to create a dreamlike scene.',
  'Create a composition that explores the theme of "inner worlds" using rich color harmonies.',
  'Visualize the concept of infinity through abstract forms and celestial imagery.'
];

const defaultAdjectives = ['Luminous', 'Ephemeral', 'Vibrant'];
const defaultNouns = ['Horizon', 'Memory', 'Shadow'];

const defaultMusic = {
  ambient: ['rG-Fs7de_9o'],
  classical: ['9E6b3swbnWg'],
  jazz: ['vLBv8c6r0-o'],
  electronic: ['AHGvaQMClEo'],
  world: ['kV0R8PuMr4g'],
  acoustic: ['v-GJB57YK_k']
};

// Utility function for sanitizing text
function sanitizeText(text) {
  if (!text) return '';
  // Simple sanitization - this prevents XSS when used with textContent
  return String(text).trim();
}

// More secure random function
function secureRandom() {
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] / (Math.pow(2, 32) - 1);
  }
  return Math.random(); // Fallback
}

/**
 * Artistic Quote Generator
 * Presents beautiful quotes about art and creativity
 */
function initQuoteGenerator(quotes) {
  const quoteElement = document.getElementById('random-quote');
  const newQuoteButton = document.getElementById('new-quote');
  
  if (!quoteElement || !newQuoteButton) return;
  
  // Store animation timers so they can be cleared if needed
  let fadeOutTimer = null;
  let fadeInTimer = null;
  
  // Initial random quote on page load
  setRandomQuote();
  
  // Event listener with debounce to prevent rapid clicking
  let isProcessing = false;
  newQuoteButton.addEventListener('click', function() {
    if (isProcessing) return;
    isProcessing = true;
    
    setRandomQuote();
    
    // Prevent multiple rapid clicks
    setTimeout(function() {
      isProcessing = false;
    }, 500);
  });
  
  function setRandomQuote() {
    // Clear any pending timeouts to prevent animation issues
    clearTimeout(fadeOutTimer);
    clearTimeout(fadeInTimer);
    
    // Sanitize and set quote (XSS prevention)
    quoteElement.style.opacity = '0';
    
    fadeOutTimer = setTimeout(function() {
      // Get random quote using a more secure random function
      const randomIndex = Math.floor(secureRandom() * quotes.length);
      const safeQuote = sanitizeText(quotes[randomIndex]);
      
      // Use textContent instead of innerHTML for security
      quoteElement.textContent = safeQuote;
      
      // Fade in
      quoteElement.style.opacity = '1';
      quoteElement.classList.add('fade');
      
      fadeInTimer = setTimeout(function() {
        quoteElement.classList.remove('fade');
      }, 700);
    }, 300);
  }
}

/**
 * Sophisticated Color Palette Generator
 * Creates harmonious color palettes for artistic inspiration
 */
function initColorPalette(palettes) {
  const paletteContainer = document.querySelector('.palette-container');
  const generateButton = document.getElementById('generate-palette');
  
  if (!paletteContainer || !generateButton) return;
  
  // Apply initial palette
  applyPalette(palettes[0]);
  
  // Add event listener with debounce
  let isProcessing = false;
  generateButton.addEventListener('click', function() {
    if (isProcessing) return;
    isProcessing = true;
    
    const randomIndex = Math.floor(secureRandom() * palettes.length);
    applyPalette(palettes[randomIndex]);
    
    setTimeout(function() {
      isProcessing = false;
    }, 500);
  });
  
  function applyPalette(palette) {
    const swatches = paletteContainer.querySelectorAll('.color-swatch');
    if (!swatches || swatches.length === 0) return;
    
    // Clear any existing animation timers
    swatches.forEach(swatch => {
      if (swatch._animationTimer) {
        clearTimeout(swatch._animationTimer);
        swatch._animationTimer = null;
      }
    });
    
    // Staggered animation for sophistication
    swatches.forEach((swatch, index) => {
      if (index >= palette.length) return;
      
      swatch._animationTimer = setTimeout(() => {
        swatch.style.backgroundColor = sanitizeText(palette[index]);
        swatch.classList.add('pop');
        
        // Add hex code as tooltip (sanitized)
        swatch.setAttribute('title', sanitizeText(palette[index]));
        
        swatch._animationTimer = setTimeout(() => {
          swatch.classList.remove('pop');
          swatch._animationTimer = null;
        }, 400);
      }, index * 100); // Staggered effect
    });
  }
}

/**
 * Artistic Creative Prompts
 * Refined prompts to expand your creative horizons
 */
function initCreativePrompts(prompts) {
  const promptElement = document.getElementById('current-prompt');
  const newPromptButton = document.getElementById('new-prompt');
  
  if (!promptElement || !newPromptButton || !prompts || prompts.length === 0) return;
  
  let fadeOutTimer = null;
  let fadeInTimer = null;
  
  // Initial prompt
  setRandomPrompt();
  
  // Add event listener with debounce
  let isProcessing = false;
  newPromptButton.addEventListener('click', function() {
    if (isProcessing) return;
    isProcessing = true;
    
    setRandomPrompt();
    
    setTimeout(function() {
      isProcessing = false;
    }, 800);
  });
  
  function setRandomPrompt() {
    // Clear any pending timeouts
    clearTimeout(fadeOutTimer);
    clearTimeout(fadeInTimer);
    
    // Fade out current prompt
    promptElement.style.opacity = 0;
    
    fadeOutTimer = setTimeout(() => {
      // Change prompt using secure random and sanitization
      const randomIndex = Math.floor(secureRandom() * prompts.length);
      promptElement.textContent = sanitizeText(prompts[randomIndex]);
      
      // Fade in with bounce effect
      promptElement.style.opacity = 1;
      promptElement.classList.add('bounce');
      
      fadeInTimer = setTimeout(() => {
        promptElement.classList.remove('bounce');
      }, 800);
    }, 300);
  }
}

/**
 * Word Combinator
 * Generates adjective-noun combinations for creative inspiration
 */
function initWordCombinator(adjectives, nouns) {
  const adjectiveElement = document.getElementById('random-adjective');
  const nounElement = document.getElementById('random-noun');
  const newWordButton = document.getElementById('new-word-combo');
  
  if (!adjectiveElement || !nounElement || !newWordButton) return;
  if (!adjectives || adjectives.length === 0 || !nouns || nouns.length === 0) return;
  
  let fadeOutTimer = null;
  let fadeInTimer = null;
  
  // Initial random word combo
  setRandomWordCombo();
  
  // Add event listener with debounce
  let isProcessing = false;
  newWordButton.addEventListener('click', function() {
    if (isProcessing) return;
    isProcessing = true;
    
    setRandomWordCombo();
    
    setTimeout(function() {
      isProcessing = false;
    }, 800);
  });
  
  function setRandomWordCombo() {
    // Clear any pending timeouts
    clearTimeout(fadeOutTimer);
    clearTimeout(fadeInTimer);
    
    // Fade out
    adjectiveElement.style.opacity = 0;
    nounElement.style.opacity = 0;
    
    fadeOutTimer = setTimeout(() => {
      // Change words using secure random and sanitization
      const randomAdj = adjectives[Math.floor(secureRandom() * adjectives.length)];
      const randomNoun = nouns[Math.floor(secureRandom() * nouns.length)];
      
      adjectiveElement.textContent = sanitizeText(randomAdj);
      nounElement.textContent = sanitizeText(randomNoun);
      
      // Fade in
      adjectiveElement.style.opacity = 1;
      nounElement.style.opacity = 1;
      adjectiveElement.classList.add('fade');
      nounElement.classList.add('fade');
      
      fadeInTimer = setTimeout(() => {
        adjectiveElement.classList.remove('fade');
        nounElement.classList.remove('fade');
      }, 700);
    }, 300);
  }
}

/**
 * Color Explorer
 * Generate and display individual colors with their values
 */
function initColorExplorer() {
  const colorDisplay = document.getElementById('single-color-display');
  const hexValue = document.getElementById('hex-value');
  const rgbValue = document.getElementById('rgb-value');
  const generateButton = document.getElementById('generate-color');
  
  if (!colorDisplay || !hexValue || !rgbValue || !generateButton) return;
  
  let fadeOutTimer = null;
  let fadeInTimer = null;
  
  // Initial color
  setRandomColor();
  
  // Add event listener with debounce
  let isProcessing = false;
  generateButton.addEventListener('click', function() {
    if (isProcessing) return;
    isProcessing = true;
    
    setRandomColor();
    
    setTimeout(function() {
      isProcessing = false;
    }, 800);
  });
  
  function setRandomColor() {
    // Clear any pending timeouts
    clearTimeout(fadeOutTimer);
    clearTimeout(fadeInTimer);
    
    // Generate random color with secure random
    const r = Math.floor(secureRandom() * 256);
    const g = Math.floor(secureRandom() * 256);
    const b = Math.floor(secureRandom() * 256);
    
    // Convert to hex
    const hex = rgbToHex(r, g, b);
    
    // Fade out
    colorDisplay.style.opacity = 0.5;
    hexValue.style.opacity = 0;
    rgbValue.style.opacity = 0;
    
    fadeOutTimer = setTimeout(() => {
      // Update display
      colorDisplay.style.backgroundColor = hex;
      hexValue.textContent = hex;
      rgbValue.textContent = `${r}, ${g}, ${b}`;
      
      // Fade in
      colorDisplay.style.opacity = 1;
      hexValue.style.opacity = 1;
      rgbValue.style.opacity = 1;
      
      colorDisplay.classList.add('fade');
      
      fadeInTimer = setTimeout(() => {
        colorDisplay.classList.remove('fade');
      }, 500);
    }, 300);
  }
  
  function rgbToHex(r, g, b) {
    // Ensure values are in valid range
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  }
}

/**
 * Music Inspiration
 * Provides music videos across different genres
 */
function initMusicInspiration(musicByGenre) {
  const videoContainer = document.getElementById('music-video-container');
  const genreSelect = document.getElementById('genre-select');
  const generateButton = document.getElementById('generate-music');
  
  if (!videoContainer || !genreSelect || !generateButton || !musicByGenre) return;
  
  let videoTimer = null;
  
  // Add event listener with debounce
  let isProcessing = false;
  generateButton.addEventListener('click', function() {
    if (isProcessing) return;
    isProcessing = true;
    
    // Get selected genre (sanitized)
    const genre = sanitizeText(genreSelect.value);
    const videos = musicByGenre[genre];
    
    if (!videos || videos.length === 0) {
      isProcessing = false;
      return;
    }
    
    // Get random video using secure random
    const randomIndex = Math.floor(secureRandom() * videos.length);
    const videoId = sanitizeText(videos[randomIndex]);
    
    if (!videoId) {
      isProcessing = false;
      return;
    }
    
    // Clear previous video and any pending timeouts
    clearTimeout(videoTimer);
    videoContainer.innerHTML = '';
    videoContainer.style.display = 'none';
    
    // Create new iframe with security measures
    const iframe = document.createElement('iframe');
    
    // Use youtube-nocookie domain for enhanced privacy
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.title = "Music Inspiration Video";
    
    videoContainer.appendChild(iframe);
    
    // Show with animation after a short delay
    videoTimer = setTimeout(() => {
      videoContainer.style.display = 'block';
      videoContainer.classList.add('fade-in');
      
      videoTimer = setTimeout(() => {
        videoContainer.classList.remove('fade-in');
        videoTimer = null;
        isProcessing = false;
      }, 800);
    }, 300);
  });
  
  // Clean up on page unload
  window.addEventListener('beforeunload', function() {
    clearTimeout(videoTimer);
  });
}