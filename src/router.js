import Vue from 'vue';
import VueRouter from 'vue-router';
import ListaCards from './components/ListaCards';
import DetalheCard from './components/DetalheCard';
import NovoCard from './components/NovoCard';
import EditarCard from './components/EditarCard';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'lista',
            component: ListaCards
        },{
           path: '/detalhe/:id',
           name: 'detalheCard',
           component: DetalheCard
        },
        {
            path:'/novoCard',
            name: 'addNovoCard',
            component: NovoCard
        },
        {
            path:'/editar/:id',
            name: 'editarCard',
            component: EditarCard
        }
    ]
}
);