<template>
    <b-row class="container">
    <Header/>
        <div class="detalhe">
        <b-form>
            <b-form-group
                id="input-group-1"
                label="Texto:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="Card.titulo"
                type="text"
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
                type="text"
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

            <b-button href="#" v-on:click="editarUmCard()" block variant="outline-primary">Salvar</b-button>
           
        </b-form>
        </div>
    </b-row>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import Header from './Header.vue'

export default {
    name: 'EditarCard',    
    
    computed: mapGetters(["allCards"]),
    components:{
      Header
    },
    data(){
        return{
            nomePagina:"FLASHCARDS - VUE",
             subtitulo: "Editar",
            flashcards:this.$route.params.flashcards,
            categorias: ['T.I.' , 'História', 'Geografia', 'Matemática','Programação' ],
        Card:{
            id: this.$route.params.id,
            titulo: '',
            resposta: '',
            rotulo: ''
        }
        }
    }, 
    methods:{
        ...mapActions(["editCard"]),
        editarUmCard() {
            this.editCard(this.Card);
            window.setTimeout(() => {
                this.$router.push('/');
            }, 1000);
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