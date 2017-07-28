<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>

    <v-ons-pull-hook
      threshold-height="120px"
      :action="onAction"
      @changestate="state = $event.state"
    >

      <v-ons-icon
        size="22px"
        class="pull-hook-content"
        :icon="state === 'action' ? 'fa-spinner' : 'fa-arrow-down'"
        :rotate="state === 'preaction' && 180"
        :spin="state === 'action'"
      ></v-ons-icon>

    </v-ons-pull-hook>

    <v-ons-list>
      <v-ons-list-header>Pull to refresh</v-ons-list-header>
      <v-ons-list-item v-for="(kitten, index) in kittens" :key="kitten.name + index">
        <div class="left">
          <img class="list-item__thumbnail" :src="kitten.url">
        </div>
        <div class="center">{{ kitten.name }}</div>
      </v-ons-list-item>
    </v-ons-list>

  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      state: 'initial',
      kittens: this.getRandomData()
    };
  },

  methods: {
    onAction(done) {
      setTimeout(() => {
        this.kittens = [...this.kittens, this.getRandomKitten()];
        done();
      }, 400);
    },
    getRandomName() {
      const names = ['Oscar', 'Max', 'Tiger', 'Sam', 'Misty', 'Simba', 'Coco', 'Chloe', 'Lucy', 'Missy'];

      return names[Math.floor(Math.random() * names.length)];
    },
    getRandomUrl() {
      const width = 40 + Math.floor(20 * Math.random());
      const height = 40 + Math.floor(20 * Math.random());

      return `https://placekitten.com/g/${width}/${height}`;
    },
    getRandomKitten() {
      return {
        name: this.getRandomName(),
        url: this.getRandomUrl()
      };
    },
    getRandomData() {
      const data = [];

      for (let i = 0; i < 8; i++) {
        data.push(this.getRandomKitten());
      }

      return data;
    }
  }
};
</script>

<style scoped>
.pull-hook-content {
  color: #666;
  transition: transform .25s ease-in-out;
}
</style>
