import Vue from 'vue'
import App from './App.vue'

import MyComponent from './components/MyComponent.vue'

Vue.config.productionTip = false

Vue.component('foo', MyComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')
