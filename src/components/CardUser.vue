<template>
  prop: {{ user }}<br>
  data: {{ usuario }}
  <q-input v-model="usuario.username"/>
  <q-btn label="reset" @click="Reset"/>
</template>

<script>
export default {
  name: 'CardUser',
  props: {
    user: Object
  },
  data() {
    return {
      usuario: {id: 0, username: "aaa"}
    }
  },
  mounted() {
    this.Reset()
  },
  methods: {
    Reset() {
      this.usuario = JSON.stringify(JSON.parse(this.user));
    }
  }
}
</script>

<style>
</style>
