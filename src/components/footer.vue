
<template>
  <div class="footer">
    ©2021 Tina Beerli –
    <router-link
        :to="'/' + $i18n.locale + '/impressum'"
      >
        Impressum
    </router-link>
  </div>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  });
</script>
