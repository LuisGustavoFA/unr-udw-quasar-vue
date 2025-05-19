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

    <q-card class="q-pa-lg meuCard addCard" @click="addTime">
      <span class="text-h4">
        Adicionar Time
        <q-separator style="background-color: black" />
        <q-icon class="addCard_icon" name="sports_soccer" />
        <q-icon class="addCard_icon" name="add" />
      </span>
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
      this.times = [
        {
          nome: 'Internacional',
          jogadores: ["Andrés D'Alessandro", 'Alan Patrick', 'Enner Valencia', 'Vitão'],
          corPrimaria: 'lightcoral',
          corSecundaria: 'red',
        },
        {
          nome: 'Grêmio',
          jogadores: ['Luis Suárez', 'Cristaldo', 'Geromel', 'Kannemann'],
          corPrimaria: 'lightblue',
          corSecundaria: 'blue',
        },
        {
          nome: 'Flamengo',
          jogadores: ['Gabigol', 'Arrascaeta', 'Everton Ribeiro', 'Bruno Henrique'],
          corPrimaria: 'crimson',
          corSecundaria: 'black',
        },
        {
          nome: 'Palmeiras',
          jogadores: ['Endrick', 'Raphael Veiga', 'Gustavo Gómez', 'Murilo'],
          corPrimaria: 'lightgreen',
          corSecundaria: 'darkgreen',
        },
        {
          nome: 'Corinthians',
          jogadores: ['Cássio', 'Renato Augusto', 'Fagner', 'Yuri Alberto'],
          corPrimaria: 'white',
          corSecundaria: 'black',
        },
        {
          nome: 'São Paulo',
          jogadores: ['Calleri', 'Luciano', 'Rafael', 'Rodrigo Nestor'],
          corPrimaria: 'lightgray',
          corSecundaria: 'red',
        },
        {
          nome: 'Atlético Mineiro',
          jogadores: ['Hulk', 'Paulinho', 'Everson', 'Arana'],
          corPrimaria: 'silver',
          corSecundaria: 'black',
        },
      ]

      const raw = this.$route.query.data
      if (raw) {
        const temp = JSON.parse(raw)
        this.times.push(temp)
      }
    }, 500)
  },
  methods: {
    addTime() {
      this.$router.push('/adicionar-time')
    },
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
}
</style>
