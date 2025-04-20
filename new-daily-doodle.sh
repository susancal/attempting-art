#!/bin/bash

echo "Let's make a new daily doodle post!"

# Get the date
read -p "When did you make the doodle? (YYYY-MM-DD): " doodle_date

# Format date for title
if [[ $doodle_date =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}$ ]]; then
    month_day_year=$(date -j -f "%Y-%m-%d" "$doodle_date" "+%B %d, %Y" 2>/dev/null)
    if [ $? -ne 0 ]; then
        # Fallback for Linux
        month_day_year=$(date -d "$doodle_date" "+%B %d, %Y" 2>/dev/null)
        if [ $? -ne 0 ]; then
            echo "Invalid date format. Please try YYYY-MM-DD again."
            exit 1
        fi
    fi
else
    echo "Invalid date format. Please use YYYY-MM-DD."
    exit 1
fi

# Get the prompt
read -p "What prompt did ChatGPT give you for your doodle? " prompt

# Get the image file by number
read -p "What picture number should I add? (Just enter the number, e.g. 2048): " image_number
image_file="IMG_${image_number}.HEIC"
downloads_path="$HOME/Downloads/$image_file"

if [ ! -f "$downloads_path" ]; then
    echo "Cannot find image $image_file in your Downloads folder."
    exit 1
fi

# Create images directory if it doesn't exist
mkdir -p "assets/images/doodles"

# Generate a filename for the image
image_filename="doodle-${doodle_date}-$(echo "$image_file" | tr ' ' '-' | tr -cd 'a-zA-Z0-9-_.')"
image_path="assets/images/doodles/$image_filename"

# Make sure image path ends with .jpg
if [[ "$image_path" != *.jpg && "$image_path" != *.jpeg ]]; then
    image_path="${image_path}.jpg"
fi

# Copy and convert the image using sips (built-in on macOS)
echo "Converting image to JPEG format..."
sips -s format jpeg "$downloads_path" --out "$image_path" &>/dev/null
if [ $? -ne 0 ]; then
    echo "Image conversion failed. Copying original file instead."
    cp "$downloads_path" "$image_path"
fi

# Get description of the image
read -p "Describe what you created (shown under the image): " description

# Get reflections
read -p "Did you have any reflections on your doodle? " reflections

# Create post filename
post_filename="_posts/${doodle_date}-daily-doodle.markdown"

# Create the post
cat > "$post_filename" << EOF
---
layout: single
title: Daily Doodle for ${month_day_year}
date: ${doodle_date} 06:00 -0500
categories: daily-doodle
permalink: /daily-doodle/${doodle_date}/
---
#### Prompt: 
${prompt}

#### What I made:
<a href="/${image_path}" target="_blank" class="daily-doodle-link">
  <img src="/${image_path}" alt="Daily Doodle for ${month_day_year}" class="daily-doodle-image">
</a>

#### Description:
${description}

#### Reflections: 
${reflections}
EOF

echo "New post created at $post_filename"