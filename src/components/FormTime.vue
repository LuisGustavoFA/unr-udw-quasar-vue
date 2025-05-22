<template>
  <q-card>
    <q-card-section>
  <q-input outlined label="Nome" v-model="time.nome" />
  <q-select outlined v-model="time.fed" :options="fedOptions" label="Federação"/>
  <q-select outlined multiple v-model="time.cat" :options="catOptions" label="Categorias"/>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn label="Cancelar" outline color="primary" to="/"></q-btn>
      <q-btn label="Salvar" :disabled="timeIncompleto()" color="primary" @click="onSalvar">
        <q-tooltip>
          {{ tooltipSalvar }}
        </q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { Notify } from 'quasar';
export default {
  emits: ["salvar", "cancelar"],
  data() {
    return {
      time: {
        id: null,
        nome: "",
        fed: "",
        cat: [],
      },
      tooltipSalvar: "",
      fedOptions: ["FGF", "FERJ", "FRS"],
      catOptions: ["sub-15", "sub-17", "sub-20"],
    }
  },

  methods: {
    cancelar() {
      this.$emit('cancelar');
    },
    onSalvar() {
      if (this.time.nome.length < 3) {
        Notify.create("Nome tem que ter no mínimo 3 caracteres.")
        return;
      };
      this.$emit('salvar', this.time);
    },
    timeIncompleto() {
      this.tooltipSalvar = "";
      if (this.time.nome.length < 3) {
        this.tooltipSalvar += "O nome do Time tem que ter no mínimo 3 caracteres"
      }
      if (this.time.fed == "") {
        if (this.tooltipSalvar != "") {
          this.tooltipSalvar += ", ";
        }
        this.tooltipSalvar += "Time precisa ter uma federação"
      }
      if (this.time.cat.length == 0) {
        if (this.tooltipSalvar != "") {
          this.tooltipSalvar += ", ";
        }
        this.tooltipSalvar += "Time precisa ter uma categoria"
      }
      if (this.tooltipSalvar == "") {
        this.tooltipSalvar = "Salvar time"
      }
      return this.time.nome.length < 3 || this.time.fed == "" || this.time.cat.length == 0;
    },
  },
}
</script>

<style></style>
