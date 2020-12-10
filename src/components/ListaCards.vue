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
          <h6>{{ flashcards.rotulo }}</h6>
          <transition 
          :key="flashcards.id"
          name="fade">
            <p v-if="show">{{ flashcards.resposta }}</p>
          </transition>
            <b-button v-on:click="show = !show" variant="primary">Resposta</b-button>
            <hr />
            <div class="configurarBtn">
            <b-button class="btn" v-on:click="deletarCard(flashcards.id)"  type="button" variant="outline-danger">
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
            </div>
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
    percorrerCadaCard(){
      
    }
  },
  created() {
    this.getAllCards();
  },
};
</script>

<style scope>
h6 {
  border-color: #4fc08c;
  border: 2px;
  border-radius: 5px;
}
.containerLista {
  position: relative;
  justify-content: center;
  
}
.configurarBtn{
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: space-between;
}
.btn{
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  height: 35px;
  padding-top: 0;
  width: 50% ;
}
.btnAzul{
  width: 80px !important;
  padding-top: 0;
}
.card {
  min-width: 13rem;
  max-width: 13rem;
  height:300px;
  margin-top: 25px;
  border-color: #4fc08c;
  transition: transform 0.5s;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 0px;
  border-radius: 10px;
  border-width: 5px;
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
