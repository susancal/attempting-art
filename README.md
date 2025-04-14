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

#### Regular Posts

The site uses the `jekyll-compose` plugin to make creating content easier.

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

#### Daily Doodle Posts

To create a new Daily Doodle post, use the `new-daily-doodle.sh` script:

```bash
./new-daily-doodle.sh
```

The script will guide you through creating a new Daily Doodle post by asking:

1. When you made the doodle (date in YYYY-MM-DD format)
2. The prompt that ChatGPT gave you
3. The image number (just the number from IMG_XXXX.HEIC) - assumes you AirDropped the image to your Downloads folder
4. A description of what you created
5. Any reflections on the process

The script will:
- Copy the image from your Downloads folder
- Convert it to JPEG format
- Create a new post with proper formatting
- Add a custom permalink for better URL structure

### Image Processing

When adding new images to the site:

1. Run `./scan-pics.sh` to strip metadata from all images
2. For random inspiration images, add them to `/assets/images/random/`
   - The pre-commit hook will automatically update the image list

### Deployment

The site is deployed via GitHub Pages from the master branch.

## License

Content and design © 2025 SOB