<template>
  <v-ons-page>
    <p class="intro">
      This is a kitchen sink example that shows off the Vue bindings for Onsen UI.<br><br>
    </p>

      <v-ons-card v-for="page of pages" :key="page.label"
        @click="push(page.component, page.label)"
      >
        <div class="title">{{ page.label }}</div>
        <div class="content">{{ page.desc }}</div>
      </v-ons-card>
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
      pages: [
        {
          component: PullHook,
          label: 'Pull Hook',
          desc: 'Simple "pull to refresh" functionality to update data.'
        },
        {
          component: Dialogs,
          label: 'Dialogs',
          desc: 'Components and utility methods to display many types of dialogs.'
        },
        {
          component: Buttons,
          label: 'Buttons',
          desc: 'Different styles for buttons, floating action buttons and speed dials.'
        },
        {
          component: Carousel,
          label: 'Carousel',
          desc: 'Customizable carousel that can be optionally fullscreen.'
        },
        {
          component: InfiniteScroll,
          label: 'Infinite Scroll',
          desc: 'Two types of infinite lists: "Load More" and "Lazy Repeat".'
        },
        {
          component: Progress,
          label: 'Progress',
          desc: 'Linear progress, circular progress and spinners.'
        }
      ]
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

ons-card {
  cursor: pointer;
  color: #333;
}

.card__title, .card--material__title {
  font-size: 20px;
}
</style>
