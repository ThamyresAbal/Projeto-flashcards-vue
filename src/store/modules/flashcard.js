import axios from "axios";

const state = {flashcard: []};

const getters = {allCards: state => state.flashcard};

const actions = {
    getAllCards({commit}){
        axios.get(
            "https://my-json-server.typicode.com/ThamyresAbal/Projeto-flashcards-vue"
        ).then((response)=>{
            commit('getListaCard', response.data)
        })
    },
    deleteCard({commit}, id){
        axios.delete(
            "https://my-json-server.typicode.com/ThamyresAbal/Projeto-flashcards-vue/?id="+id
        ).then((response)=>{
            commit('deleteCard', id)
            console.log(response)
        })
    },
    addCard({commit}, card){
        axios.post(
            "https://my-json-server.typicode.com/ThamyresAbal/Projeto-flashcards-vue", {
                "id": card.id,
                "pergunta": card.pergunta,
                "resposta": card.resposta
            }
        ).then((response)=>{
            commit('addCard', card)
            console.log(response)
        })
    },
    editCard({commit}, card){
        axios.post(
            "https://my-json-server.typicode.com/ThamyresAbal/Projeto-flashcards-vue/?id="+ card.id, {
                "pergunta": card.pergunta,
                "resposta": card.resposta
            }
        ).then((response)=>{
            commit('addCard', card)
            console.log(response)
        })
    }
}

const mutations = {
    //pegar
    getListaCard: (state, data)=>(state.flashcard = data), // puxar todos
    //delete
    //adicionar
    addCard: (state, card)=>(state.flashcard = state.flashcard.push(card)) // add na lista
    //editar
}

export default {state,actions,getters,mutations};