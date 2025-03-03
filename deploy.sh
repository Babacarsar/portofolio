
#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Move to the build directory
cd dist

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Create a CNAME file if you have a custom domain
# echo "your-domain.com" > CNAME

# Initialize git repository if it doesn't exist
if [ ! -d ".git" ]; then
  git init
  git checkout -b main
  git add .
  git commit -m "Initial commit"
else
  git add .
  git commit -m "Update website"
fi

# Add the GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Force push to the gh-pages branch
git push -f origin main:gh-pages

echo "Deployment complete!"
