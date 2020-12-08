<template>
    <b-row class="container">
        <h1>{{nomePagina}}<hr></h1>
        <b-row> 
        <hr>
        <h3>Editar</h3>
        <div class="detalhe">
            <b-form @submit="onSubmit">
                <b-form-group
                id="input-group-1"
                label="Texto:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="Card.titulo"
                type="name"
                required
                placeholder="Digite aqui o texto do flash card"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Resposta:"
                label-for="input-1"
            >
             <b-form-input
                id="input-1"
                v-model="Card.resposta"
                type="name"
                required
                placeholder="Digite aqui a resposta do flashcard"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Categoria" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="Card.rotulo"
                :options="categorias"
                required
                ></b-form-select>
            </b-form-group>

            <b-button type="submit" variant="outline-primary"><a @click=criar() $router.lista(-1)>Salvar</a></b-button>
           
            </b-form>
        </div>
    </b-row>
  </b-row>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
    name: 'DetalheCard',    
    
    computed: mapGetters(["allCards"]),
    data(){
        return{
            nomePagina:"FLASHCARDS - VUE",
            flashcards:this.$route.params.Card,
            categorias: ['T.I.' , 'História', 'Geografia', 'Matemática','Programação' ],
        Card:{
            id: '',
            titulo: '',
            resposta: '',
            rotulo: ''
        }
        }
    }, 
    methods:{
        ...mapActions(["getAllCards"]),
        criar(){
        this.Card.push(this.flashcards)
    },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.Card))
      },
    }, 
   
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