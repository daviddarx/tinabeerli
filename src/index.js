import Vue from 'vue';
import App from './app.vue';
import router from './router';
import VueI18n from 'vue-i18n';
import messages from './lang';

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'de',
  messages
});

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});
