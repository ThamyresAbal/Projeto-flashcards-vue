<template>
  <b-row class="container">
    <Header/>
    <NovoCard/>
    <b-row>
      <b-card-group deck>
        <b-card 
          v-for="flashcards in allCards" 
            :key="flashcards.id"
            header-tag="header"
            :header="flashcards.titulo"
          >
          <h6>{{flashcards.rotulo}}</h6>
          <b-button variant="primary">{{flashcards.resposta}}</b-button>
          <hr>
          <div class="btn-group" role="group">
            <b-button type="button" variant="outline-danger"> 
              <b-icon-trash2 v-on:click="deletarCard(flashcards.id)"></b-icon-trash2>
              Deletar
            </b-button>
            <router-link tag="p" :to="{name: 'detalheCard', params: { id: flashcards.id , flashcards: flashcards} }">
              <b-button type="button" variant="outline-primary">
               <b-icon icon="pencil-square" variant="info"></b-icon>
              Detalhe</b-button>
            </router-link>
          </div>
        </b-card>
      </b-card-group>
    </b-row>
  </b-row>   
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import NovoCard from './NovoCard.vue'
import Header from './Header.vue'

export default {
  name: "ListaCards",
  search: '',

    components:{
      NovoCard,
      Header
    },
    
    data(){
        return {
          titulo:"FLASHCARDS - VUE",
          result : null
        }
    },
    //todos os cards
    computed: mapGetters(["allCards"]),  
    methods: {
        ...mapActions(["getAllCards", "deleteCard"]),
      deletarCard(id){
        this.deleteCard(id);
        window.setTimeout(() => {
          this.getAllCards();
        }, 1000);
      }
    },
    created(){
      this.getAllCards();
    }
}

</script>

<style>
h1 {
  font-family: 'Poppins', sans-serif;
  color: #996ce2;
  margin-top: 50px;
  text-align: center;
  margin-inline-start: 50px;
}
h6{
  border-color: #4fc08c;
  border: 2px;
  border-radius: 5px;
}
.container {
  max-width: 800px;
  justify-content: center;
}
.btn-group{
  position: relative;
  bottom: -5px !important;
  text-align: center;
  height: 38px;
}
.card{
  min-width: 15rem;
  height: 0 auto;
  margin-top: 25px;
  border-color: #4fc08c;
  transition: transform .5s;
  text-align: center;
  padding-top: 20px;
  border-radius: 10px;
  border-width: 5px;
}
.card:hover {
  transform: scale(1.1);
}
 
</style>