<template>
  <b-row>
    <meu-card class="oi">
      <header>{{ tituloCard }}</header>
      <p>{{ resposta }}</p>
      <hr />
      <h6 class="edit">{{ categoria }}</h6>
      <b-button variant="primary">Resposta</b-button>
      <hr />
    </meu-card>
  </b-row>
</template>

<script>
  export default {
    name: "MeuCard",
    components: {},
    data() {
      return {
        tituloCard: "flashcard.titulo",
        resposta:"flashcard.resposta",
        categoria:"flashcard.rotulo",
        result: null,
      };
    },
  };
</script>

<style >


  .edit {
    border-color: #4fc08c;
    border: 2px;
    border-radius: 5px;
  }
  .btn-deletar {
    border-radius: 5px;
    border-color: red;
    border: 1px;
  }

  .btn-group {
    position: relative;
    justify-content: space-between;
    bottom: -5px !important;
    text-align: center;
    height: 38px;
  }
  card {
    margin-inline-start: 50px;
    min-width: 15rem;
    max-width: 20rem;
    height: 0 auto;
    margin-top: 25px;
    border-color: #4fc08c;
    border:5px;
    transition: transform 0.5s;
    text-align: center;
  
    padding-top: 20px;
    border-radius: 10px;
  }
  .card:hover {
    transform: scale(1.1);
  }
</style>
