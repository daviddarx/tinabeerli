<template>
  <div class="kontakt" v-bind:class="{ 'is-displayed': this.isDisplayed }">
    <div class="content__container">
      <h2 class="visually-hidden">
        {{ kontakt.title }}
      </h2>

      <div class="content__md" v-html="getHTMLfromMD(kontakt.content)"></div>
    </div>
    <background-decoration
      ref="bgDeco"
      v-bind:image1URL="'/images/faden/faden_02_1.jpg'"
      v-bind:image2URL="'/images/faden/faden_02_2.jpg'"
    >
    </background-decoration>
  </div>
</template>

<script>
import Vue from "vue";
import * as kontaktDE from "../../../content/kontakt_de/kontakt_de.json";
import * as kontaktFR from "../../../content/kontakt_fr/kontakt_fr.json";
import getHTMLfromMDMixin from "../../mixins/getHTMLFromMD";
import BackgroundDecoration from "../background-decoration.vue";
import { i18n } from "../../index.js";

export default Vue.extend({
  components: {
    "background-decoration": BackgroundDecoration
  },
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
  beforeDestroy() {
    this.$refs.bgDeco.destroy();
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
