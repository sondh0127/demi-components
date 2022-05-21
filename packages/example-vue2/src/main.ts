import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import 'library/style'
import App from './App.vue'
Vue.prototype.$ELEMENT = { size: 'small' };

Vue.use(VueCompositionAPI)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
