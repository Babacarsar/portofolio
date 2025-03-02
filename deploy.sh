
#!/bin/bash

# Définir le nom du dépôt GitHub
REPO_NAME="portfolio"
GH_USER="votre-nom-utilisateur"

# Build le projet
echo "Building project..."
npm run build

# Se déplacer dans le répertoire de build
cd dist

# Créer un fichier .nojekyll pour éviter le traitement Jekyll
touch .nojekyll

# Initialiser un dépôt git si ce n'est pas déjà fait
if [ ! -d ".git" ]; then
  git init
  git checkout -b main
else
  # Assurez-vous d'être sur la branche principale
  git checkout main || git checkout -b main
fi

# Ajouter tous les fichiers
git add .

# Commettre les changements
git commit -m "Deploy to GitHub Pages"

# Ajouter le dépôt GitHub comme remote (si pas déjà fait)
git remote add origin https://github.com/$GH_USER/$REPO_NAME.git 2>/dev/null || true

# Forcer le push sur la branche gh-pages
echo "Deploying to GitHub Pages..."
git push -f origin main:gh-pages

echo "Deployment complete!"
echo "Votre site est maintenant disponible à: https://$GH_USER.github.io/$REPO_NAME/"
