# Entre Ciel et Terre

Appli de cabinet hors ligne : techniques d'hypnose (Céleste et Terrestre), agenda, clients, fiche personnes, notes de séance et notes diverses.

## Contenu du dossier

Garde exactement cette structure, sinon l'installation sur la tablette peut échouer.

- `index.html` : l'appli
- `manifest.webmanifest` : nom, icône, couleurs
- `sw.js` : fonctionnement hors ligne
- `icones/` : les icônes
- `polices/` : la police de secours, utilisée si internet manque à la toute première ouverture

## Mise en ligne sur GitHub

1. Sur github.com, bouton **New repository**. Nom : `entre-ciel-et-terre`. Coche **Public**, puis **Create repository**.
2. Clique sur **uploading an existing file**, glisse tout le contenu du dossier (les fichiers et les deux dossiers `icones` et `polices`), puis **Commit changes**.
3. Va dans **Settings**, puis **Pages**. Dans « Branch », choisis `main` et `/ (root)`, puis **Save**.
4. Attends une à deux minutes. L'adresse apparaît en haut de la page Pages, du type `https://ton-pseudo.github.io/entre-ciel-et-terre/`.

## Installation sur la tablette

1. Ouvre l'adresse dans **Chrome**, avec internet (la première fois seulement : les belles polices se gardent ensuite en mémoire).
2. Menu **⋮**, puis **Installer l'application** (ou **Ajouter à l'écran d'accueil**).
3. L'icône apparaît. L'appli s'ouvre en plein écran et fonctionne ensuite sans internet.

## Mettre à jour l'appli

1. Remplace les fichiers modifiés sur GitHub.
2. Dans `sw.js`, change la première ligne : `ect-v1` devient `ect-v2` (puis `ect-v3`, etc.).
3. Ouvre l'appli deux fois : la nouvelle version s'installe à la deuxième ouverture.

Tes données (clients, rendez-vous, notes) ne sont pas touchées par une mise à jour.

## Sauvegarde

Toutes les données vivent sur la tablette. Dans **Réglages**, **Sauvegarder** crée un fichier à garder ailleurs (mail, Drive). **Restaurer** le recharge. Un rappel apparaît sur l'accueil si la dernière sauvegarde date de plus d'un mois.

Les notes de séance doivent être conservées au moins deux ans : ne saute pas les sauvegardes.
