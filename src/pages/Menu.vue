<template>
  <v-ons-page modifier="menu">
    <div class="profile-pic">
      <img src="../assets/vue-onsenui.png">
    </div>

    <v-ons-list modifier="menu">
      <v-ons-list-header modifier="menu">Access</v-ons-list-header>
      <v-ons-list-item v-for="(item, index) in access" :key="item.title"
        modifier="menu chevron"
        @click="loadView(index)"
      >
        <div class="left">
          <v-ons-icon fixed-width class="list-item__icon" :icon="item.icon"></v-ons-icon>
        </div>
        <div class="center">
          {{ item.title }}
        </div>
      </v-ons-list-item>

      <v-ons-list-header modifier="menu">Links</v-ons-list-header>
      <v-ons-list-item v-for="item in links" :key="item.title"
        modifier="menu"
        @click="loadLink(item.url)"
      >
        <div class="left">
          <v-ons-icon fixed-width class="list-item__icon" :icon="item.icon"></v-ons-icon>
        </div>
        <div class="center">
          {{ item.title }}
        </div>
        <div class="right">
          <v-ons-icon icon="fa-external-link"></v-ons-icon>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  props: ['toggleMenu', 'setIndex'],

  methods: {
    loadView(index) {
      this.setIndex(index);
      this.toggleMenu();
    },
    loadLink(url) {
      window.open(url, '_blank');
    }
  },
  data() {
    return {
      links: [
        {
          title: 'Docs',
          icon: 'ion-document-text',
          url: 'https://onsen.io/v2/docs/guide/vue/'
        },
        {
          title: 'Github',
          icon: 'ion-social-github',
          url: 'https://github.com/OnsenUI/OnsenUI'
        },
        {
          title: 'Code',
          icon: 'ion-code',
          url: 'https://github.com/frandiox/vue-onsenui-kitchensink'
        },
        {
          title: 'Forum',
          icon: 'ion-chatboxes',
          url: 'https://community.onsen.io/'
        },
        {
          title: 'Twitter',
          icon: 'ion-social-twitter',
          url: 'https://twitter.com/Onsen_UI'
        }
      ],
      access: [
        {
          title: 'Home',
          icon: 'ion-home, material:md-home'
        },
        {
          title: 'Forms',
          icon: 'ion-edit, material:md-edit'
        },
        {
          title: 'Animations',
          icon: 'ion-film-marker, material: md-movie-alt'
        }
      ]
    };
  }
};
</script>

<style scoped>
.profile-pic {
  width: 200px;
  background-color: #eee;
  margin: 50px auto 10px;
  border: 1px solid #666;
  border-radius: 4px;
}

.profile-pic > img {
  display: block;
  max-width: 100%;
}
</style>

<style>
/* 'menu' modifier */
.page--menu__background {
  background-color: #333;
}

.page--menu__content {
  color: white;
  padding-right: 2px;
}

.toolbar--menu__center {
  color: #fff;
}

.list--menu,
.list-header--menu {
  margin-top: 20px;
  background-color: transparent;
  background-image: none !important;
  border-top: 0 !important;
  color: #6c6c6c;
}

.list-item--menu {
  background-color: transparent;
  background-image: none !important;
  border-color: transparent;
  color: #fff;
}
</style>
