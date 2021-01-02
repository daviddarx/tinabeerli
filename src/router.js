import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }
}

const router = new VueRouter({
  routes,
  scrollBehavior,
  mode: 'history',
  base: '/',
  linkActiveClass: 'is-current',
});

export default router;
