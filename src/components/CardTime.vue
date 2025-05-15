<template>
  <q-card class="q-pa-lg meuCard" v-for="time in times" v-bind:key="time">
    <q-card-title>
      <span class="text-h4" v-if="time != null">
        <q-icon name="sports_soccer" style="color: blue;" /> {{ time.nome }}
      </span>
      <span class="text-h4" v-if="time == null">
        <q-skeleton type="rect" />
      </span>
    </q-card-title>

    <q-separator/>

    <q-card-section v-if="time != null">
      <span class="text-h6" v-for="jogador in time.jogadores" v-bind:key="jogador">{{ jogador }}<br/></span>
    </q-card-section>

    <q-card-section v-if="time == null">
      <q-skeleton type="text" /><br />
      <q-skeleton type="text" /><br />
      <q-skeleton type="text" /><br />
      <q-skeleton type="text" /><br />
      <q-skeleton type="text" /><br />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CardTime',
  data() {
    return {
      times: null,
    }
  },
  mounted() {
    setTimeout(() => {
      this.times = [{
        nome: 'Internacional',
        jogadores: ['Neymar', 'Fallen', 'Cleber', "Juca Meia Noite"],
      },
      {
        nome: 'Gremio',
        jogadores: ['Lucas', 'Mirage', 'Blabal'],
      }]
    }, 3000)
  },
}
</script>

<style>
.meuCard {
  min-width: 350px;
  min-height: 300px;
  background-color: lightblue;
  margin: 16px;
}
</style>
