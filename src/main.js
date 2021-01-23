import Vue from 'vue'
import App from './App.vue'

import '../src/js/onresize'

Vue.config.productionTip = false

export default new Vue({
  render: h => h(App),
}).$mount('#app')
