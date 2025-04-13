#!/bin/bash

# Script to update the random images list for the website
# Run this whenever you add new images to the random folder

echo "Updating random image list..."

# Generate the JSON file
ls -1 "$(dirname "$0")/assets/images/random/" | \
  jq -R -s 'split("\n") | map(select(length > 0)) | {images: .}' > \
  "$(dirname "$0")/assets/images/random-list.json"

echo "Updated random-list.json with $(jq '.images | length' "$(dirname "$0")/assets/images/random-list.json") images!"
echo "Your random images are ready to display."