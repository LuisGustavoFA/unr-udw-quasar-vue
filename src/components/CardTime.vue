<template>
  <div class="carregado" v-if="times != null">
    <q-card
      class="q-pa-lg meuCard"
      v-for="time in times"
      :style="{ backgroundColor: time.corPrimaria }"
      v-bind:key="time"
    >
      <q-card-title>
        <span class="text-h4">
          <q-icon name="sports_soccer" :style="{ color: time.corSecundaria }" /> {{ time.nome }}
        </span>
      </q-card-title>

      <q-separator :style="{ backgroundColor: time.corSecundaria }" />

      <q-card-section>
        <span class="text-h6" v-for="jogador in time.jogadores" v-bind:key="jogador"
          >{{ jogador }}<br
        /></span>
      </q-card-section>
    </q-card>
  </div>

  <div v-if="times == null">
    <q-card class="q-pa-lg meuCard">
      <q-card-title>
        <span class="text-h4">
          <q-skeleton type="rect" />
        </span>
      </q-card-title>

      <q-separator />

      <q-card-section>
        <q-skeleton type="text" /><br />
        <q-skeleton type="text" /><br />
        <q-skeleton type="text" /><br />
        <q-skeleton type="text" /><br />
        <q-skeleton type="text" /><br />
      </q-card-section>
    </q-card>
  </div>
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
        id: 1,
        nome: 'Internacional',
        jogadores: ["Andrés D'Alessandro", 'Alan Patrick', 'Enner Valencia', 'Vitão'],
        corPrimaria: 'lightcoral',
        corSecundaria: 'red',
      },]
    }, 1000)
  },
}
</script>

<style lang="scss">
.meuCard {
  min-width: 350px;
  min-height: 300px;
  background-color: lightblue;
  margin: 16px;
}

.addCard {
  background-color: $primary;
  transition: 0.15s;
  text-align: center;
}

.addCard:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.addCard_icon {
  font-size: 8rem;
  margin-top: 15%;
}

.carregado {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
