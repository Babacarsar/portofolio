
#!/bin/bash

# Définir le nom du dépôt GitHub
REPO_NAME="portfolio"
GH_USER="Babacarsar"

# Vérifier si git est installé
if ! command -v git &> /dev/null; then
    echo "Git n'est pas installé. Veuillez l'installer avant de continuer."
    exit 1
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo "npm n'est pas installé. Veuillez l'installer avant de continuer."
    exit 1
fi

# Build le projet
echo "Building project..."
npm run build

# Vérifier si le build a réussi
if [ $? -ne 0 ]; then
    echo "La génération du build a échoué. Veuillez corriger les erreurs et réessayer."
    exit 1
fi

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

# Vérifier si le push a réussi
if [ $? -ne 0 ]; then
    echo "Le déploiement a échoué. Assurez-vous que:"
    echo "1. Vous avez créé un repository nommé '$REPO_NAME' sur GitHub"
    echo "2. Vous avez configuré votre git avec les bonnes informations d'authentification"
    exit 1
fi

echo "Deployment complete!"
echo "Votre site est maintenant disponible à: https://$GH_USER.github.io/$REPO_NAME/"
echo "Note: GitHub Pages peut prendre quelques minutes pour mettre à jour le site."
