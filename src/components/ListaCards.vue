<template>
  <b-row class="container">
    <h1>{{titulo}}<hr></h1>
    <b-row>
      <router-link tag="p" :to="{ name: 'addNovoCard' }">
        <b-button variant="success">Novo Card</b-button>
      </router-link>
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
              <b-icon-trash2 @click="deleteCard(flashcards.id)"></b-icon-trash2>
              Deletar
            </b-button>
            <router-link tag="p" :to="{ name: 'detalheCard', params: { id: flashcards.id , flashcards: flashcards} }">
              <b-button type="button" variant="outline-primary">
               <b-icon icon="pencil-square" variant="info"></b-icon>
              Editar</b-button>
            </router-link>
          </div>
        </b-card>
      </b-card-group>
    </b-row>
  </b-row>   
</template>

<script>
import {mapActions, mapGetters} from "vuex"
//im/[port NovoCard from './NovoCard.vue'

export default {
    name: "ListaCards",
    search: '',
    components:{
      // NovoCard
    },
    
    data(){
        return {
          titulo:"FLASHCARDS - VUE",
          result : null,
          
        }
    },
    //todos os cards
    computed: mapGetters(["allCards"]),
    methods: {
        ...mapActions(["getAllCards"]),
        onEnter: function() {
          this.result = this.allCards.filter(x => x.titulo.includes(this.search))
          if(this.result.length == 0){
              this.result = this.allCards
          }
        }
    },
    created(){
        this.getAllCards();
        console.log(this.allCards)
    },
    toggleCard: function(card) {
      card.flipped = !card.flipped;
    },
    addNew: function() {
      if(!this.newFront || !this.newBack) {
        this.error = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        // set the field empty
        this.newFront = '';
        this.newBack = '';
        // Make the warning go away
        this.error= false;
      }
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
.container {
    max-width: 800px;
    justify-content: center;
}

.btn-group{
  position: relative;
  bottom: -40px !important;
  text-align: center;
  height: 60px;
}
.card{
    margin-top: 25px;
    border-color: #4fc08c;
    transition: transform .5s;
    text-align: center;
    width: 300px;
    height: 300px;
    padding-top: 20px;
    border-radius: 10px;
    border-width: 5px;
}
.card:hover {
    transform: scale(1.1);
}

 
  .flip-enter-active {
    transition: all 0.4s ease;
  }
  
  .flip-leave-active {
    display: none;
  }
  
  .flip-enter, .flip-leave {
    transform: rotateY(180deg);
    opacity: 0;
  
  }
  
  /* Form */
  .flashcard-form{
    position: relative;
  }
  
</style>