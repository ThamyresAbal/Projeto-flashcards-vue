<template>
  <b-row>
        <h1>{{titulo}}</h1>
        <hr>
        <h3>Editar</h3>
      <b-row>
      </b-row>
      <b-row>
        <b-col>
           <div>
               <span><b>Texto</b></span>
               <span>{{flashcards.titulo}}</span>
           </div>

           <div>
               <span><b>Resposta:</b></span>
               <span>{{flashcards.resposta}}</span>
           </div>

           <div>
               <span><b>Categoria:</b></span>
               <span>{{flashcards.rotulo}}</span>
           </div>
        </b-col>
        <router-link tag="p" :to="{ name: 'editarCard', params: { id: flashcards.id , flashcards: flashcards} }">
            <b-button variant="outline-primary">
            <b-icon icon="pencil-square" variant="info"></b-icon>
            Editar</b-button>
         </router-link>
      </b-row>
  </b-row>
</template>


<script>
import {mapActions, mapGetters} from "vuex"

export default {
    name: 'DetalheCard',
    titulo:"FLASHCARDS - VUE",
    
    computed: mapGetters(["allCards"]),
    data(){
        return{
            flashcards:this.$route.params.flashcards,
         }
    }, 
    methods:{
        ...mapActions(["getAllCards"]),
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.flashcards))
      },
    }
}
</script>

<style>
h1, h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    letter-spacing: .2em;
    color: #996ce2;
}
</style>