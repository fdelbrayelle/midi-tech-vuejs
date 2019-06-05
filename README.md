# Midi technique - Vue.js

<p align="center"><img src="https://github.com/fdelbrayelle/midi-tech-vuejs/blob/master/slides/src/images/vuejs.png" /></p>

Ce dépôt contient les [slides](https://github.com/fdelbrayelle/midi-tech-vuejs/blob/master/slides) et la [démo](https://github.com/fdelbrayelle/midi-tech-vuejs/blob/master/demo) du midi technique effectué le jeudi 6 juin 2019 chez Gfi Informatique.

Le sujet est centré sur le framework JavaScript Vue.js qui permet de créer des applications front. Après une courte présentation des caractéristiques du framework et une rapide comparaison avec ses principaux concurrents (Angular et React), une démo a été effectuée pour créer un nouveau projet simple via Vue CLI et montrer les possibilités du framework.

En complément, le blueprint JHipster permettant de générer des applications full-stack complète avec Vue.js a été également présenté.

Les supports peuvent être librement modifiés et réutilisés. Les slides ont également été [exportés au format PDF](https://github.com/fdelbrayelle/midi-tech-vuejs/blob/master/slides/presentation.pdf).

## Étapes de la démo

- Supprimer le dossier si existant : `rm -rf demo`
- Vérifier la version de Vue CLI : `vue --version`. L'installer si besoin avec `npm install -g @vue/cli`
- Créer un projet avec Vue CLI, s'y déplacer et l'ouvrir avec VS Code (ou tout autre IDE) : `vue create demo` puis `cd demo` et `code . &`
- Présenter l'extension Vetur de VS Code (scaffold, coloration syntaxique...)
- Lancer l'application en mode développement avec `cd src && vue serve App.vue` puis `gio open http://localhost:8080`
- Lancer l'application avec `npm run serve` à la racine de `demo` (mieux car prend en compte les briques telles que BootstrapVue)
- Montrer l'intérêt de Vue Devtools en tant qu'extension au navigateur
- Montrer l'interface graphique de Vue CLI qui permet d'administrer ses applications : `vue ui`
- Installer [BootstrapVue](https://bootstrap-vue.js.org/docs/#vue-cli-3) avec `npm install --save bootstrap-vue` et ajouter un `<b-button>` par exemple
- Tester les conditions en ajoutant `<p v-if='seen'>Tu me vois</p>` dans le template et une data `seen`
- Vérifier que cela ne fonctionne pas et expliquer pourquoi (sécurité Vue.js du fait que les composants n'ont pas leur propre état de base), ajouter la data en tant que function
- Montrer que les erreurs apparaissent dans le terminal
- Tester le two-way binding en ajoutant `<input v-model="message">` et `<p>{{ message }}</p>` dans le template et une data `message`
- Tester les évènements et les méthodes en ajoutant `<button v-on:click="reverseMessage">Retourner le message</button>>` et une méthode `reverseMessage: function () { this.message = this.message.split('').reverse().join('') }`
- Créer un nouveau composant déclaré globalement avec `Vue.component('foo', Foo);` dans le `main.js`
- Créer un nouveau composant, déclaré localement (import/export classique)
- Ajouter une `props` à ce composant et lui fournir une valeur via le composant parent avec `v-bind:prop-name="prop-value"`
- Créer un nouveau composant contenant un `<slot></slot>`, l'utiliser puis montrer le contenu par défaut, montrer les slots nommés (avec `<slot name="nom">` et `<template v-slot:nom>`)
- Mettre les `<b-card style="max-width: 20rem;">` dans un `<b-card-group deck>`
- Boucler pour afficher une liste de personnes dans les b-cards avec `v-for` et `v-bind:key` sur le composant
- Préparer un composant pour la production avec : `vue build MonComposant.vue` ou compiler et minifier l'application pour la production avec `npm run build`

## Bonus : Créer un projet Vue.js avec JHipster
- Créer un dossier et naviguer dedans `mkdir vuejs-jhipster && cd vuejs-jhipster`
- Vérifier que Yeoman est installé (obligatoire pour utiliser un [blueprint](https://www.jhipster.tech/modules/creating-a-blueprint/) JHipster) : `npm install -g yo` (attention en fonction de la configuration réseau il peut être nécessaire de configurer le proxy au niveau de npm, voir `npm config list`, vérifier également les versions : `node -v` et `npm -v`)
- Installer le blueprint avec `npm install -g generator-jhipster-vuejs`
- Lancer la génération du projet avec `jhipster --blueprint vuejs`
- Présenter ce qui est généré côté front : `code src/main/webapp &` (par défaut intégration de TypeScript, BootStrapVue, Vue Router, d'[Axios](https://github.com/axios/axios)...)
