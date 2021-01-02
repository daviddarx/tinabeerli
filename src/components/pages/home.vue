
<template>
  <div
    class="home"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <h2 class="visually-hidden">
      Home
    </h2>

    <p>
      Unser Lebensweg wird begleitet von einem roten Faden, der sich als fortlaufender Prozess durch unser Leben schlängelt.
    </p>

    <p>
      Auf diesem individuellen Lebensweg sind wir ständig in Beziehung und Bewegung, halten dazwischen inne, begegnen Anderen, sind manchmal im Zwiespalt, machen Seitensprünge, überkreuzen Wege von Neuen und Neuem, kommen manchmal vom Wege ab, sind unentschlossen, verlassen und wissen auch nicht immer wie weiter.
    </p>

    <p>
      Oft müssen wir Entscheidungen fällen auf diesem Lebensweg. In meiner Beratung möchte ich mit Ihnen einen Raum ausgestalten, indem weniger „entweder oder“, aber mehr „sowohl als auch“ entstehen und möglich sein kann.
    </p>

  </div>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
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

