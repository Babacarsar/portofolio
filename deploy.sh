
#!/bin/bash

# Définir le nom du dépôt GitHub
REPO_NAME="portfolio"
GH_USER="Babacarsar"

# Définir les couleurs pour les messages
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages
print_message() {
  echo -e "${GREEN}[INFO]${NC} $1"
}

print_error() {
  echo -e "${RED}[ERREUR]${NC} $1"
}

print_warning() {
  echo -e "${YELLOW}[ATTENTION]${NC} $1"
}

# Rendre le script exécutable
chmod +x "$0"

# Vérifier si git est installé
if ! command -v git &> /dev/null; then
    print_error "Git n'est pas installé. Installation en cours..."
    
    if command -v apt-get &> /dev/null; then
        sudo apt-get update && sudo apt-get install -y git
    elif command -v yum &> /dev/null; then
        sudo yum install -y git
    elif command -v brew &> /dev/null; then
        brew install git
    else
        print_error "Impossible d'installer Git automatiquement. Veuillez l'installer manuellement."
        exit 1
    fi
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    print_error "npm n'est pas installé. Installation de Node.js en cours..."
    
    if command -v apt-get &> /dev/null; then
        curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
        sudo apt-get install -y nodejs
    elif command -v yum &> /dev/null; then
        curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
        sudo yum install -y nodejs
    elif command -v brew &> /dev/null; then
        brew install node
    else
        print_error "Impossible d'installer Node.js automatiquement. Veuillez l'installer manuellement."
        exit 1
    fi
fi

# Configuration git si nécessaire
if ! git config --get user.email &> /dev/null; then
    print_warning "Configuration Git requise. Veuillez saisir votre email GitHub:"
    read -r email
    git config --global user.email "$email"
    
    print_warning "Veuillez saisir votre nom d'utilisateur Git:"
    read -r name
    git config --global user.name "$name"
fi

# Vérifier si le repository existe déjà sur GitHub
if ! git ls-remote "https://github.com/$GH_USER/$REPO_NAME.git" &> /dev/null; then
    print_warning "Le repository '$REPO_NAME' ne semble pas exister sur GitHub."
    print_warning "Voulez-vous le créer maintenant? (o/n)"
    read -r create_repo
    
    if [[ "$create_repo" == "o" || "$create_repo" == "O" || "$create_repo" == "oui" ]]; then
        print_message "Pour créer un repository, veuillez visiter: https://github.com/new"
        print_message "Nom du repository: $REPO_NAME"
        print_message "Une fois créé, appuyez sur Entrée pour continuer..."
        read -r
    else
        print_error "Veuillez créer le repository avant de continuer."
        exit 1
    fi
fi

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    print_message "Installation des dépendances..."
    npm install
    
    if [ $? -ne 0 ]; then
        print_error "L'installation des dépendances a échoué."
        exit 1
    fi
fi

# Build le projet
print_message "Construction du projet en cours..."
npm run build

# Vérifier si le build a réussi
if [ $? -ne 0 ]; then
    print_error "La génération du build a échoué. Veuillez corriger les erreurs et réessayer."
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

# Configurer le mode d'authentification si nécessaire
if [ -z "$(git config --get credential.helper)" ]; then
    git config --global credential.helper cache
    print_warning "Les identifiants Git seront demandés lors du push."
fi

# Ajouter le dépôt GitHub comme remote (si pas déjà fait)
git remote add origin "https://github.com/$GH_USER/$REPO_NAME.git" 2>/dev/null || true

# Forcer le push sur la branche gh-pages
print_message "Déploiement vers GitHub Pages en cours..."
git push -f origin main:gh-pages

# Vérifier si le push a réussi
if [ $? -ne 0 ]; then
    print_error "Le déploiement a échoué. Raisons possibles:"
    print_error "1. Vous n'avez pas créé de repository nommé '$REPO_NAME' sur GitHub"
    print_error "2. Vous n'avez pas les droits d'accès au repository"
    print_error "3. Vos identifiants GitHub sont incorrects"
    
    print_warning "Voulez-vous réessayer avec un token d'accès personnel? (o/n)"
    read -r use_token
    
    if [[ "$use_token" == "o" || "$use_token" == "O" || "$use_token" == "oui" ]]; then
        print_message "Générez un token sur: https://github.com/settings/tokens"
        print_message "Assurez-vous d'accorder les droits 'repo'"
        print_warning "Entrez votre token d'accès personnel:"
        read -r token
        
        # Réessayer avec le token
        git remote set-url origin "https://$token@github.com/$GH_USER/$REPO_NAME.git"
        git push -f origin main:gh-pages
        
        if [ $? -ne 0 ]; then
            print_error "Le déploiement a encore échoué. Veuillez vérifier vos paramètres manuellement."
            exit 1
        fi
    else
        exit 1
    fi
fi

# Retourner au répertoire principal
cd ..

print_message "Déploiement terminé avec succès!"
print_message "Votre site est maintenant disponible à: https://$GH_USER.github.io/$REPO_NAME/"
print_message "Note: GitHub Pages peut prendre quelques minutes pour mettre à jour le site."

