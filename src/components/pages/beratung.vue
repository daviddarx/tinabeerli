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
        class="content__group"
        v-for="item in beratung.content"
        v-bind:key="item.title"
      >
        <div
          v-if="item.textcontent"
          v-html="getHTMLfromMD(item.textcontent)"
        >
        </div>
        <dl
          v-if="item.listcontent"
        >
          <template
            v-for="list in item.listcontent"
          >
            <dt
              v-bind:key="list.definitionlist.title"
              v-html="list.definitionlist.title"
            >
            </dt>
            <dd
              v-bind:key="list.definitionlist.desc"
              v-html="getHTMLfromMD(list.definitionlist.desc)"
            >
            </dd>
          </template>
        </dl>
      </div>
    </div>
    <background-decoration
      ref="bgDeco"
      v-bind:image1URL="'/images/faden/faden_02_1.jpg'"
      v-bind:image2URL="'/images/faden/faden_02_2.jpg'"
    >
    </background-decoration>
  </div>
</template>

<script>
  import Vue from "vue";
  import * as beratungDE from '../../../content/beratung_de/beratung_de.json';
  import * as beratungFR from '../../../content/beratung_fr/beratung_fr.json';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';
  import BackgroundDecoration from '../background-decoration.vue';
  import { i18n } from "../../index.js";

  export default Vue.extend({
    components: {
      'background-decoration': BackgroundDecoration
    },
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        beratung: (i18n.locale =='de') ? beratungDE : beratungFR,
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);
    },
    beforeDestroy () {
      this.$refs.bgDeco.destroy();
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

