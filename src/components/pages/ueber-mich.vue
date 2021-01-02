
<template>
  <div
    class="about"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <img src="../../../static/images/tina_beerli.jpg" alt="Tina Beerli – Tina Beerli – Psychologische Beratung und Coaching" class="about__img"/>

    <h2 class="visually-hidden">
      Über mich
    </h2>

    <p>
      Auch der rote Faden durch meinen Lebensweg schlängelte sich unaufhaltbar durch mein Leben, unabhängig von den verschiedenen Hürden, welche er überwinden musste.
    </p>

    <p>
      Mein eigener Lebensweg schlängelt sich wie ein roter Faden durch einen Prozess der ständigen Veränderung und Bereicherung von Haltungen und Sichtweisen. Je nach Abschnitt, Lebensstandort, Ausbildung, gelebten Beziehungen und entsprechenden Auseinandersetzungen, färbte dieser „rote Faden“ mein Leben nochmals anders ein.
    </p>

    <p>
      Da mein eigener Lebensweg je nach Lebensstandort, Ausbildung und gelebten Beziehungen vielfältig und farbenreich meine Haltungen und Sichtweisen eingefärbt und stetig umgekrempelt hat, bin ich der festen Überzeugung, dass der Weg und der Prozess das Ziel ist im Leben.
    </p>

    <p>
      Nach einem zweijährigen Aufenthalt und Auseinandersetzung zwischen Kunst und Sozial in Paris schloss ich die Fachhochschule für Soziale Arbeit in Genf ab, um danach zu meinem Ursprung nach Zürich zurück zu kehren. Während meiner Bachelorarbeit entdeckte ich mein Interesse für die Sexualität und widmete meine Abschlussarbeit diesem Thema. Der MAS in systemischer Beratung festigte meine heutige, konstruktivistische Haltung und führte mich der therapeutischen Auseinandersetzung mit dem Thema Sexualität näher. Zwischenzeitlich schloss ich mich dem Organisationkomitee der Porny Days an. Dort kuratiere ich Programmpunkte im Zusammenhang mit einer wissens- oder emotionsbasierten Auseinandersetzung mit der Sexualität, wie beispielsweise
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

