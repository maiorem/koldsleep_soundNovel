import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import { DraggablePlugin, DraggableDirective } from '@braks/revue-draggable';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

// Use as Plugin
Vue.use(DraggablePlugin)

// or
Vue.directive('draggable', DraggableDirective)

