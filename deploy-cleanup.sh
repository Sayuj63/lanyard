#!/bin/bash

echo "Cleaning up files for deployment..."

# Remove test files and directories
echo "Removing test files..."
find . -name "__tests__" -type d -exec rm -rf {} + 2>/dev/null
find . -name "*.test.*" -type f -delete 2>/dev/null
find . -name "*.spec.*" -type f -delete 2>/dev/null

# Remove development configuration directories
echo "Removing development configuration..."
rm -rf .kiro 2>/dev/null
rm -rf .swc 2>/dev/null
rm -rf .vscode 2>/dev/null

# Remove build cache
echo "Removing build cache..."
rm -rf .next 2>/dev/null

# Remove testing configuration files
echo "Removing testing configuration files..."
rm -f jest.config.js 2>/dev/null
rm -f jest.setup.js 2>/dev/null

# Remove node_modules (will be installed fresh during deployment)
echo "Removing node_modules..."
rm -rf node_modules 2>/dev/null

# Remove package-lock.json (optional - can be kept if you want to lock versions)
# echo "Removing package-lock.json..."
# rm -f package-lock.json

echo "Cleanup complete!"
echo "Ready for deployment."