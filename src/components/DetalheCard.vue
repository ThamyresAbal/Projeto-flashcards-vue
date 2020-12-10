<template>
  <b-row>
    <Header />

    <b-row class="container">
      <h3>{{ subtitulo }}</h3>
      <ul>
        <li><b>Texto:</b> {{ flashcards.titulo }}</li>
        <li><b>Resposta:</b> {{ flashcards.resposta }}</li>
        <li><b>Categoria:</b> {{ flashcards.rotulo }}</li>
      </ul>
    </b-row>
    <router-link
      tag="p"
      :to="{
        name: 'editarCard',
        params: { id: flashcards.id, flashcards: flashcards },
      }"
    >
      <b-button variant="outline-primary">
        <b-icon icon="pencil-square" variant="info"></b-icon>
        Editar</b-button
      >
    </router-link>
  </b-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "./Header.vue";

export default {
  name: "DetalheCard",

  computed: mapGetters(["allCards"]),
  components: {
    Header,
  },
  data() {
    return {
      nomePagina: "FLASHCARDS - VUE",
      subtitulo: "Detalhe",
      flashcards: this.$route.params.flashcards,
    };
  },
  methods: {
    ...mapActions(["getAllCards"]),
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.flashcards));
    },
  },
};
</script>

<style >
li {
  font-size: 1.1em;
  text-decoration: none;
  text-align: left;
}
.container {
   position: relative;
  justify-content: center;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
