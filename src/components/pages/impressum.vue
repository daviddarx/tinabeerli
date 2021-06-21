
<template>
  <div
    class="impressum"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content__container">
      <h2 class="visually-hidden">
        {{impressum.title}}
      </h2>
      <div
        class="content__md"
        v-html="getHTMLfromMD(impressum.content)"
      >
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import * as impressumDE from '../../../content/impressum_de/impressum_de.json';
  import * as impressumFR from '../../../content/impressum_fr/impressum_fr.json';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';
  import { i18n } from "../../index.js";

  export default Vue.extend({
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        impressum: (i18n.locale =='de') ? impressumDE : impressumFR,
        isDisplayed : false,
      }
    },
    mounted () {
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

