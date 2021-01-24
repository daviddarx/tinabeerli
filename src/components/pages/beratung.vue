
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
  </div>
</template>

<script>
  import Vue from "vue";
  import * as beratung from '../../../content/beratung/beratung.json';
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
      console.log(beratung);
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

