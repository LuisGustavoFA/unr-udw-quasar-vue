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

        <EssentialLink v-for="route in linksList" :key="route.title" v-bind="route" />
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
    title: 'Ver Times',
    caption: 'Visualizar todos os times',
    icon: 'sports_soccer',
    route: "/"
  },
  {
    title: 'Novo Time',
    caption: 'Adicionar novo time',
    icon: 'add',
    route: "/adicionar-time"
  }
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
