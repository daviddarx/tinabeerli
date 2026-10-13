<template>
  <div class="kontakt" v-bind:class="{ 'is-displayed': this.isDisplayed }">
    <div class="content__container">
      <h2 class="visually-hidden">
        {{ kontakt.title }}
      </h2>

      <div class="content__md" v-html="getHTMLfromMD(kontakt.content)"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import * as kontaktDE from "../../../content/kontakt_de/kontakt_de.json";
import * as kontaktFR from "../../../content/kontakt_fr/kontakt_fr.json";
import getHTMLfromMDMixin from "../../mixins/getHTMLFromMD";
import { i18n } from "../../index.js";

export default Vue.extend({
  mixins: [getHTMLfromMDMixin],
  data() {
    return {
      kontakt: i18n.locale == "de" ? kontaktDE : kontaktFR,
      isDisplayed: false
    };
  },
  mounted() {
    setTimeout(this.display, 100);
  },
  methods: {
    display: function() {
      if (this.$parent.$parent.isLoaded == true) {
        this.isDisplayed = true;
      }
    }
  }
});
</script>
