
# Portfolio - Site Personnel

## Déploiement sur GitHub Pages

Pour déployer ce site sur GitHub Pages, suivez ces étapes:

1. Créez un repository GitHub nommé "portfolio" si ce n'est pas déjà fait.
2. Le script de déploiement est déjà configuré avec votre nom d'utilisateur: Babacarsar.
3. Exécutez le script de déploiement:

```sh
# Rendre le script exécutable si nécessaire
chmod +x deploy.sh

# Exécuter le script
./deploy.sh
```

4. Votre site sera déployé à l'adresse: `https://Babacarsar.github.io/portfolio/`
5. GitHub Pages peut prendre quelques minutes pour mettre à jour le site après le déploiement.

### Résolution des problèmes courants

- Si vous obtenez une erreur d'authentification, assurez-vous d'avoir configuré Git avec vos identifiants GitHub.
- Si le site ne s'affiche pas correctement, vérifiez que le repository GitHub existe et que la branche gh-pages a été correctement créée.

## Project info

**URL**: https://lovable.dev/projects/7b96f9c8-65b5-4974-8e4b-b7429c91c5e5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7b96f9c8-65b5-4974-8e4b-b7429c91c5e5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router
