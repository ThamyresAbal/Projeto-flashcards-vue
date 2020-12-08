<template>
  <b-row class="container">
    <h1>{{nomePagina}}<hr></h1>
    <b-row> 
      <h3>Adicionar Card</h3>
      <div class="detalhe">
        <b-form inline>
      <label class="sr-only" for="inline-form-input-name">Texto</label>
      <b-form-input
        id="inline-form-input-name"
        class="mb-4 mr-sm-4 mb-sm-0"
        v-model="titulo"
        placeholder="Insira o título do card"
        required
      ></b-form-input>

      <label class="sr-only" for="inline-form-input-name">Resposta</label>
        <b-form-input id="inline-form-input" 
        v-model="resposta"
        placeholder="Insira a resposta"
        required
        ></b-form-input>

      <label class="sr-only" for="inline-form-input-name">Categoria</label>
        <b-form-select id="inline-form-input" 
        v-model="rotulo"
        :options="categorias"
        required></b-form-select>
    </b-form>
      <b-button variant="outline-primary" @click="criarCard()">Salvar</b-button>
      </div>
      </b-row>
    </b-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name : 'NovoCard',
    data(){
      return { 
        nomePagina:"FLASHCARDS - VUE",
        categorias: ['T.I.' , 'História', 'Geografia', 'Matemática','Programação' ],
        Card:{
            titulo: '',
            resposta: '',
            rotulo: ''
        }
      }
    }, 
    methods:{
      ...mapActions(["getAllCards"]),
      criarCard(){
         let flashcards = {
           "id": '',
          "titulo": this.titulo,
          "resposta": this.resposta,
          "rotulo": this.rotulo,
        }
        this.addCard(flashcards)
        alert('Adicionado com sucesso!')
      }
    }
}
</script>

<style>

</style>