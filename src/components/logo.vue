
<template>
  <div
    class="logo"
  >
    <div
      class="logo__container"
    >
      <router-link
        class="logo__link"
        :to="'/' + $i18n.locale + '/home'"
      >
        <p class="logo__name">
          Tina Beerli
        </p>
        <p
          v-html="$t('app.logoSubline')"
          class="logo__subline"
        >
        </p>
      </router-link>
    </div>
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
