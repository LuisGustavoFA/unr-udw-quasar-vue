<template>
  <q-page class="flex flex-center">
    <FormTime @cancelar="toHome()" @salvar="onSalvar"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FormTime from 'src/components/FormTime.vue';
import { salvarTime } from 'src/services/timesServices.js';

export default defineComponent({
  name: 'IndexPage',
  components: { FormTime },
  methods: {
    toHome() {
      this.$router.push('/');
    },
    onSalvar(objTime) {
      salvarTime(objTime);
    },
  }
})
</script>
