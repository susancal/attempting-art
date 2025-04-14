---
layout: splash
permalink: /
header:
  overlay_color: "#000000"
  overlay_filter: "0.3"
  overlay_image: /assets/images/discoyard.jpg
excerpt: >
  A journal celebrating personal creativity and doing things that make me happy
---

<div class="hero-section">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">Chasing joy and <span class="highlight">discovering creativity</span></h1>
      <p class="hero-description">A personal project documenting my artistic explorations and creative growth, capturing the evolution of my unique artistic voice.</p>
      <div class="hero-actions">
        <a href="/journal/" class="btn btn--primary">View Journal</a>
        <a href="/about/" class="btn btn--secondary">About Me</a>
      </div>
    </div>
    <div class="hero-image">
      <div class="image-placeholder gradient-bg">
        <img class="feature-image">
      </div>
    </div>
  </div>
</div>

{% include random-image-list.html %}
<script src="{{ '/assets/js/inspiration.js' | relative_url }}"></script>
<script src="{{ '/assets/js/random-images.js' | relative_url }}"></script>

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
  min-height: 200px; /* Ensure minimum height on mobile */
  display: block !important; /* Force display on all devices */
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
  
  .hero-image {
    width: 100%;
  }
  
  .image-placeholder {
    width: 100%;
    min-height: 200px;
  }
  
  .feature-image {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
