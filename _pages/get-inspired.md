---
title: "Get Inspired"
layout: single
permalink: /get-inspired/
classes: wide
header:
  overlay_color: "#635bff"
  overlay_filter: "0.2"
  overlay_image: /assets/images/inspiration-header.jpg
excerpt: "Interactive tools to spark your creativity"
head_scripts:
  - /assets/js/inspiration.js
  - defer: true
styles:
  - /assets/css/inspiration.css
---

<div class="page-intro">
  <h1 class="page-title">Creative Inspiration Tools</h1>
  <p class="page-description">Discover resources designed to spark your artistic imagination and fuel your creative process.</p>
</div>

<div class="tools-container">
  <div class="tools-grid">
    <!-- Quote Generator Tool -->
    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon gradient-bg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 10C6.5 8.19 8.19 6.5 10 6.5H14V5H10C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15H14V13.5H10C8.19 13.5 6.5 11.81 6.5 10ZM10.5 11H13.5V9H10.5V11ZM14 10C14 11.81 12.31 13.5 10.5 13.5H7V15H10.5C13.26 15 15.5 12.76 15.5 10C15.5 7.24 13.26 5 10.5 5H7V6.5H10.5C12.31 6.5 14 8.19 14 10Z" fill="white"/>
          </svg>
        </div>
        <h2>Artistic Quotes</h2>
      </div>
      
      <div class="tool-content" id="quote-generator">
        <div class="quote-container">
          <blockquote id="random-quote">
            "Art washes away from the soul the dust of everyday life." - Pablo Picasso
          </blockquote>
        </div>
        <div class="tool-action">
          <button id="new-quote" class="btn btn--primary">Generate Quote</button>
        </div>
      </div>
    </div>
    
    <!-- Color Palette Generator Tool -->
    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon accent-gradient">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.04 22 12C22 14.45 20.96 16.67 19.22 18.25C17.67 19.68 15.7 20.7 13.5 21.06C13 21.13 12.5 21.21 12 21.21C11.43 21.21 11 20.78 11 20.21V17.96C11 17.39 10.59 16.93 10.03 16.88C7.71 16.67 6 14.9 6 12.5C6 12.22 6.22 12 6.5 12H8.5C8.78 12 9 11.78 9 11.5C9 11.22 8.78 11 8.5 11H6.5C6.22 11 6 10.78 6 10.5C6 10.22 6.22 10 6.5 10H8.5C8.78 10 9 9.78 9 9.5C9 9.22 8.78 9 8.5 9H6.5C6.22 9 6 8.78 6 8.5C6 8.22 6.22 8 6.5 8H10.5C10.78 8 11 7.78 11 7.5C11 7.22 10.78 7 10.5 7H9.5C9.22 7 9 6.78 9 6.5C9 6.22 9.22 6 9.5 6H11.5C11.78 6 12 5.78 12 5.5C12 5.22 11.78 5 11.5 5H10.59C10.22 5 9.89 4.68 9.88 4.32C9.88 3.89 10.29 3.56 10.71 3.66C11.57 3.86 12.39 4.21 13.13 4.68C15.89 6.5 17.06 10.05 15.36 13.36C15.11 13.9 14.37 14.1 13.87 13.77C13.39 13.44 13.51 12.71 13.83 12.3C14.09 11.92 14.31 11.5 14.47 11.03C14.99 9.64 14.83 8.06 13.95 6.77C13.14 5.6 11.88 4.66 10.41 4.21C10.1 4.11 9.98 3.73 10.24 3.5C10.43 3.36 10.69 3.45 10.89 3.56C13.8 5.14 15.29 8.61 14.27 11.77C14.19 12.07 14.08 12.37 13.93 12.65C13.79 12.91 13.8 13.26 14.06 13.43C14.32 13.6 14.69 13.5 14.82 13.23C15.22 12.43 15.5 11.55 15.61 10.62C15.62 10.43 15.76 10.26 15.94 10.23C16.15 10.19 16.35 10.33 16.4 10.53C16.57 11.37 16.56 12.24 16.36 13.08C17.95 11.41 18.11 8.82 16.82 6.76C16.5 6.26 16.14 5.8 15.73 5.4C15.5 5.16 15.5 4.8 15.73 4.57C15.96 4.34 16.32 4.34 16.56 4.57C17.45 5.49 18.1 6.62 18.47 7.88C18.73 8.72 18.86 9.62 18.86 10.5C18.86 13.92 16.81 16.89 13.82 18.19C13.06 18.53 12.26 18.79 11.44 18.94C11.17 18.99 11 19.26 11 19.54V20.19C11 20.46 11.22 20.68 11.5 20.69C11.81 20.69 12.13 20.68 12.44 20.65C14.5 20.31 16.35 19.32 17.79 17.96C19.27 16.56 20.21 14.64 20.29 12.58C20.29 12.28 20.53 12.04 20.83 12.03C21.14 12.03 21.38 12.29 21.37 12.6C21.27 16.76 18.04 20.21 13.89 20.95C13.55 21 13.21 21.04 12.86 21.06C12.57 21.08 12.28 21.1 12 21.1C11.64 21.1 11.29 21.07 10.95 21.03C10.52 20.98 10.15 20.65 10.17 20.21C10.19 19.78 10.53 19.42 10.95 19.42C12.22 19.42 13.45 19.14 14.57 18.61C17.52 17.03 18.87 13.43 17.29 10.47C16.28 8.56 14.43 7.31 12.41 7.11C11.98 7.06 11.63 6.71 11.62 6.28C11.62 5.79 12.03 5.42 12.5 5.5C15.15 5.81 17.34 7.51 18.32 9.83C19.58 12.89 18.4 16.34 15.71 18.08C15.05 18.51 14.31 18.83 13.56 19.06C12.86 19.28 12.11 19.4 11.38 19.4C11.14 19.4 10.95 19.22 10.95 18.98V16.94C10.95 16.71 11.12 16.5 11.35 16.45C13.69 15.96 15.35 14.22 15.74 12.09C16.07 10.23 15.33 8.28 13.78 7.16C13.6 7.02 13.54 6.79 13.62 6.58C13.71 6.37 13.92 6.22 14.15 6.22H14.5C14.78 6.22 15 6 15 5.72C15 5.44 14.78 5.22 14.5 5.22H14.06C13.85 5.22 13.66 5.04 13.66 4.83C13.66 4.62 13.84 4.43 14.06 4.43H15.94C16.16 4.43 16.34 4.25 16.34 4.03C16.34 3.81 16.16 3.62 15.94 3.62H13.97C13.76 3.62 13.59 3.45 13.59 3.24C13.59 3.11 13.68 3 13.79 2.93C16.47 1.76 19.57 2 22 3.58C20.2 2.56 18.02 2 16 2C8.82 2 3 7.82 3 15C3 19.17 5.59 22.75 9.36 24.11C4.95 23.2 2 19.4 2 15C2 9.48 6.48 5 12 5" fill="white"/>
          </svg>
        </div>
        <h2>Color Palettes</h2>
      </div>
      
      <div class="tool-content" id="color-palette">
        <p class="tool-description">Explore harmonious color combinations to inspire your next creative project.</p>
        
        <div class="palette-container">
          <div class="color-swatch" style="background-color: #635bff;"></div>
          <div class="color-swatch" style="background-color: #ff9500;"></div>
          <div class="color-swatch" style="background-color: #1a1f36;"></div>
          <div class="color-swatch" style="background-color: #4a43d4;"></div>
          <div class="color-swatch" style="background-color: #32cd32;"></div>
        </div>
        
        <div class="color-names">
          <span>Primary</span>
          <span>Accent</span>
          <span>Dark</span>
          <span>Secondary</span>
          <span>Success</span>
        </div>
        
        <div class="tool-action">
          <button id="generate-palette" class="btn btn--primary">Generate Palette</button>
        </div>
      </div>
    </div>
    
    <!-- Creative Prompts Tool -->
    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon gradient-bg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.12 5.12L18.87 8.87M3 17.25V21H6.75L17.81 9.93L14.06 6.18L3 17.25Z" fill="white"/>
          </svg>
        </div>
        <h2>Creative Prompts</h2>
      </div>
      
      <div class="tool-content" id="creative-prompts">
        <p class="tool-description">Thoughtfully curated artistic challenges to expand your creative horizons.</p>
        
        <div class="prompt-container">
          <p id="current-prompt">Juxtapose ordinary moments with surreal elements to create a dreamlike scene.</p>
        </div>
        
        <div class="tool-action">
          <button id="new-prompt" class="btn btn--primary">Generate Prompt</button>
        </div>
      </div>
    </div>
    
    <!-- Random Adjective-Noun Generator Tool -->
    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon accent-gradient">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.06 9L15 9.94L5.92 19H5V18.08L14.06 9ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" fill="white"/>
          </svg>
        </div>
        <h2>Word Combinator</h2>
      </div>
      
      <div class="tool-content" id="word-generator">
        <p class="tool-description">Generate random adjective-noun combinations to spark unexpected creative ideas.</p>
        
        <div class="word-combo-container">
          <div class="word-combo">
            <span id="random-adjective">Luminous</span>
            <span id="word-separator">+</span>
            <span id="random-noun">Shadow</span>
          </div>
        </div>
        
        <div class="tool-action">
          <button id="new-word-combo" class="btn btn--primary">Generate Combination</button>
        </div>
      </div>
    </div>
    
    <!-- Single Color Generator Tool -->
    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon gradient-bg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 12C17.5 13.93 16.93 15.59 16.03 16.97L17.45 18.38C18.5 16.72 19 14.93 19 13C19 8.58 15.78 4 12 4C10.45 4 9.23 4.37 8.01 5.07L9.34 6.41C10.17 5.86 10.9 5.5 12 5.5C15.03 5.5 17.5 8.24 17.5 12M12 18.5C8.97 18.5 6.5 15.76 6.5 12C6.5 10.27 7.18 8.68 8.37 7.55L6.96 6.14C5.58 7.57 4.5 9.58 4.5 12C4.5 16.42 7.72 21 11.5 21C13.28 21 14.79 20.69 16.11 19.73L14.75 18.38C13.92 18.5 13.28 18.5 12 18.5M2 4.27L4.28 6.55L4.73 7C3.08 8.3 1.78 10.03 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.81 19.08L19.73 22L21 20.73L3.27 3M12 6.5C10.5 6.5 9.24 7.32 8.58 8.5H11.45L13.45 10.5H8.5V12H15.46L16.96 13.5C16.97 13.33 17 13.17 17 13C17 9.41 14.09 6.5 10.5 6.5H12Z" fill="white"/>
          </svg>
        </div>
        <h2>Color Explorer</h2>
      </div>
      
      <div class="tool-content" id="color-explorer">
        <p class="tool-description">Discover individual colors with their hex and RGB values.</p>
        
        <div class="color-display-container">
          <div id="single-color-display" class="single-color-display" style="background-color: #635bff;"></div>
          <div class="color-info">
            <div class="color-code">
              <span>HEX: </span>
              <span id="hex-value">#635bff</span>
            </div>
            <div class="color-code">
              <span>RGB: </span>
              <span id="rgb-value">99, 91, 255</span>
            </div>
          </div>
        </div>
        
        <div class="tool-action">
          <button id="generate-color" class="btn btn--primary">Generate Color</button>
        </div>
      </div>
    </div>
    
    <!-- Music Inspiration Generator Tool -->
    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon accent-gradient">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 21.5C8.89 21.5 8 20.61 8 19.5C8 18.39 8.89 17.5 10 17.5C11.11 17.5 12 18.39 12 19.5C12 20.61 11.11 21.5 10 21.5ZM10 3V11.55C9.41 11.21 8.73 11 8 11C5.79 11 4 12.79 4 15C4 17.21 5.79 19 8 19C10.21 19 12 17.21 12 15V7H16V3H10Z" fill="white"/>
          </svg>
        </div>
        <h2>Music Inspiration</h2>
      </div>
      
      <div class="tool-content" id="music-inspiration">
        <p class="tool-description">Discover music videos across different genres to inspire your creative process.</p>
        
        <div class="music-selector">
          <label for="genre-select">Select a music genre:</label>
          <select id="genre-select" class="genre-dropdown">
            <option value="ambient">Ambient & Atmospheric</option>
            <option value="classical">Classical & Orchestral</option>
            <option value="jazz">Jazz & Blues</option>
            <option value="electronic">Electronic & Experimental</option>
            <option value="world">World & Cultural</option>
            <option value="acoustic">Acoustic & Folk</option>
          </select>
        </div>
        
        <div class="tool-action">
          <button id="generate-music" class="btn btn--primary">Get Music Inspiration</button>
        </div>
        
        <div id="music-video-container" class="music-video-container">
          <!-- Video will be embedded here -->
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section section--light section--info">
  <div class="container">
    <div class="info-grid">
      <div class="info-content">
        <h2>How to Use These Tools</h2>
        <p>These creativity tools are designed to spark your imagination and provide inspiration for your artistic journey.</p>
        
        <ul class="feature-list">
          <li>
            <div class="feature-bullet gradient-bg"></div>
            <div>Generate artistic quotes to find motivation and perspective for your creative work</div>
          </li>
          <li>
            <div class="feature-bullet accent-gradient"></div>
            <div>Explore harmonious color palettes and individual color inspirations</div>
          </li>
          <li>
            <div class="feature-bullet gradient-bg"></div>
            <div>Find creative challenges that encourage exploration of contemporary artistic themes</div>
          </li>
          <li>
            <div class="feature-bullet accent-gradient"></div>
            <div>Generate unexpected word combinations to spark innovative ideas</div>
          </li>
          <li>
            <div class="feature-bullet gradient-bg"></div>
            <div>Discover music across different genres to accompany your creative process</div>
          </li>
        </ul>
      </div>
      
      <div class="info-image">
        <div class="image-placeholder accent-gradient">
          <img src="/assets/images/get-inspired-feature.jpg" alt="Inspiration Tools" class="feature-image" onerror="this.style.display='none'">
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Script is now loaded in the head with defer -->

<style>
/* Page intro styling */
.page-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3em;
  padding: 0 1.5em;
}

.page-title {
  font-size: 2.5em;
  margin-bottom: 0.5em;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.page-description {
  font-size: 1.2em;
  color: var(--text-lighter);
  line-height: 1.6;
}

/* Tools grid styling */
.tools-container {
  padding: 0 1.5em;
  max-width: 1200px;
  margin: 0 auto;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2em;
  margin-bottom: 4em;
}

.tool-card {
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid var(--border);
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.tool-header {
  display: flex;
  align-items: center;
  padding: 1.5em;
  border-bottom: 1px solid var(--border);
}

.tool-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
}

.tool-header h2 {
  margin: 0;
  font-size: 1.3em;
  font-weight: 600;
}

.tool-content {
  padding: 1.5em;
}

.tool-description {
  color: var(--text-lighter);
  margin-bottom: 1.5em;
  font-size: 0.95em;
}

.tool-action {
  margin-top: 1.5em;
  text-align: center;
}

/* Quote generator styling */
.quote-container {
  background-color: var(--light-bg);
  border-radius: 8px;
  padding: 1.5em;
}

blockquote {
  margin: 0;
  padding: 0;
  border-left: none;
  font-style: italic;
  color: var(--text);
  background-color: transparent;
  text-align: center;
  font-size: 1.1em;
}

/* Color palette styling */
.palette-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 0.5em;
}

.color-names {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 1.5em;
}

.color-names span {
  width: 50px;
  text-align: center;
  font-size: 0.75em;
  color: var(--text-lighter);
}

/* Prompt styling */
.prompt-container {
  background-color: var(--light-bg);
  border-radius: 8px;
  padding: 1.5em;
  margin-bottom: 1em;
}

#current-prompt {
  margin: 0;
  color: var(--text);
  font-size: 1.1em;
  line-height: 1.6;
}

/* Word Combinator styling */
.word-combo-container {
  background-color: var(--light-bg);
  border-radius: 8px;
  padding: 1.5em;
  text-align: center;
}

.word-combo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-size: 1.2em;
  flex-wrap: wrap;
}

#random-adjective {
  font-weight: 600;
  color: var(--primary);
}

#word-separator {
  color: var(--text-lighter);
  font-size: 1.2em;
  margin: 0 0.2em;
}

#random-noun {
  font-weight: 600;
  color: var(--accent);
}

/* Color Explorer styling */
.color-display-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.single-color-display {
  width: 100%;
  height: 150px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(50, 50, 93, 0.1), 0 1px 1px rgba(0, 0, 0, 0.07);
}

.color-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  width: 100%;
  background-color: var(--light-bg);
  border-radius: 8px;
  padding: 1em;
}

.color-code {
  font-family: monospace;
  font-size: 1.1em;
}

.color-code span:first-child {
  color: var(--text-lighter);
}

/* Music Inspiration styling */
.music-selector {
  margin-bottom: 1.5em;
}

.genre-dropdown {
  display: block;
  width: 100%;
  padding: 0.7em 1em;
  margin-top: 0.5em;
  border-radius: 4px;
  border: 1px solid var(--border);
  background-color: var(--white);
  font-family: inherit;
  font-size: 1em;
  color: var(--text);
}

.music-video-container {
  margin-top: 2em;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  display: none; /* Initially hidden */
}

.music-video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Info section styling */
.section--info {
  padding: 5em 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5em;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4em;
  align-items: center;
}

.info-content h2 {
  font-size: 2em;
  margin-bottom: 1em;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.info-content p {
  font-size: 1.1em;
  color: var(--text-lighter);
  line-height: 1.6;
  margin-bottom: 2em;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.2em;
}

.feature-bullet {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 1em;
  margin-top: 0.4em;
}

.info-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 3/4;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.5s ease forwards;
}

.slide-up {
  animation: slideUp 0.5s ease forwards;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .info-grid {
    grid-template-columns: 1fr;
    gap: 2em;
  }
  
  .info-image {
    grid-row: 1;
  }
  
  .info-content {
    grid-row: 2;
  }
}

@media (max-width: 576px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2em;
  }
  
  .section--info {
    padding: 3em 0;
  }
  
  .word-combo {
    font-size: 1em;
  }
}
</style>