<template>
  <b-row>
    <h1>{{titulo}}</h1>
    <hr>
    <novo-card />
    <b-row>
    <b-row class="novo">
    <!--
      <router-link tag="p" :to="{ name: 'NovoCard', params: { id: flashcards.id } }">
        <b-button variant="success">Novo Card</b-button>
      </router-link>
      !-->
    </b-row>
    
      <b-card-group deck>
      
        <b-card 
          v-for="flashcards in allCards"
            :key="flashcards.id"
            header-tag="header"
            :header="flashcards.titulo"
          >
          <p>flashcards.rotulo</p>
          <b-button href="#" variant="primary">{{flashcards.resposta}}</b-button>
          <hr>
          <b-row class="botoes">
            <b-button variant="outline-danger"> 
              <b-icon-trash2 @click="deleteCard(flashcards.id)"></b-icon-trash2>
              Deletar
            </b-button>
            <router-link tag="p" :to="{ name: 'detalheCard', params: { id: flashcards.id , flashcards: flashcards} }">
              <b-button variant="outline-primary">
               <b-icon icon="pencil-square" variant="info"></b-icon>
              Editar</b-button>
            </router-link>
          </b-row>
        </b-card>
      </b-card-group>
    </b-row>
  </b-row>   
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import NovoCard from './NovoCard.vue'

export default {
    name: "ListaCards",
    components:{
       NovoCard
    },
    
    data(){
        return {
            titulo:"FLASHCARDS - VUE",
            search : "",
            result : null
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
    font-weight: 500;
    letter-spacing: .2em;
    color: #996ce2;
}
.container {
    max-width: 800px;
    margin: 0 auto;
}
novo{
  margin-top: 25px;
  margin-bottom: 25px;
}
.botoes{
  display: inline-block;
  padding: 2rem;
  width: 200px;
}
.card{
    margin-top: 25px;
    border-color: #4fc08c;
    transition: transform .5s;
    text-align: center;
    width: 400px;
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