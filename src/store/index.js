import Vuex from "vuex";
import Vue from "vue";
import flashcard from "./modules/flashcard"


Vue.use(Vuex);

export default new Vuex.Store({
    modules:{  
        flashcard   
    }
})