<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>

    <v-ons-pull-hook
      :action="onAction"
      :fixed-content="md"
      :height="md ? 84 : 64"
      :on-pull="md && onPull || null"
      @changestate="state = $event.state"
    >

      <!-- Show this on iOS -->
      <v-ons-icon v-if="!md"
        size="22px"
        class="pull-hook-spinner"
        :icon="state === 'action' ? 'fa-spinner' : 'fa-arrow-down'"
        :rotate="state === 'preaction' && 180"
        :spin="state === 'action'"
      ></v-ons-icon>

      <!-- Show this on Material Design -->
      <div v-else class="pull-hook-progress">
        <v-ons-progress-circular
          :value="ratio * 100"
          :indeterminate="state === 'action'"
          :style="{ transform: `rotate(${ratio}turn)` }"
        ></v-ons-progress-circular>
      </div>

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
      kittens: this.getRandomData(),
      ratio: 0
    };
  },

  methods: {
    onPull(ratio) {
      this.ratio = ratio;
    },
    onAction(done) {
      setTimeout(() => {
        this.kittens = [...this.kittens, this.getRandomKitten()];
        done();
      }, 1500);
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

<style>
.pull-hook-spinner {
  color: #666;
  transition: transform .25s ease-in-out;
}

.pull-hook-progress {
  background-color: white;
  width: 32px;
  height: 32px;
  margin: 30px auto 0;
  border-radius: 100%;
  position: relative;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  display: inline-block;
  line-height: 0px;
}

.pull-hook-progress .progress-circular {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 4px;
  left: 4px;
}

.pull-hook-progress .progress-circular__primary {
  transition: stroke-dashoffset 0s;
}
</style>
