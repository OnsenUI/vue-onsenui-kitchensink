<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>

    <v-ons-carousel fullscreen swipeable auto-scroll overscrollable
      :index.sync="carouselIndex"
    >
      <v-ons-carousel-item v-for="(value, key) in items" :key="key"
        class="carousel-item"
        :style="{ backgroundColor: value }"
      >
        <div class="color-tag">{{key}}</div>
      </v-ons-carousel-item>
    </v-ons-carousel>

    <div class="dots">
      <span v-for="dotIndex in Object.keys(items).length" :key="dotIndex"
        @click="carouselIndex = dotIndex - 1"
      >
        {{ carouselIndex === dotIndex - 1 ? '\u25CF' : '\u25CB' }}
      </span>
    </div>

  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      carouselIndex: 0,
      items: {
        gray: 'gray',
        blue: '#085078',
        dark: '#373B44',
        orange: '#D38312'
      }
    };
  }
}
</script>

<style scoped>
.carousel-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.color-tag {
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
}

.dots {
  text-align: center;
  font-size: 30px;
  color: #fff;
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
}

.dots > span {
  cursor: pointer;
}
</style>
