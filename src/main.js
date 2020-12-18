import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// // 获取屏幕宽度（viewPort）
// let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
// // 获取html dom
// let htmlDom = document.getElementsByTagName('html')[0]
// // 设置html fontsize
// htmlDom.style.fontSize = htmlWidth / 20 + 'px'

new Vue({
  render: h => h(App),
}).$mount('#app')
