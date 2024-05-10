import Vue from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton'

Vue.config.productionTip = false
Vue.component('MyButton', MyButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
