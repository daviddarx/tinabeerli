
<template>
  <div
    class="about"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <img src="../../../static/images/tina_beerli.jpg" alt="Tina Beerli – Tina Beerli – Psychologische Beratung und Coaching" class="about__img"/>

    <div class="content__container">

      <h2 class="visually-hidden">
        {{aboutme.title}}
      </h2>

      <div
        class="content__md"
        v-html="getHTMLfromMD(aboutme.content)"
      >
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import * as aboutme from '../../../content/uebermich/uebermich.json';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';

  export default Vue.extend({
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        aboutme: aboutme,
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);
    },

    methods: {
      display: function() {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      }
    }
  });
</script>

