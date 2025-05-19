<template>
  <q-page class="flex flex-center">
    <CardAddTime />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CardAddTime from 'src/components/CardAddTime.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { CardAddTime },
})
</script>
