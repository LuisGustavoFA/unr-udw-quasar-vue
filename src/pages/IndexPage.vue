<template>
  <q-page class="flex flex-center">
    <CardTime />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CardTime from 'src/components/CardTime.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { CardTime },
})
</script>
