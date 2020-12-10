<template>
  <b-row>
    <Header />
    <div class="container">
      <h3>{{ subtitulo }}</h3>
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Texto:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="Card.titulo"
            type="text"
            required
            placeholder="Digite aqui o texto do flash card"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Resposta:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="flashcards.resposta"
      value="flashcards.resposta"
            type="text"
            required
            placeholder="Digite aqui a resposta do flashcard"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Categoria" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="Card.rotulo"
            :options="categorias"
            required
          ></b-form-select>
        </b-form-group>
      </b-form>
    </div>
    <div class="grupoBtn">
        <b-button class="btnCancelar" @click="voltarInicio()" variant="outline-danger">
          Cancelar</b-button>

      <b-button
        href="#"
        class="btn"
        @click="editarUmCard()"
        variant="outline-primary"
        >Salvar
      </b-button>
    </div>
  </b-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "./Header.vue";

export default {
  name: "EditarCard",

  computed: mapGetters(["allCards"]),
  components: {
    Header,
  },
  data() {
    return {
      nomePagina: "FLASHCARDS - VUE",
      subtitulo: "Editar",
      flashcards: this.$route.params.flashcards,
      categorias: ["T.I.", "História", "Geografia", "Matemática", "Programação"],
      Card: {
        id: this.$route.params.id,
        titulo: "",
        resposta: "",
        rotulo: "",
      },
    };
  },
  methods: {
    ...mapActions(["editCard"]),
    onSubmit() {
      this.editCard(this.Card);
      this.voltarInicio()
    },
    voltarInicio(){
       window.setTimeout(() => {
        this.$router.push("/");
      }, 1000);
    }
  },
};
</script>

<style>
.grupoBtn {
  justify-content: space-between;
  position: relative;
  display: flex;
  width: 300px;
  padding-top: 10px;
}
.container {
  position: relative;
  justify-content: center;
  margin-left: 200px;
  margin-right: 200px;
}
.btnCancelar {
  margin-top: 0px;
}
.btn {
  width: 100px;
}
form {
  margin-top: 20px;
  justify-content: space-between;
}
</style>
