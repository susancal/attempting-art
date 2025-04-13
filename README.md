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

### Image Processing

When adding new images to the site:

1. Run `./scan-pics.sh` to strip metadata from all images
2. For random inspiration images, add them to `/assets/images/random/`
   - The pre-commit hook will automatically update the image list

### Deployment

The site is deployed via GitHub Pages from the master branch.

## License

Content and design © 2025 SOB