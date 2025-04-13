#!/bin/bash

# scan-pics.sh - Scans all images in assets/images, strips metadata, and replaces them
# Created for stripping metadata from images before uploading to the web

# Check if exiftool is installed
if ! command -v exiftool &> /dev/null; then
    echo "Error: exiftool is not installed. Please install it with:"
    echo "  brew install exiftool"
    exit 1
fi

# Set up colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Scanning for images in assets/images...${NC}"

# Create temporary directory
TEMP_DIR="temp_stripped_images"
mkdir -p "$TEMP_DIR"

# Find all image files recursively
IMAGE_COUNT=0
PROCESSED_COUNT=0

# Process function
process_image() {
    local img="$1"
    local base=$(basename "$img")
    local relative_path=${img#"assets/images/"}
    local dir_path=$(dirname "$relative_path")
    
    # Create directory structure in temp dir if needed
    if [ "$dir_path" != "." ]; then
        mkdir -p "$TEMP_DIR/$dir_path"
        local output_path="$TEMP_DIR/$dir_path/$base"
    else
        local output_path="$TEMP_DIR/$base"
    fi
    
    echo -e "${YELLOW}⚙️  Processing:${NC} $img"
    
    # Strip metadata and save to temp file
    if exiftool -all= -o "$output_path" "$img" > /dev/null 2>&1; then
        PROCESSED_COUNT=$((PROCESSED_COUNT + 1))
        echo -e "${GREEN}✅ Stripped:${NC} $img"
    else
        echo -e "${RED}❌ Failed:${NC} $img (possibly empty or corrupt file)"
    fi
}

# Find and process all image files
while IFS= read -r img; do
    IMAGE_COUNT=$((IMAGE_COUNT + 1))
    process_image "$img"
done < <(find assets/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.HEIC" -o -name "*.JPG" -o -name "*.PNG" -o -name "*.gif" -o -name "*.GIF" \))

echo -e "\n${BLUE}📋 Summary:${NC}"
echo -e "  Found: $IMAGE_COUNT images"
echo -e "  Processed: $PROCESSED_COUNT images"

if [ $PROCESSED_COUNT -eq 0 ]; then
    echo -e "${RED}No images were processed successfully.${NC}"
    rm -rf "$TEMP_DIR"
    exit 1
fi

# Replace original files with stripped versions
echo -e "\n${YELLOW}🔄 Replacing original files with stripped versions...${NC}"
find "$TEMP_DIR" -type f | while read -r stripped_file; do
    relative_path=${stripped_file#"$TEMP_DIR/"}
    original_file="assets/images/$relative_path"
    cp "$stripped_file" "$original_file"
    echo -e "${GREEN}✅ Replaced:${NC} $original_file"
done

# Clean up temp directory
rm -rf "$TEMP_DIR"

echo -e "\n${GREEN}🎉 All done! $PROCESSED_COUNT images have been stripped of metadata.${NC}"
exit 0