import Vue from 'vue';
import VueRouter from 'vue-router';
import getBrowserLocale from "./util/i18n/get-browser-locale";
import { supportedLocalesInclude } from "./util/i18n/supported-locales";
import {
  setDocumentLang,
  setDocumentTitle
} from "./util/i18n/document";
import RouterView from "./components/router-view.vue";
import Home from './components/pages/home.vue';
import Beratung from './components/pages/beratung.vue';
import Uebermich from './components/pages/ueber-mich.vue';
import Impressum from './components/pages/impressum.vue';

import { i18n } from "./index.js";

function getStartingLocale() {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true })

  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale
  } else {
    return process.env.VUE_APP_I18N_LOCALE || "de"
  }
}

window.defaultLanguage = getStartingLocale();

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    const position = {};

    position.x = 0;
    position.y = 0;

    return position;
  }
}

const router = new VueRouter({
  routes: [
    {
      path: "/:lang",
      component: RouterView,
      beforeEnter(to, from, next) {
        const lang = to.params.lang;
        if (!["de", "fr"].includes(lang)) return next("de");
        if (i18n.locale !== lang) {
          i18n.locale = lang;
        }

        setDocumentLang(i18n.locale);
        setDocumentTitle(i18n.t("app.title"));

        return next();
      },
      children: [
        {
          label: 'Home',
          path: "home",
          name: "home",
          component: Home,
          meta: { pageTitle: 'Home' }
        },
        {
          label: 'Beratung',
          path: 'beratung',
          name: 'beratung',
          component: Beratung,
          meta: { pageTitle: 'Beratung' }
        },
        {
          label: 'Über mich',
          path: "ueber-mich",
          name: "ueber-mich",
          component: Uebermich,
          meta: { pageTitle: 'Über mich' }
        },
        {
          label: 'Impressum',
          path: "impressum",
          name: "impressum",
          component: Impressum,
          meta: { pageTitle: 'Impressum' }
        }
      ]
    },
    {
      path: "*",
      redirect: "/"+window.defaultLanguage+"/home"
    }
  ],
  scrollBehavior,
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-current',
});

export default router;
