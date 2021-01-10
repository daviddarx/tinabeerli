
<template>
  <div
    class="consulting"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content__container">

      <h2 class="visually-hidden">
        {{beratung.title}}
      </h2>

      <div
        class="content__md"
      >
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import * as beratung from '../../../content/beratung.json';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';

  export default Vue.extend({
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        beratung: beratung,
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

