#!/bin/bash

echo "Let's create a new post!"

# Get the date
read -p "Date of the post? (YYYY-MM-DD): " post_date

# Format date for title
if [[ $post_date =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}$ ]]; then
    month_day_year=$(date -j -f "%Y-%m-%d" "$post_date" "+%B %d, %Y" 2>/dev/null)
    if [ $? -ne 0 ]; then
        # Fallback for Linux
        month_day_year=$(date -d "$post_date" "+%B %d, %Y" 2>/dev/null)
        if [ $? -ne 0 ]; then
            echo "Invalid date format. Please try YYYY-MM-DD again."
            exit 1
        fi
    fi
else
    echo "Invalid date format. Please use YYYY-MM-DD."
    exit 1
fi

# Get post title
read -p "Title of your post: " post_title

# Get category
echo "Available categories:"
echo "1) daily-doodle"
echo "2) journal"
echo "3) project"
echo "4) inspiration"
echo "5) other (custom)"
read -p "Select a category (1-5): " category_choice

case $category_choice in
    1) 
        category="daily-doodle"
        permalink="/${category}/${post_date}/"
        post_slug="daily-doodle"
        ;;
    2) 
        category="journal"
        permalink="/${category}/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
    3) 
        category="project"
        permalink="/${category}/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
    4) 
        category="inspiration"
        permalink="/${category}/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
    5) 
        read -p "Enter custom category: " category
        permalink="/${category}/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
    *)
        echo "Invalid choice. Using 'uncategorized'"
        category="uncategorized"
        permalink="/post/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
esac

# Ask if the post includes an image
read -p "Does this post include an image? (y/n): " has_image

if [[ $has_image == "y" || $has_image == "Y" ]]; then
    # Ask for image source
    echo "Image source options:"
    echo "1) AirDropped image (IMG_NUMBER.HEIC in Downloads)"
    echo "2) Custom path"
    read -p "Select image source (1-2): " image_source
    
    case $image_source in
        1)
            # Get the image file by number
            read -p "What picture number should I add? (Just enter the number, e.g. 2048): " image_number
            image_file="IMG_${image_number}.HEIC"
            downloads_path="$HOME/Downloads/$image_file"
            
            if [ ! -f "$downloads_path" ]; then
                echo "Cannot find image $image_file in your Downloads folder."
                exit 1
            fi
            
            # Create images directory based on category
            mkdir -p "assets/images/${category}"
            
            # Generate a filename for the image
            image_filename="${category}-${post_date}-$(echo "$image_file" | tr ' ' '-' | tr -cd 'a-zA-Z0-9-_.')"
            image_path="assets/images/${category}/$image_filename"
            
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
            ;;
        2)
            read -p "Enter the full path to the image: " custom_image_path
            
            if [ ! -f "$custom_image_path" ]; then
                echo "Cannot find image at $custom_image_path"
                exit 1
            fi
            
            # Create images directory based on category
            mkdir -p "assets/images/${category}"
            
            # Get the filename without path
            image_filename=$(basename "$custom_image_path")
            
            # Generate a filename for the image
            new_image_filename="${category}-${post_date}-$(echo "$image_filename" | tr ' ' '-' | tr -cd 'a-zA-Z0-9-_.')"
            image_path="assets/images/${category}/$new_image_filename"
            
            # Copy the image
            echo "Copying image..."
            cp "$custom_image_path" "$image_path"
            ;;
        *)
            echo "Invalid choice. No image will be added."
            has_image="n"
            ;;
    esac
    
    # Get image description if an image is included
    if [[ $has_image == "y" || $has_image == "Y" ]]; then
        read -p "Description of the image: " image_description
    fi
fi

# Get post content
echo "Enter the main content of your post (press Ctrl+D when finished):"
post_content=$(cat)

# Create post filename
post_filename="_posts/${post_date}-${post_slug}.markdown"

# Create the post with conditional image section
if [[ $has_image == "y" || $has_image == "Y" ]]; then
    cat > "$post_filename" << EOF
---
layout: single
title: ${post_title}
date: ${post_date} 18:32 -0500
categories: ${category}
permalink: ${permalink}
---
${post_content}

#### Image:
<a href="/${image_path}" target="_blank" class="post-image-link">
  <img src="/${image_path}" alt="${post_title}" class="post-image">
</a>

${image_description}
EOF
else
    cat > "$post_filename" << EOF
---
layout: single
title: ${post_title}
date: ${post_date} 18:32 -0500
categories: ${category}
permalink: ${permalink}
---
${post_content}
EOF
fi

echo "New post created at $post_filename"