<template>
  <b-row>
    <h1>FLASHCARDS {{allCards}}</h1> 
  </b-row>   
</template>


<script>
import {mapActions, mapGetters} from "vuex"

export default {
    name: "ListaCards",
    components:{
        
    },
    data(){
        return {
            search : "",
            result : null
            }
    },
    computed: mapGetters(["allCards"]),
    methods: {
        ...mapActions(["getAllCards"]),
    },
    created(){
        this.getAllCards();
    }
}
</script>

<style>

</style>