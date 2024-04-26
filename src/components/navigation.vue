<template>
  <nav
    class="navigation"
    v-bind:class="{
      'is-mobile': this.isMobile,
      'is-mobile-displayed': this.isMobileDisplayed
    }"
  >
    <h2 class="visually-hidden">Navigation</h2>
    <div class="navigation__container" v-if="this.isDisplayed">
      <div class="navigation__links">
        <router-link
          class="navigation__link"
          :to="'/' + $i18n.locale + '/home'"
        >
          <span class="navigation__el">
            {{ $t("nav.home") }}
          </span>
        </router-link>
        <router-link
          class="navigation__link"
          :to="'/' + $i18n.locale + '/beratung'"
        >
          <span class="navigation__el">
            {{ $t("nav.consultation") }}
          </span>
        </router-link>
        <router-link
          class="navigation__link"
          :to="'/' + $i18n.locale + '/ueber-mich'"
        >
          <span class="navigation__el">
            {{ $t("nav.about") }}
          </span>
        </router-link>
      </div>

      <div class="navigation__contact">
        <span class="contact__address">
          Praxis Badenerstrasse 21<br />
          <a
            href="https://www.google.com/maps/place/Badenerstrasse+21,+8004+Z%C3%BCrich/@47.3732023,8.5296949,19.75z/data=!4m5!3m4!1s0x47900a04b2d4bdfb:0xdefe8a76e15ebada!8m2!3d47.3733075!4d8.5298261"
            target="blank"
          >
            Badenerstrasse 21, 8004 Zürich</a
          ><br /><br />
        </span>
        +41 79 614 26 18<br />
        <a href="mailto:kontakt@tinabeerli.ch" target="_blank"
          >kontakt@tinabeerli.ch</a
        >
      </div>

      <div class="navigation__languages">
        <a
          class="language-link language-link--left"
          :class="{ 'is-active': this.$route.params.lang == 'de' }"
          :href="'/de/' + this.$route.name"
        >
          DE </a
        ><!--
        --><a
          class="language-link language-link--right"
          :class="{ 'is-active': this.$route.params.lang == 'fr' }"
          :href="'/fr/' + this.$route.name"
        >
          FR
        </a>
      </div>
    </div>

    <div class="navigation__burger" v-on:click="displayMobileNavigation">
      <div class="navigation__burger-line"></div>
      <div class="navigation__burger-bg"></div>
    </div>

    <div class="navigation__bg" v-on:click="closeMobileNavigation"></div>
  </nav>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      isDisplayed: false,
      isMobile: false,
      isMobileDisplayed: false,
      isMobileStep: 850
    };
  },
  mounted() {
    requestAnimationFrame(this.displayNav);

    window.addEventListener("resize", this.resizeLister);
    this.resizeLister();

    this.$router.beforeEach((to, from, next) => {
      this.closeMobileNavigation();
      next();
    });
  },
  methods: {
    displayNav: function() {
      this.isDisplayed = true;
    },
    resizeLister: function() {
      const windowW =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (windowW <= this.isMobileStep && this.isMobile == false) {
        this.setMobileNavigation();
      } else if (windowW > this.isMobileStep && this.isMobile == true) {
        this.resetMobileNavigation();
      }
    },
    setMobileNavigation: function() {
      this.isMobile = true;
    },
    resetMobileNavigation: function() {
      this.isMobile = false;
      this.isMobileDisplayed = false;
    },
    displayMobileNavigation: function() {
      this.isMobileDisplayed = !this.isMobileDisplayed;
    },
    closeMobileNavigation: function() {
      if (this.isMobileDisplayed == true) {
        this.isMobileDisplayed = false;
      }
    }
  }
});
</script>
