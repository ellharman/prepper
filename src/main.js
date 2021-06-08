import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style/custom.scss';

Vue.config.productionTip = false;
Vue.use(BootstrapVue, {
  BFormInput: { lazy: true },
});
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
