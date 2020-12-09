<template>
  <b-row class="container">
      <Header/>
    <b-row> 
      <h3>Detalhe</h3>
      <div class="detalhe">
        <ul>
          <li><b>Texto:</b> {{flashcards.titulo}}</li>
          <li><b>Resposta:</b> {{flashcards.resposta}}</li>
          <li><b>Categoria:</b> {{flashcards.rotulo}}</li>
        </ul>
        <router-link tag="p" :to="{ name: 'editarCard', params: { id: flashcards.id , flashcards: flashcards} }">
            <b-button variant="outline-primary">
            <b-icon icon="pencil-square" variant="info"></b-icon>
            Editar</b-button>
        </router-link>
      </div>
      </b-row>
    </b-row>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import Header from './Header.vue'

export default {
    name: 'DetalheCard',
    
    computed: mapGetters(["allCards"]),
    components:{
      Header
    },
    data(){
        return{
        
            nomePagina:"FLASHCARDS - VUE",
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

li{
  font-size: 1.1em;
  text-decoration: none;
}
.detalhe{
  margin-top: 50px;
  display: absolute;
  text-decoration: none;
}

</style>