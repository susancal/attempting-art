source "https://rubygems.org"

# Specify Ruby version for consistency
ruby "~> 3.2.0" if Object.const_defined?(:RUBY_VERSION) 

# Main GitHub Pages dependency
gem "github-pages", "~> 232", group: :jekyll_plugins

# Plugins supported by GitHub Pages
group :jekyll_plugins do
  gem "jekyll-include-cache"
  gem "jekyll-paginate"
  gem "jekyll-feed"
  gem "jekyll-remote-theme"
end

# Performance-related gems
gem "faraday-retry", "~> 2.3"
gem "webrick", "~> 1.8"
