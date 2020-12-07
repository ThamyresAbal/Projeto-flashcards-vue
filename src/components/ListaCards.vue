<template>
  <b-row>
    <h1>{{titulo}}</h1>
    <hr>
    <b-row>
    <b-row class="novo">
      <b-button href="#" variant="primary">{{novo}}</b-button>
    </b-row>
    <b-form-input type="text" id="text-search" v-model="search"
      placeholder="Busca ..."
      v-on:keyup.enter="onEnter"
      >
      </b-form-input>
      
      <b-card-group deck>
      <b-card 
          v-for="flashcards in allCards"
            :key="flashcards.id"
            header-tag="header"
            :header="flashcards.categoria"
          >
      </b-card>
      
      </b-card-group>
    </b-row>
  </b-row>   
</template>


<script>
import {mapActions, mapGetters} from "vuex"

export default {
    name: "ListaCards",
    components:{
        
    },
    data(){
        return {
            titulo:"FLASHCARDS - VUE",
            novo:"NOVO CARD",
            search : "",
            result : null
            }
    },
    //todos os cards
    computed: mapGetters(["allCards"]),
    methods: {
        ...mapActions(["getAllCards"]),
    },
    created(){
        this.getAllCards();
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
.card{
    margin-top: 25px;
    border-color: #4fc08c;
    transition: transform .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 400px;
    height: 300px;
    padding: 2rem;
    border-radius: 10px;
    border-width: 5px;
}
.card:hover {
    transform: scale(1.1);
}
.buttom{
  align-content: center;
}
</style>