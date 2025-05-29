<template>
  <q-page class="flex flex-center">
    user: {{ user }}
    <h2>{{ dadoLocal }}</h2>
    <q-btn label="logar" color="primary" @click="logar"/>
    <q-btn label="trocar" @click="trocar"/>
    <FormTime @cancelar="toHome()" @salvar="onSalvar"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FormTime from 'src/components/FormTime.vue';
import { salvarTime } from 'src/services/timesServices.js';
import { appStore } from 'src/stores/example-store.js';

export default defineComponent({
  name: 'IndexPage',
  components: { FormTime },
  data() {
    return {
      dadoLocal: appStore.dado,
      user: appStore.user
    }
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },
    onSalvar(objTime) {
      salvarTime(objTime);
    },
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
