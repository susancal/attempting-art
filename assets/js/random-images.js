document.addEventListener('DOMContentLoaded', function() {
  const imageDirectory = '/assets/images/random/';
  
  // Function to fetch and process image list
  function fetchRandomImage() {
    fetch('/assets/images/random-list.json')
      .then(response => response.json())
      .then(data => {
        const randomImages = data.images;
        const imageElement = document.querySelector('.feature-image');
        
        if (imageElement && randomImages.length > 0) {
          // Clear any existing error handler and display styling
          imageElement.removeAttribute('onerror');
          imageElement.style.display = '';
          
          // Get random image
          const randomIndex = Math.floor(Math.random() * randomImages.length);
          const imagePath = imageDirectory + randomImages[randomIndex];
          
          // Set the image
          imageElement.src = imagePath;
          
          // Generate alt text from filename (remove extension and replace underscores/dashes with spaces)
          const altText = randomImages[randomIndex]
            .replace(/\.[^/.]+$/, "") // Remove file extension
            .replace(/[-_]/g, " ")    // Replace dashes and underscores with spaces
            .replace(/IMG /g, "")     // Remove "IMG " prefix
            .replace(/EFFECTS/g, "with effects") // Replace EFFECTS with "with effects"
            .replace(/EDIT/g, "edited"); // Replace EDIT with "edited"
            
          imageElement.alt = "Art inspiration: " + altText;
          
          console.log('Set random image: ' + imagePath + ' with alt: ' + imageElement.alt);
        }
      })
      .catch(error => {
        console.error('Error loading random images:', error);
        
        // Fallback to one specific image if JSON fails to load
        const imageElement = document.querySelector('.feature-image');
        if (imageElement) {
          imageElement.src = '/assets/images/random/IMG_0419.jpg';
          imageElement.alt = 'Creative artwork';
        }
      });
  }

  // If no images are loaded yet, load a random one
  fetchRandomImage();
});