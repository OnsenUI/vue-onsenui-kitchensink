<template>
  <v-ons-navigator id="app" swipeable :page-stack="pageStack" :options="options">
    <component v-for="page in pageStack" :is="page"
      :page-stack="pageStack"
      :set-options="setOptions"
      :key="page.key"
    ></component>
  </v-ons-navigator>
</template>

<script>
import AppSplitter from './AppSplitter.vue';

export default {
  data() {
    return {
      pageStack: [AppSplitter],
      options:  {}
    };
  },
  methods: {
    setOptions(newOptions) {
      this.options = newOptions;
    }
  }
};
</script>
