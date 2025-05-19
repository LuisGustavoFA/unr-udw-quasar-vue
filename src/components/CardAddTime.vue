<template>
  <div class="q-pa-md" style="min-width: 360px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Nome do Time *"
        :rules="[(val) => !!val || 'O nome é obrigatório']"
      />

      <q-input
        filled
        type="number"
        v-model.number="numJogadores"
        label="Número de Jogadores *"
        :rules="[
          (val) => !!val || 'Número obrigratório',
          (val) => val <= 4 || 'Máximo de 4 jogadores',
        ]"
      />

      <q-input
        v-for="jog in Math.min(numJogadores, 4)"
        v-bind:key="jog"
        filled
        v-model="nameJogadores[jog - 1]"
        label="Nome do jogador *"
        :rules="[(val) => !!val || 'O nome é obrigatório']"
      />

      <q-input
        filled
        v-model="corPrimaria"
        label="Cor Primária *"
        :rules="[(val) => !!val || 'A cor é obrigatória']"
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-color v-model="corPrimaria" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input
        filled
        v-model="corSecundaria"
        label="Cor Secundária *"
        :rules="[(val) => !!val || 'A cor é obrigatória']"
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-color v-model="corSecundaria" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <div>
        <q-btn label="Adicionar" type="submit" color="primary" />
        <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      numJogadores: '',
      nameJogadores: [],
      corPrimaria: '',
      corSecundaria: '',
    }
  },

  methods: {
    onSubmit() {
      var temp = {
        nome: this.name,
        jogadores: this.nameJogadores,
        corPrimaria: this.corPrimaria,
        corSecundaria: this.corSecundaria,
      }

      this.$axios
        .post('http://localhost:3000/times', temp)
        .then((response) => {
          console.log(response)
          this.$router.push('/')
        })
        .catch((error) => {
          console.error('Erro ao adicionar time, verifique se a API está no ar. Erro:', error)
        })
    },
  },
}
</script>

<style></style>
