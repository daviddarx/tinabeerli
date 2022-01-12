
<template>
  <div
    class="home"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content__container">
      <h2 class="visually-hidden">
        {{home.title}}
      </h2>

      <div
        class="content__md"
        v-html="getHTMLfromMD(home.content)"
      >
      </div>
    </div>
    <background-decoration
      ref="bgDeco"
      v-bind:image1URL="'/images/faden/faden_01_1.jpg'"
      v-bind:image2URL="'/images/faden/faden_01_2.jpg'"
    >
    </background-decoration>
  </div>
</template>

<script>
  import Vue from "vue";
  import * as homeDE from '../../../content/home_de/home_de.json';
  import * as homeFR from '../../../content/home_fr/home_fr.json';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';
  import BackgroundDecoration from '../background-decoration.vue';
  import { i18n } from "../../index.js";

  export default Vue.extend({
    components: {
      'background-decoration': BackgroundDecoration
    },
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        home: (i18n.locale =='de') ? homeDE : homeFR,
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);
      document.body.classList.add('home');
    },
    beforeDestroy () {
      document.body.classList.remove('home');
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

