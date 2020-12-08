<template>
  <b-row class="container">
    <h1>{{nomePagina}}<hr></h1>
    <b-row>
      <router-link tag="p" :to="{ name: 'addNovoCard' }">
        <b-button variant="success">Novo Card</b-button>
      </router-link>
      <b-card-group deck>
        <b-card        
          v-for="flashcards in allCards"
            :key="flashcards.id"
            header-tag="header"
          >
        <vue-flip v-model="flipped">
          <template v-slot:front>
                  
                    <button v-on:click='this.flipped: false'> <b-icon icon="pencil-square" variant="info"></b-icon></button>
                    <p>virar</p>
                  
          </template>
          <template v-slot:back>
            
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
          </template>
        </vue-flip> 
      

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
          nomePagina:"FLASHCARDS - VUE",
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
card:hover {
  transform: scale(1.5);
  transition: ease 0.5s;
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
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    transform: scale(0.96);
  transition: ease 0.5s;
}
.card:hover {
    transform: scale(1.1);
}
.card:nth-child(-n+3) .card{
    background-color: #e65f51;
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