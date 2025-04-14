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
echo "5) knitting"
echo "6) fashion"
echo "7) garden"
echo "8) software"
echo "9) home"
echo "10) art"
echo "11) dog"
echo "12) other (custom)"
read -p "Select a category (1-12): " category_choice

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
        category="knitting"
        permalink="/${category}/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
    6) 
        category="fashion"
        permalink="/${category}/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
    7) 
        category="garden"
        permalink="/${category}/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
    8) 
        category="software"
        permalink="/${category}/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
    9) 
        category="home"
        permalink="/${category}/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
    10) 
        category="art"
        permalink="/${category}/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
    11) 
        category="dog"
        permalink="/${category}/${post_date}-${post_title// /-}/"
        post_slug="${post_title// /-}"
        ;;
    12) 
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

# Create images directory based on category if it doesn't exist
mkdir -p "assets/images/${category}"

# Initialize post content
post_content=""
image_counter=1

# Function to add an image
add_image() {
    local image_path=""
    
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
                return 1
            fi
            
            # Generate a filename for the image
            image_filename="${category}-${post_date}-img${image_counter}-$(echo "$image_file" | tr ' ' '-' | tr -cd 'a-zA-Z0-9-_.')"
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
                return 1
            fi
            
            # Get the filename without path
            image_filename=$(basename "$custom_image_path")
            
            # Generate a filename for the image
            new_image_filename="${category}-${post_date}-img${image_counter}-$(echo "$image_filename" | tr ' ' '-' | tr -cd 'a-zA-Z0-9-_.')"
            image_path="assets/images/${category}/$new_image_filename"
            
            # Copy the image
            echo "Copying image..."
            cp "$custom_image_path" "$image_path"
            ;;
        *)
            echo "Invalid choice. No image will be added."
            return 1
            ;;
    esac
    
    # Get image description
    read -p "Description of the image: " image_description
    
    # Add image to post content
    # Use daily-doodle classes for all posts since they're working correctly
    post_content+="#### Image $([ $image_counter -gt 1 ] && echo "$image_counter"):
<a href=\"/${image_path}\" target=\"_blank\" class=\"daily-doodle-link\">
  <img src=\"/${image_path}\" alt=\"${post_title}$([ $image_counter -gt 1 ] && echo " - Image $image_counter")\" class=\"daily-doodle-image\">
</a>

${image_description}

"
    image_counter=$((image_counter + 1))
    return 0
}

# Function to add text content
add_text() {
    # Ask if a header is needed
    read -p "Do you want to add a section header? (y/n): " add_header
    
    if [[ $add_header == "y" || $add_header == "Y" ]]; then
        read -p "Enter the header text: " header_text
        post_content+="### ${header_text}

"
    fi
    
    # Get the text content
    echo "Enter your text content (press Ctrl+D when finished):"
    local text_content=$(cat)
    post_content+="${text_content}

"
}

# Build the post content interactively
while true; do
    echo "What would you like to add next?"
    echo "1) Add an image"
    echo "2) Add text content"
    echo "3) Finish and create post"
    read -p "Choose an option (1-3): " next_content
    
    case $next_content in
        1)
            add_image
            ;;
        2)
            add_text
            ;;
        3)
            break
            ;;
        *)
            echo "Invalid choice. Please select 1, 2, or 3."
            ;;
    esac
done

# Create post filename
post_filename="_posts/${post_date}-${post_slug}.markdown"

# Create the post
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

echo "New post created at $post_filename"