import axios from "axios";

const state = {flashcard: []};

const getters = {allCards: state => state.flashcard};

const actions = {
    getAllCards({commit}){
        axios.get(
            "http://localhost:3000/flashcard"
        ).then((response)=>{
            console.log(response)
            commit('getListaCard', response.data)
        })
    },
    
    deleteCard({commit}, id){
        axios.delete(
            "http://localhost:3000/flashcard/"+id,
            ).then((response) => {
                commit('deleteCard', response.data.id);
                alert("Card excluido")
        })
    },
    addCard({commit}, card){
        axios.post(
            "http://localhost:3000/flashcard", {
                "id": card.id,
                "titulo": card.titulo,
                "resposta": card.resposta,
                "rotulo": card.rotulo
            }
        ).then((response)=>{
            commit('addCard', card)
            console.log(response)
        })
    },
    editCard({commit}, card){
        axios.put(
            "http://localhost:3000/flashcard/"+ card.id, {
                "titulo": card.titulo,
                "resposta": card.resposta,
                "rotulo": card.rotulo
            }
        ).then((response)=>{
            commit('addCard', card)
            alert("Card editado", response)
        })
    }
}

const mutations = {
    //pegar
    getListaCard: (state, data) => (state.flashcard = data), // puxar todos
    //delete
    //adicionar
    addCard: (state, card)=>(state.flashcard = state.flashcard.push(card)), // add na lista
    //editar
}

export default {state,actions,getters,mutations};