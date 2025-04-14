# Attempting Art - Personal Website

A journal for personal inspiration, creativity, and joy.

## Development

This site is built with Jekyll and uses the Minimal Mistakes theme.

### Setup

1. Make sure you have Ruby and Bundler installed
2. Clone this repository
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start the local server

### Creating New Content

#### Using the Post Creation Script

The simplest way to create new content is using the custom post creation scripts:

1. **General Posts** - For any type of post:
   ```bash
   ./new-post.sh
   ```
   
   This versatile script handles all post types and will:
   - Ask for the post date and title
   - Let you select a category
   - Provide options for including images (AirDropped or custom path)
   - Format content appropriately
   - Add permalinks and proper metadata

2. **Daily Doodle Posts** - Specifically for doodles:
   ```bash
   ./new-daily-doodle.sh
   ```
   
   This script is specialized for daily doodles and will ask for:
   - When you made the doodle (date in YYYY-MM-DD format)
   - The prompt that ChatGPT gave you
   - The image number (just the number from IMG_XXXX.HEIC from your Downloads folder)
   - A description of what you created
   - Any reflections on the process

Both scripts will:
- Copy images from your Downloads folder
- Convert them to JPEG format when needed
- Create posts with proper formatting
- Add custom permalinks for better URL structure

#### Manual Post Creation

The site also uses the `jekyll-compose` plugin for manual content creation:

```bash
# Install the jekyll-compose gem if you haven't already
bundle install

# Create a new post
bundle exec jekyll post "My New Post Title"

# Create a new draft
bundle exec jekyll draft "My Draft Post"

# Publish a draft
bundle exec jekyll publish _drafts/my-draft-post.md

# Create a new page
bundle exec jekyll page "My New Page"
```

### Image Processing

When adding new images to the site:

1. Run `./scan-pics.sh` to strip metadata from all images
2. For random inspiration images, add them to `/assets/images/random/`
   - The pre-commit hook will automatically update the image list

### Deployment

The site is deployed via GitHub Pages from the master branch.

## License

Content and design © 2025 SOB