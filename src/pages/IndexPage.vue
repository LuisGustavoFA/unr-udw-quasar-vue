<template>
  <q-page class="flex flex-center">
    <h5>user: {{ user }}</h5>
    <CardUser :user="{id: 0, username: 'Nome Inicial'}"/>
    <h2>{{ dadoLocal }}</h2>
    <q-btn label="logar" color="primary" @click="logar"/>
    <q-btn label="trocar" @click="trocar"/>
    <CardTime />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CardTime from 'src/components/CardTime.vue'
import { appStore } from 'src/stores/example-store.js'
import CardUser from 'src/components/CardUser.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { CardTime, CardUser },
  data() {
    return {
      dadoLocal: appStore.dado,
      user: appStore.user,
    }
  },
  methods: {
    trocar() {
      appStore.dado = "Olá Mundo!"
      this.dadoLocal = appStore.dado
    },
    logar() {
      appStore.setUser({id: 1, username: "Luis"})
      this.user = appStore.user
    }
  }
})
</script>
