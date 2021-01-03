
<template>
  <div
    class="consulting"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content__container">

      <h2 class="visually-hidden">
        Beratung
      </h2>

      <p>
        Meine Beratung ist ziel-, lösungs- und ressourcenorientiert. Sie richtet sich nach dem Machbaren aus und versucht gleichzeitig achtsam das Wünschenswerte mit einzubeziehen. Sie sind der Experte Ihres Lebensweges und ich kann Ihnen mit meinem Fachwissen und entsprechenden Inputs eine Wegbegleiterin sein.
      </p>

      <p>
        Vernetztes, ganzheitliches und inklusives Denken ist für mich wichtig, um den Bedürfnissen meines Gegenübers so gerecht wie möglich zu werden. Der Respekt gegenüber Werte und Haltungen anderer ist für mich dabei eine Grundhaltung.
      </p>

      <h3>Themen</h3>

      <ul>
        <li>
          Beziehung
        </li>
        <li>
          Partnerschaft
        </li>
        <li>
          Monogamie / Polyamorie / Alternative Beziehungsformen
        </li>
        <li>
          Sexualität
        </li>
        <li>
          Elternschaft
        </li>
        <li>
          Erziehung
        </li>
        <li>
          Pubertät
        </li>
        <li>
          Identität / Identitätsfindung
        </li>
        <li>
          Sexuelle Orientierung
        </li>
      </ul>

      <p>
        Ich arbeite integrativ mit einer sexpositiven Haltung und lege Wert auf individuell zugeschnittene Herangehensweisen. Neben der systemischen Beratung integriere ich sowohl Methoden aus (der systemischen Sexualtherapie), aus der Hypnosystemik, wie auch spielerische Elemente aus dem Improtheater oder aus systemischen Aufstellungen.
      </p>

      <h3>Angebot &amp; Tarife</h3>

      <p>
        Beratungen für Einzelpersonen, Paare, Mehrpersonen-Settings/Konstellationen und Familien:
      </p>

      <dl>
        <dt>Einzelpersonen:</dt>
        <dd>150.- CHF/St.</dd>

        <dt>Paare:</dt>
        <dd>170.- CHF/St.</dd>

        <dt>Mehrpersonen / Familien:</dt>
        <dd>190.- CHF/St.</dd>
      </dl>

      <p>
        Die Kosten werden nicht von der Krankenkasse übernommen. Nach Absprache ist eine Anpassung entsprechend Ihren finanziellen Verhältnissen möglich.
      </p>

    </div>
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

