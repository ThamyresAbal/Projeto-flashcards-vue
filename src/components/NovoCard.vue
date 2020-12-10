<template>
  <div class="detalhe">
    <b-form @submit="onSubmit" inline>
      <b-form-group
        id="input-group-1"
        label="Texto: "
        label-for="input-1"
      >
        <b-form-input
          id="inline-form-input"
          v-model="Card.titulo"
          type="text"
          required
          placeholder="Insira o título do card"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
        id="input-group-1"
        label="Resposta: "
        label-for="input-1"
      >
        <b-form-input
          id="inline-form-input"
          v-model="Card.resposta"
          type="text"
          required
          placeholder="Insira a resposta do card"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Categoria: " label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="Card.rotulo"
          :options="categorias"
          required
        ></b-form-select>
      </b-form-group>
      <b-button variant="outline-primary" type="submit">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NovoCard",
  data() {
    return {
      nomePagina: "FLASHCARDS - VUE",
      categorias: ["T.I.", "História", "Geografia", "Matemática", "Programação"],
      Card: {
        titulo: "",
        resposta: "",
        rotulo: "",
      },
    };
  },
  methods: {
    ...mapActions(["addCard", "getAllCards"]),
    onSubmit() {
      this.addCard(this.Card);
      window.setTimeout(() => {
        this.getAllCards();
      }, 1000);
      alert("Adicionado com sucesso!");
    },
  },
};
</script>

<style >
.detalhe {
  width: 800px;
  margin-top: 0px;
}
form {
  margin-top: 20px;
  justify-content: space-around !important;
}
button {
  margin-top: 10px;
 
}
</style>
