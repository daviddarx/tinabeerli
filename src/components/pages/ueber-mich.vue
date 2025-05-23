<template>
  <div class="about" v-bind:class="{ 'is-displayed': this.isDisplayed }">
    <div class="content__container">
      <h2 class="visually-hidden">
        {{ aboutme.title }}
      </h2>

      <img
        src="../../../static/images/tina_beerli.jpg"
        alt="Tina Beerli – Psychologische Einzel- & Beziehungsberatung"
        class="content__portrait"
        ref="image"
      />

      <div class="content__md" v-html="getHTMLfromMD(aboutme.content)"></div>
    </div>
    <background-decoration
      ref="bgDeco"
      v-bind:image1URL="'/images/faden/faden_03_1.jpg'"
      v-bind:image2URL="'/images/faden/faden_03_2.jpg'"
    >
    </background-decoration>
  </div>
</template>

<script>
import Vue from "vue";
import * as aboutmeDE from "../../../content/uebermich_de/uebermich_de.json";
import * as aboutmeFR from "../../../content/uebermich_fr/uebermich_fr.json";
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
      aboutme: i18n.locale == "de" ? aboutmeDE : aboutmeFR,
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
