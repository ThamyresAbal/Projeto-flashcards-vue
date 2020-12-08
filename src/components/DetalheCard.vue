<template>
  <b-row class="container">
    <b-row>
        <h1>{{titulo}}</h1>
    </b-row>
        <b-row>
        <h3>Editar</h3>
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
        </b-row>
        <router-link tag="p" :to="{ name: 'editarCard', params: { id: flashcards.id , flashcards: flashcards} }">
            <b-button variant="outline-primary">
            <b-icon icon="pencil-square" variant="info"></b-icon>
            Editar</b-button>
         </router-link>
      
  </b-row>
</template>


<script>
import {mapActions, mapGetters} from "vuex"

export default {
    name: 'DetalheCard',
    
    computed: mapGetters(["allCards"]),
    data(){
        return{
            titulo:"FLASHCARDS - VUE",
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

<style scoped>

h1, h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    letter-spacing: .2em;
    color: #996ce2;
    display: block;
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
</style>