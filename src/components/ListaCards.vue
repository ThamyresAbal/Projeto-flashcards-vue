<template>
  <b-row class="containerLista">
    <Header />
    <NovoCard />
    <b-row>
    
      <b-card-group deck>
        <b-card
          v-for="flashcards in allCards"
          :key="flashcards.id"
          header-tag="header"
          :header="flashcards.titulo"
        >
          <b-card-sub-title>{{ flashcards.rotulo }}</b-card-sub-title>
          <hr />
          <div class="card-body-fixo">
          <b-card-body class="overflow-auto">
            <transition :key="flashcards.id" name="fadeIn"> </transition>
            
            <p v-if="show">{{ flashcards.resposta }}</p>
          </b-card-body>
          </div>
          <b-button class="btnResposta" v-on:click="show = !show" variant="primary"
            >Resposta</b-button
          >
          <hr />
          <b-card-footer>
            <b-button
              class="btnAzul"
              v-on:click="deletarCard(flashcards.id)"
              type="button"
              variant="outline-danger"
            >
              <b-icon-trash2></b-icon-trash2>
              Deletar
            </b-button>
            <router-link
              tag="p"
              :to="{
                name: 'detalheCard',
                params: { id: flashcards.id, flashcards: flashcards },
              }"
            >
              <b-button class="btnAzul" type="button" variant="outline-primary">
                <b-icon icon="pencil-square" variant="info"></b-icon>
                Detalhe</b-button
              >
            </router-link>
          </b-card-footer>
        </b-card>
      </b-card-group>
    </b-row>
  </b-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NovoCard from "./NovoCard.vue";
import Header from "./Header.vue";

export default {
  name: "ListaCards",
  search: "",

  components: {
    NovoCard,
    Header,
  },

  data() {
    return {
      titulo: "FLASHCARDS - VUE",
      show: false,
      result: null,
    };
  },
  //todos os cards
  computed: mapGetters(["allCards"]),
  methods: {
    ...mapActions(["getAllCards", "deleteCard"]),
    deletarCard(id) {
      this.deleteCard(id);
      window.setTimeout(() => {
        this.getAllCards();
      }, 1000);
    },
    percorrerCadaCard() {},
  },
  created() {
    this.getAllCards();
  },
};
</script>

<style scope>
.containerLista {
  position: relative;
  justify-content: center;
}
.card-subtitle {
  background-color: #4fc08c;
  color: #000 !important;
  margin: 5px;
}
.card-footer {
  width: 100%;
  align-items: bottom;
  display: flex;
  height: auto !important;
  position: static;
  padding: 0;
  margin-bottom: 0px !important;
  justify-content: center;
}
.btn {
  font-size: 11px;
  padding-left: 10px;
  padding-right: 10px;
  height: 35px;
  padding-top: 0;
}
.btnAzul {
  width: 80px !important;
  padding-top: 0;
}
hr {
  padding: 0;
  margin: 0;
}
.btnResposta {
  margin-bottom: 5px !important;
}
.card {
  min-width: 13rem;
  max-width: 13rem;
  max-height: 20rem;
  min-height: 20rem;
  margin-top: 10px;
  border-color: #4fc08c;
  transition: transform 0.5s;
  text-align: center;
  padding-top: 0px;
  border-radius: 10px;
  border-width: 5px;
  position: static;
}
.card-body , .overflow-auto{
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 3px;
  padding-right: 3px;
  height: 45%;
  width: 100% !important;
}
.overflow-auto{
  height: 100%;
}
.card-body-fixo{
  position: static;
   height: 50%;
}
.card-body p {
  font-size: 0.7em;
}
.card:hover {
  transform: scale(1.1);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
