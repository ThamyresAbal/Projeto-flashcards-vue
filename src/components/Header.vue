<template>
  <b-row>
    <h1>{{nomePagina}}<hr></h1>
    <b-row> 
      <h3>{{subtitulo}}</h3>
    </b-row>
  </b-row>
</template>

<script>
export default {
    name: 'Header',
    data(){
      return { 
        nomePagina:"FLASHCARDS - VUE",
        subtitulo: ""
      }
    },
    methods:{
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
</style>