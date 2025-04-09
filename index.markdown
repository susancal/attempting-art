---
layout: splash
permalink: /
header:
  overlay_color: "#000000"
  overlay_filter: "0.3"
  overlay_image: /assets/images/discoyard.jpg
excerpt: >
  An art journal celebrating personal creativity through a modern lens
---

<div class="hero-section">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">Creative expression and <span class="highlight">artistic discovery</span></h1>
      <p class="hero-description">A personal project documenting my artistic explorations and creative growth, capturing the evolution of my unique artistic voice.</p>
      <div class="hero-actions">
        <a href="/art-journal/" class="btn btn--primary">View Journal</a>
        <a href="/about/" class="btn btn--secondary">About This Project</a>
      </div>
    </div>
    <div class="hero-image">
      <div class="image-placeholder gradient-bg">
        <img src="/assets/images/art-journal-feature.jpg" alt="Art Journal" class="feature-image" onerror="this.style.display='none'">
      </div>
    </div>
  </div>
</div>

<div class="section section--light">
  <div class="container">
    <h2 class="section__title">What You'll Find Here</h2>
    <p class="section__intro">Explore these areas of the site to discover artistic inspiration and creative journeys throughout my personal artistic development.</p>
    
    <div class="feature-grid">
      <div class="feature-item">
        <div class="feature-icon gradient-bg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM12 17L15 11L17 15L19 12L19 19H5L9 13L12 17Z" fill="white"/>
          </svg>
        </div>
        <h3>Art Journal</h3>
        <p>A chronological collection of artworks with reflections on process and inspiration, capturing my creative journey.</p>
        <a href="/art-journal/" class="feature-link">Browse Journal →</a>
      </div>
      
      <div class="feature-item">
        <div class="feature-icon accent-gradient">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.66 8L12 2.35L6.34 8C4.78 9.56 4 11.64 4 13.64C4 15.64 4.78 17.75 6.34 19.31C7.9 20.87 9.95 21.66 12 21.66C14.05 21.66 16.1 20.87 17.66 19.31C19.22 17.75 20 15.64 20 13.64C20 11.64 19.22 9.56 17.66 8ZM6 14C6 12 6.5 10.5 7.7 9.3L12 5L16.3 9.3C17.5 10.5 18 12 18 14H6Z" fill="white"/>
          </svg>
        </div>
        <h3>Get Inspired</h3>
        <p>Interactive tools including quotes, color palettes, and creative prompts to spark your artistic imagination.</p>
        <a href="/get-inspired/" class="feature-link">Find Inspiration →</a>
      </div>
      
      <div class="feature-item">
        <div class="feature-icon gradient-bg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z" fill="white"/>
          </svg>
        </div>
        <h3>Creative Projects</h3>
        <p>Explore additional artistic endeavors and experimental works that extend beyond the journal entries.</p>
        <a href="/projects/" class="feature-link">View Projects →</a>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    <h2 class="section__title">Recent Journal Entries</h2>
    
    <div class="grid__wrapper">
      {% for post in site.posts limit:4 %}
        {% include archive-single.html type="grid" %}
      {% endfor %}
    </div>
    
    <div class="section-actions">
      <a href="/art-journal/" class="btn btn--primary">View All Entries</a>
    </div>
  </div>
</div>

<div class="section section--cta gradient-bg">
  <div class="container">
    <h2 class="cta-title">Ready to Get Inspired?</h2>
    <p class="cta-text">Discover tools to spark your creativity with interactive features designed to inspire your artistic journey.</p>
    <a href="/get-inspired/" class="btn btn--light">Find Inspiration</a>
  </div>
</div>

<script src="{{ '/assets/js/inspiration.js' | relative_url }}"></script>

<style>
/* Hero section styling */
.hero-section {
  padding: 6em 0 4em;
  background-color: var(--white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em;
}

.hero-section .container {
  display: flex;
  align-items: center;
  gap: 4em;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 3em;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.5em;
  color: var(--text);
  letter-spacing: -0.03em;
}

.highlight {
  color: var(--primary);
}

.hero-description {
  font-size: 1.2em;
  color: var(--text-lighter);
  margin-bottom: 2em;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1em;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Feature grid styling */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2em;
  margin: 3em 0;
}

.feature-item {
  background: var(--white);
  padding: 2em;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5em;
}

.feature-item h3 {
  font-size: 1.3em;
  margin-bottom: 0.7em;
  font-weight: 600;
  color: var(--text);
}

.feature-item p {
  color: var(--text-lighter);
  line-height: 1.6;
  margin-bottom: 1.5em;
}

.feature-link {
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.feature-link:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

/* Section styling */
.section {
  padding: 5em 0;
}

.section--light {
  background-color: var(--light-bg);
}

.section-actions {
  margin-top: 2em;
  text-align: center;
}

/* CTA section */
.section--cta {
  text-align: center;
  padding: 4em 0;
}

.cta-title {
  color: white;
  font-size: 2.2em;
  margin-bottom: 0.5em;
  font-weight: 700;
}

.cta-text {
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 2em;
  font-size: 1.1em;
}

.btn--light {
  background-color: white !important;
  color: var(--primary-dark) !important;
  font-weight: 500;
  border-radius: 30px;
  padding: 0.7em 1.6em;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
}

.btn--light:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.15);
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .hero-section .container {
    flex-direction: column;
    gap: 2em;
  }
  
  .hero-title {
    font-size: 2.4em;
  }
  
  .hero-description {
    font-size: 1.1em;
  }
  
  .feature-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 576px) {
  .hero-actions {
    flex-direction: column;
    gap: 1em;
  }
  
  .hero-title {
    font-size: 2em;
  }
  
  .section {
    padding: 3em 0;
  }
}
</style>
