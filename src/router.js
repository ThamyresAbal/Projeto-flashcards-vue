import Vue from 'vue';
import VueRouter from 'vue-router';
import ListaCards from './components/ListaCards';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'lista',
            component: ListaCards
        }
    ]
}
);