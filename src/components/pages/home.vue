
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
  </div>
</template>

<script>
  import Vue from "vue";
  import * as home from '../../../content/home/home.json';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';

  export default Vue.extend({
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        home: home,
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

