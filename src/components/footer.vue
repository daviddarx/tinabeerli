<template>
  <div class="footer">
    ©2021 Tina Beerli –
    <router-link :to="'/' + $i18n.locale + '/impressum'">
      {{ $t("footer.impressum") }} </router-link
    >&nbsp;
    <router-link :to="'/' + $i18n.locale + '/datenschutz'">
      {{ $t("footer.datenschutz") }}
    </router-link>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  mounted() {},
  methods: {}
});
</script>
