<template>
  <b-row class="nomePagina">
    <h1>{{ nomePagina }}<hr></h1>
  </b-row>
</template>

<script>
  export default {
      name: 'Header',
      data(){
        return { 
          nomePagina:"FLASHCARDS - VUE",
        }
      },
      methods:{
      }
    }
</script>

<style>
  h1{
    font-family: 'Poppins', sans-serif;
    color: #996ce2;
    text-align: center;
    margin-top: 50px;
  }
  h3{
    text-align: left;
    font-family: 'Poppins', sans-serif;
    color: #996ce2;
  }
</style>