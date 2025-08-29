<template>
  <div class="datenschutz" v-bind:class="{ 'is-displayed': this.isDisplayed }">
    <div class="content__container">
      <h2 class="visually-hidden">
        {{ datenschutz.title }}
      </h2>
      <div
        class="content__md"
        v-html="getHTMLfromMD(datenschutz.content)"
      ></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import * as datenschutzDE from "../../../content/datenschutz_de/datenschutz_de.json";
import * as datenschutzFR from "../../../content/datenschutz_fr/datenschutz_fr.json";
import getHTMLfromMDMixin from "../../mixins/getHTMLFromMD.js";
import { i18n } from "../../index.js";

export default Vue.extend({
  mixins: [getHTMLfromMDMixin],
  data() {
    return {
      datenschutz: i18n.locale == "de" ? datenschutzDE : datenschutzFR,
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
