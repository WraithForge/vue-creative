import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  cart: [],
  generatedItems: [],
  itemText: '',
  spellText: '',
  addProduct(id) {
    this.cart.push(id);
  },
  addItemToItems() {
    this.generatedItems.push("HI!!!");
    console.log(this.generatedItems[0]);
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
