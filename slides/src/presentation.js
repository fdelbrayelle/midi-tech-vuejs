// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Code
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#fd8224',
    quaternary: '#CECECE',
    quinary: 'yellow'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  vuejsLogo: require("./images/vuejs.png"),
  comparaison: require("./images/comparaison.jpg"),
  monofichier: require("./images/monofichier.png"),
  vueDevtools: require("./images/vue-devtools.png"),
  vueLifecycle: require("./images/vue-lifecycle.png"),
  components: require("./images/components.png"),
  mvvm: require("./images/mvvm.png"),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Midi tech
          </Heading>
          <Text margin="10px 0 0" textColor="quinary" size={1} fit bold>
            Vue.js, une alternative à Angular et React
          </Text>
          <Text margin="200px 0 0" textColor="primary" textSize="24" bold>
            François Delbrayelle (@fdelbrayelle)
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Bienvenue !
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Midis techniques S03E03</ListItem>
            <ListItem margin="30px 0 0">Vous aussi vous pouvez en faire ;-) !</ListItem>
            <ListItem margin="30px 0 0">Présentation puis démo</ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Sondage : qui connaît/utilise Vue.js ?</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Vue.js</Heading>
          <Image margin="75px 280px 0" src={images.vuejsLogo}></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Qu'est-ce que c'est ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Un framework front JS (ES2015/2016)</ListItem>
            <ListItem margin="30px 0 0">Créé par Evan You en 2014</ListItem>
            <ListItem margin="30px 0 0">Open-source, licence MIT</ListItem>
            <ListItem margin="30px 0 0">Concurrent à Angular et React</ListItem>
            <ListItem margin="30px 0 0">Sans lien avec un GAFAM</ListItem>
            <ListItem margin="30px 0 0">Version actuelle : 2.6.10</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Image margin="-150px 50px 0" width="900px" src={images.comparaison}></Image>
          <Text size={6} margin="30px 0 0">Source (17 décembre 2018) : https://dzone.com/articles/infographic-react-vs-angular-vs-vuejs</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Caractéristiques
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Basé sur les composants/vues</ListItem>
            <ListItem margin="30px 0 0">Architecture proche du MVVM</ListItem>
            <ListItem margin="30px 0 0">Virtual DOM comme React (compile les templates en fonctions de rendu)</ListItem>
            <ListItem margin="30px 0 0">Vue Router, VueX (State)...</ListItem>
            <ListItem margin="30px 0 0">Apprentissage rapide et facile</ListItem>
            <ListItem margin="30px 0 0">Possibilité d'utiliser TypeScript</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Architecture MVVM
          </Heading>
          <Image margin="50px 0" src={images.mvvm}></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Composants
          </Heading>
          <List>
            <Image margin="60px 200px" src={images.components}></Image>
            <ListItem margin="30px 0 0">Composant racine = s'instancie avec <Code>new Vue(&#123; el: '#app' &#125;)</Code> souvent dans un <Code>main.js</Code> ou un <Code>main.ts</Code></ListItem>
            <ListItem margin="30px 0 0">Chaque composant est une instance de Vue et donc un ViewModel qui synchronise Model (objets JS) et Vue (DOM)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Cycle de vie
          </Heading>
          <List>
          <Image margin="0 0" src={images.vueLifecycle}></Image>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Attributs d'un composant
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Données (réactives) avec <Code>data</Code></ListItem>
            <ListItem margin="30px 0 0">Méthodes (dont fonctions de rendu avec <Code>render</Code>)</ListItem>
            <ListItem margin="30px 0 0">Propriétés calculées avec <Code>computed</Code> (cache)</ListItem>
            <ListItem margin="30px 0 0">Observateurs avec <Code>watch</Code> (un par champ)</ListItem>
            <ListItem margin="30px 0 0">Propriétés pour communiquer avec les composants enfants avec <Code>props</Code></ListItem>
            <ListItem margin="30px 0 0">Interpolation dans les templates avec <Code>&#123;&#123; attribut &#125;&#125;</Code> (expressions JS OK)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Directives
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Proches de AngularJS (<Code>ng</Code>)</ListItem>
            <ListItem margin="30px 0 0">Préfixées avec <Code>v-</Code> : <Code>v-if</Code>, <Code>v-for</Code>, <Code>v-on:click</Code>, <Code>v-bind:*</Code> pour les attributs, <Code>v-html</Code>...</ListItem>
            <ListItem margin="30px 0 0">Exemple dans un template : <Code>&lt;p v-if="seen"&gt;Partie visible&lt;/p&gt;</Code></ListItem>
            <ListItem margin="30px 0 0">Abbréviations : <Code>:</Code> pour <Code>v-bind</Code> et <Code>@</Code> pour <Code>v-on</Code></ListItem>
            <ListItem margin="30px 0 0">Two-way binding : <Code>v-model</Code></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Évènements
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Directive <Code>v-on:*</Code> écoute les évènements du DOM, ex : <Code>v-on:click</Code></ListItem>
            <ListItem margin="30px 0 0">Modificateurs, ex : <Code>&lt;a v-on:click.once="doSomething"&gt;</Code></ListItem>
            <ListItem margin="30px 0 0">Touches du clavier, ex : <Code>&lt;a v-on:keyup.enter="typeSomething"&gt;</Code></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Déclarations des composants
          </Heading>
          <List>
            <ListItem margin="30px 0 0">Globalement (avant new Vue) : <Code>Vue.component('my-component-name', &#123; /* ... */ &#125;)</Code></ListItem>
            <ListItem margin="30px 0 0">Localement avec <Code>import</Code> et <Code>export default</Code> (ES2015 - https://babeljs.io/docs/en/learn#modules)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Composants monofichier
          </Heading>
          <Image margin="50px 225px 0" src={images.monofichier}></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Bonnes pratiques
          </Heading>
          <List>
            <ListItem margin="30px 0 0">Utiliser les méthodes et computed</ListItem>
            <ListItem margin="30px 0 0">Éviter les composants "fourre-tout"</ListItem>
            <ListItem margin="30px 0 0">Utiliser les slots (déléguer l'affichage au composant parent)</ListItem>
            <ListItem margin="30px 0 0">Tendre vers les renderless components : https://adamwathan.me/renderless-components-in-vuejs/</ListItem>
            <ListItem margin="30px 0 0">Éviter de mettre tout et n'importe quoi dans l'arbre à états de VueX</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Server-side rendering
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Par défaut les composants Vue produisent et manipulent du DOM dans le navigateur côté client</ListItem>
            <ListItem margin="30px 0 0">SSR = possibilité de rendre ces composants côté serveur sous forme de chaînes de caractères HTML</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Inconvénients SSR
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Nécessite une adaptation pour certaines librairies tierces</ListItem>
            <ListItem margin="30px 0 0">Contrairement à une SPA entièrement statique, besoin de Node.js avec Express par exemple</ListItem>
            <ListItem margin="30px 0 0">Plus de charge côté serveur</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Avantages SSR
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Temps de chargement réduit pour les connexions faibles et les vieux navigateurs</ListItem>
            <ListItem margin="30px 0 0">Optimisation SEO par rapport à simple SPA (Single Page Application) = penser prerendering (Webpack + prerender-spa-plugin) ?</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Vue Devtools
          </Heading>
          <List>
            <Image margin="0 300px" src={images.vueDevtools}></Image>
            <ListItem margin="30px 0 0">Extension pour les navigateurs</ListItem>
            <ListItem margin="30px 0 0">Voir les composants et leurs données</ListItem>
            <ListItem margin="30px 0 0">https://github.com/vuejs/vue-devtools</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Installation
          </Heading>
          <List>
            <ListItem margin="60px 0 0">En inclusion directe <Code>script</Code></ListItem>
            <ListItem margin="30px 0 0">Avec <Code>npm install vue</Code> : Webpack...</ListItem>
            <ListItem margin="30px 0 0">Avec Vue CLI (cli.vuejs.org) : <Code>npm install -g @vue/cli</Code></ListItem>
            <ListItem margin="30px 0 0">Avec NuxtJS (nuxtjs.org) : comprend Vue Router, Babel, SSR...</ListItem>
            <ListItem margin="30px 0 0">Avec le blueprint JHipster : <Code>npm install -g generator-jhipster-vuejs</Code> puis <Code>jhipster --blueprint vuejs</Code></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Démo !</Heading>
          <Image margin="75px 280px 0" src={images.vuejsLogo}></Image>
          <Text margin="75px 0 0" textColor="primary" textSize="24">
          https://github.com/fdelbrayelle/midi-tech-vuejs/demo
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Et le turfu ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Vue.js 3 au 3ème trimestre 2019</ListItem>
            <ListItem margin="30px 0 0">Contribuez ! https://github.com/vuejs</ListItem>
            <ListItem margin="30px 0 0">Meetups et conférences (events.vuejs.org)</ListItem>
            <ListItem margin="30px 0 0">Autres solutions comme Svelte...</ListItem>
            <ListItem margin="30px 0 0">Le Web, ses frameworks et ses standards : https://youtu.be/uFxVH5mFAKg (@hsablonniere)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Liens utiles
          </Heading>
          <List>
            <ListItem margin="60px 0 0">CodeSandBox : https://codesandbox.io/s/vue</ListItem>
            <ListItem margin="30px 0 0">Vue.js 2.* : https://fr.vuejs.org/v2/guide</ListItem>
            <ListItem margin="30px 0 0">Vue Router : https://router.vuejs.org/guide</ListItem>
            <ListItem margin="30px 0 0">VueX : https://vuex.vuejs.org/guide</ListItem>
            <ListItem margin="30px 0 0">SSR : https://ssr.vuejs.org</ListItem>
            <ListItem margin="30px 0 0">NuxtJS : https://nuxtjs.org/guide</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Merci !</Heading>
          <Image margin="75px 280px 0" src={images.vuejsLogo}></Image>
          <Text margin="75px 0 0" textColor="primary" textSize="24">
          https://github.com/fdelbrayelle/midi-tech-vuejs
          </Text>
        </Slide>
      </Deck>
    );
  }
}
