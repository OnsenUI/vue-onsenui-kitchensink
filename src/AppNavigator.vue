<template>
  <v-ons-navigator id="app" :page-stack="pageStack" :options="options">
    <component v-for="page in pageStack" :is="page" :key="page"
      :page-stack="pageStack"
      :set-options="setOptions"
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
