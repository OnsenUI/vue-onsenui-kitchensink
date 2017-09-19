<template>
  <v-ons-page :style="swipePosition">
    <custom-toolbar :style="swipeTheme">
      {{ title }}
      <v-ons-toolbar-button slot="right" @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </custom-toolbar>

    <v-ons-tabbar position="auto" modifier="autogrow"
      :swipeable="md()"
      :on-swipe="md() ? onSwipe : null"
      :animation="!md() && 'none'"
      :tabbar-style="swipeTheme"
      :tabs="tabs"
      :index.sync="index"
    ></v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Camera from './pages/Camera.vue';
import Home from './pages/Home.vue';
import Forms from './pages/Forms.vue';
import Animations from './pages/Animations.vue';

// Just a linear interpolation formula
const lerp = (x0, x1, t) => parseInt((1 - t) * x0 + t * x1, 10);
// RGB colors
const red = [231, 55, 47];
const green = [0, 150, 136];
const purple = [103, 58, 183];

export default {
  data () {
    return {
      colors: red,
      animationOptions: {},
      topPosition: 0,
      tabs: [
        {
          title: 'Camera',
          icon: 'md-camera',
          page: Camera,
          theme: red,
          style: { maxWidth: '50px' },
          top: -105 // Toolbar + Tabbar heights
        },
        {
          label: 'Home',
          icon: this.md() ? null : 'ion-home',
          page: Home,
          theme: red
        },
        {
          label: 'Forms',
          icon: this.md() ? null : 'ion-edit',
          page: Forms,
          theme: green
        },
        {
          label: 'Anim',
          icon: this.md() ? null : 'ion-film-marker',
          page: Animations,
          theme: purple
        }
      ]
    };
  },

  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    },
    onSwipe(index, animationOptions) {
      // Apply the same transition as ons-tabbar
      this.animationOptions = animationOptions;

      // Interpolate colors and top position
      const a = Math.floor(index), b = Math.ceil(index), ratio = index % 1;
      this.colors = this.colors.map((c, i) => lerp(this.tabs[a].theme[i], this.tabs[b].theme[i], ratio));
      this.topPosition = lerp(this.tabs[a].top || 0, this.tabs[b].top || 0, ratio);
    },
  },

  computed: {
    index: {
      get() {
        return this.$store.state.tabbar.index;
      },
      set(newValue) {
        this.$store.commit('tabbar/set', newValue)
      }
    },
    title() {
      return this.md() ? 'Onsen UI' : this.tabs[this.index].title || this.tabs[this.index].label;
    },
    swipeTheme() {
      return this.md() && {
        backgroundColor: `rgb(${this.colors.join(',')})`,
        transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
      }
    },
    swipePosition() {
      return this.md() && {
        top: this.topPosition + 'px',
        transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
      }
    }
  }
};
</script>
