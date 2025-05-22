<template>
  <q-page class="flex flex-center">
    <FormTime />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FormTime from 'src/components/FormTime.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { FormTime },
})
</script>
