
<template>
  <div
    class="browser-warning"
    v-if="this.isWarningDisplayed"
  >
    <logo></logo>

    <div class="browser-warning__infos">
      <h2 class="browser-warning__title">
        Bitte verwenden Sie einen modernen Browser<br>
      </h2>

      <p class="browser-warning__desc">
        Laden Sie zum Beispiel die letzte Version von
        <a href="https://www.microsoft.com/de-de/edge" target="_blank" class="text-link">MicroEdge</a>,
        <a href="https://www.google.com/chrome/" target="_blank" class="text-link">Google Chrome</a> oder
        <a href="https://www.mozilla.org/firefox/" target="_blank" class="text-link">Mozilla Firefox</a>
        herunter und besuchen Sie diese Seite erneut, um meine Website zu sehen.
      </p>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import browser from 'browser-detect';
  import Logo from './logo.vue';


  export default Vue.extend({
    components: {
      'logo': Logo
    },
    data() {
      return {
        isWarningDisplayed: false
      }
    },
    mounted () {
      //https://github.com/KennethanCeyer/browser-detect

      const b = browser();

      if (b.name == 'ie') {
        this.isWarningDisplayed = true;
      }
      if (b.name == 'edge' & b.versionNumber < 79 ) {
        this.isWarningDisplayed = true;
      } 
    }
  });
</script>
