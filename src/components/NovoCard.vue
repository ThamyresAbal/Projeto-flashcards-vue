<template>
  <b-row class="container">
    <!--<h1>{{nomePagina}}<hr></h1>
    <b-row> 
      <h3>Adicionar Card</h3>
      !-->
      <div class="detalhe">
        <b-form inline>
          <label class="sr-only" for="inline-form-input">Texto</label>
          <b-form-input
            id="inline-form-input-name"
            v-model="Card.titulo"
            placeholder="Insira o título do card"
            required
          ></b-form-input>

          <label class="sr-only" for="inline-form-input">Resposta</label>
            <b-form-input id="inline-form-input" 
            v-model="Card.resposta"
            placeholder="Insira a resposta"
            required
            ></b-form-input>

          <label class="sr-only" for="inline-form-input">Categoria</label>
            <b-form-select id="inline-form-input" 
            v-model="Card.rotulo"
            :options="categorias"
            required></b-form-select>
        </b-form>
        <b-button variant="outline-primary" @click="criarCard()">Salvar</b-button>
      </div>
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
      ...mapActions(["addCard", "getAllCards"]),
      criarCard(){
        this.addCard(this.Card)
        window.setTimeout(() => {
          this.getAllCards();
        }, 1000);
        alert('Adicionado com sucesso!')
      }
    }
}
</script>

<style>

</style>