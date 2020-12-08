<template>
  <b-row class="container">
    <h1>{{titulo}}<hr></h1>
    <b-row> 
      <h3>Adicionar Card</h3>
      <div class="detalhe">
        <b-form inline>
      <label class="sr-only" for="inline-form-input-name">Texto</label>
      <b-form-input
        id="inline-form-input-name"
        class="mb-4 mr-sm-4 mb-sm-0"
        placeholder="Insira o título do card"
        v-model="titulo"
      ></b-form-input>

      <label class="sr-only" for="inline-form-input-">Resposta</label>
      <b-input-group prepend="@" class="mb-4 mr-sm-4 mb-sm-0">
        <b-form-input id="inline-form-input" 
        v-model="email"
        placeholder="Insira seu email"></b-form-input>
      </b-input-group>

      <b-button variant="primary" @click="createUser()">Save</b-button>
    </b-form>
      </div>
      </b-row>
    </b-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name : 'AdicionarUsuario',
    data(){
      return { 
        titulo:"FLASHCARDS - VUE",
        name : "", 
        email: ""}
    }, 
    methods:{
      ...mapActions(["addUser"]),
      createUser(){
         let user = {
          "name": this.name,
          "username": "",
          "email": this.email,
          "address": {
            "street": "",
            "suite": "",
            "city": "",
            "zipcode": "",
            "geo": {
              "lat": "",
              "lng": ""
            }
          },
          "phone": "",
          "website": "",
          "company": {
            "name": "",
            "catchPhrase": "",
            "bs": ""
          }
        }
        this.addUser(user)
        alert('Adicionado com sucesso!')
      }
    }
}
</script>

<style>

</style>