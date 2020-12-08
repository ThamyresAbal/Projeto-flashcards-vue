<template>
<b-row>
    <b-row><h2>Edição</h2></b-row>
        <b-row>
            <b-form @submit="onSubmit">
                <b-form-group
                id="input-group-1"
                label="Texto:"
                label-for="input-1"
                description="Digite aqui o texto do flash card"
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
                label="username:"
                label-for="input-1"
                description="We'll never share your username with anyone else."
            >
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="username:"
                label-for="input-1"
                description="We'll never share your username with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="Card.resposta"
                type="email"
                required
                placeholder="Enter email"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Company Name:" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="Card.rotulo"
                :options="companies"
                required
                ></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
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
        ...mapActions(["getAllCards"]),
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.flashcards))
      },
    }, 
    created(){
        this.flashcards.push(this.flashcards.id)
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