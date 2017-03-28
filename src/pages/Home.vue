<template>
  <v-ons-page>
    <p class="intro">
      This is a kitchen sink example that shows off the Vue bindings for Onsen UI.<br><br>
    </p>

    <v-ons-list>
      <v-ons-list-header>
        Components
      </v-ons-list-header>
      <v-ons-list-item v-for="(page, key) of pages" :key="key"
        tappable
        modifier="chevron"
        @click="push(page, key)"
      >
        <div class="center">{{ key }}</div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
import PullHook from './PullHook.vue';
import Dialogs from './Dialogs.vue';
import Buttons from './Buttons.vue';
import Carousel from './Carousel.vue';
import InfiniteScroll from './InfiniteScroll.vue';
import Progress from './Progress.vue';

export default {
  props: ['pageStack'],

  data () {
    return {
      pages: {
        PullHook,
        Dialogs,
        Buttons,
        Carousel,
        InfiniteScroll,
        Progress
      }
    };
  },

  methods: {
    push(page, key) {
      this.pageStack.push({
        extends: page,
        data() {
          return {
            toolbarInfo: {
              backLabel: 'Home',
              title: key
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.intro {
  text-align: center;
  padding: 0 20px;
  margin-top: 40px;
}
</style>
