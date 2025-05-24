# Pokédex Angular 19 - Application de démonstration

by Claude BUENO

## 📱 Aperçu

Une application web moderne développée avec Angular 19 qui permet d'explorer l'univers Pokémon via une interface intuitive et responsive. Cette application utilise l'API publique [PokéAPI](https://pokeapi.co/) pour afficher les informations sur les différents Pokémon.

## ✨ Fonctionnalités

- **Liste des Pokémon** : Affichage en grille des Pokémon avec leurs images et types
- **Chargement optimisé** : Indicateurs de chargement et gestion des erreurs
- **Design responsive** : S'adapte à tous les formats d'écran
- **Architecture MVC** : Organisation claire du code suivant le modèle Modèle-Vue-Contrôleur
- **Typage fort** : Utilisation des interfaces TypeScript pour une meilleure fiabilité

## Visuel du Pokédex
![Capture écran Pokédex](https://github.com/claudebueno/pokemon-app/blob/master/public/app-angular-pokedex-screen.png?raw=true "Capture écran Pokédex")

## 🛠️ Technologies utilisées

- **Angular 19** : Framework front-end avec les dernières fonctionnalités
  - Support natif des signaux
  - Compilateur Ivy optimisé
  - Hydratation des composants
- **TypeScript** : Pour un code plus robuste et maintenable
- **RxJS** : Gestion des flux de données asynchrones
- **CSS moderne** : Utilisation des Grid et Flexbox pour des mises en page avancées
- **API REST** : Communication avec l'API externe PokéAPI

## 🚀 Pour commencer

1. Clonez le dépôt
   ```bash
   git clone https://github.com/username/pokemon-angular-app.git
   cd pokemon-angular-app
   ```

2. Installez les dépendances
   ```bash
   npm install
   ```

3. Lancez l'application en mode développement
   ```bash
   ng serve
   ```

4. Accédez à l'application sur `http://localhost:4200`

## 📚 Structure du projet

L'application suit une architecture MVC claire :

- **Modèles** : Interfaces TypeScript définissant la structure des données
- **Services** : Gestion des appels API et de la logique métier
- **Composants** : Éléments d'interface utilisateur avec leurs contrôleurs

## 🔍 Évolutions possibles

- Ajout d'une vue détaillée pour chaque Pokémon
- Implémentation de la pagination pour naviguer entre les différentes pages
- Fonction de recherche et de filtrage par type
- Ajout de favoris et persistance des données utilisateur
- Support du mode hors-ligne avec service workers

## 📖 Ressources d'apprentissage

- [Documentation officielle d'Angular](https://angular.io/docs)
- [Tutoriel complet sur ce blog](https://www.claudebueno.com/developpement/angular-et-pokemon-creez-votre-pokedex-complet.htm)
- [API Pokémon](https://pokeapi.co/docs/v2)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
