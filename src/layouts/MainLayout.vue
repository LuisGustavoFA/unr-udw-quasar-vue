<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <a @click="toHomePage" style="cursor: pointer"> O Brasileirasso </a>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <q-list>
        <q-item-label header> Links Essenciais </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Github Pessoal',
    caption: 'github.com/LuisGustavoFA',
    icon: 'person',
    link: 'https://github.com/LuisGustavoFA',
  },
  {
    title: 'Github do Projeto',
    caption: 'github.com/LuisGustavoFA/unr-udw-quasar-vue',
    icon: 'code',
    link: 'https://github.com/LuisGustavoFA/unr-udw-quasar-vue',
  },
]

export default {
  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },

  data() {
    return {
      linksList,
    }
  },

  methods: {
    toHomePage() {
      this.$router.push('/')
    },
  },
}
</script>
