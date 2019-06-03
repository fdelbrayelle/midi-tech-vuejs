# Midi technique - VueJS

Ce dépôt contient les [slides](https://github.com/fdelbrayelle/midi-tech-vuejs/blob/master/slides) et la [démo](https://github.com/fdelbrayelle/midi-tech-vuejs/blob/master/demo) du midi technique effectué le jeudi 6 mai 2019 chez Gfi Informatique.

Le sujet est centré sur le framework JavaScript VueJS qui permet de créer des applications front. Après une courte présentation des caractéristiques du framework et une rapide comparaison avec ses principaux concurrents (Angular et React), une démo a été effectuée pour créer un nouveau projet simple via Vue CLI et montrer les possibilités du framework.

Les supports peuvent être librement modifiés et réutilisés. Les slides ont également été [exportés au format PDF](https://github.com/fdelbrayelle/midi-tech-vuejs/blob/master/slides/presentation.pdf).

## Étapes de la démo

- Supprimer le dossier si existant : `rm -rf demo`
- Vérifier la version de Vue CLI : `vue --version`
- Créer un projet avec Vue CLI, s'y déplacer et l'ouvrir avec VS Code (ou tout autre IDE) : `vue create demo` puis `cd demo` et `code . &`
- Présenter l'extension Vetur de VS Code (scaffold, coloration syntaxique...)
- Lancer l'application en mode développement avec `cd src && vue serve App.vue` puis `gio open http://localhost:8080`
- Montrer l'intérêt de Vue Devtools en tant qu'extension au navigateur
- Montrer l'interface graphique de Vue CLI qui permet d'administrer ses applications : `vue ui`
- Tester les conditions en ajoutant `<p v-if='seen'>Tu me vois</p>` dans le template et une data `seen`
- Vérifier que cela ne fonctionne pas et expliquer pourquoi (sécurité Vue.js du fait que les composants n'ont pas leur propre état de base), ajouter la data en tant que function
- Tester le two-way binding en ajoutant `<input v-model="message">` et `<p>{{ message }}</p>` dans le template et une data `message`
- TODO : Méthodes
- TODO : Evenements
- TODO : Nouveau composant, déclaré globalement
- TODO : Nouveau composant, déclaré localement
- TODO : Ajout de BootstrapVue (https://bootstrap-vue.js.org/docs/#vue-cli-3) et un <b-button> par exemple
- TODO : Boucle pour afficher n fois le composant
- TODO : Faire un appel REST avec Axios (https://alligator.io/vuejs/rest-api-axios/)
- TODO : Préparer un composant pour la production avec : `vue build MonComposant.vue`
- TODO : Déployer sur AWS ou en local sur Docker + nginx ?

## Bonus : Créer un projet Vue.js avec JHipster
- Créer un dossier et naviguer dedans `mkdir vuejs-jhipster && cd vuejs-jhipster`
- Vérifier que Yeoman est installé (obligatoire pour utiliser un [blueprint](https://www.jhipster.tech/modules/creating-a-blueprint/) JHipster) : `npm install -g yo` (attention en fonction de la configuration réseau il peut être nécessaire de configurer le proxy au niveau de npm, voir `npm config list`)
- Installer le blueprint avec `npm install -g generator-jhipster-vuejs`
- Lancer la génération du projet avec `jhipster --blueprint vuejs`
