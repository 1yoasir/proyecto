const Bienvenida = () => import('./components/Bienvenida.vue');

export const rutasAdmin = [
    {
        name: 'bienvenida',
        path: '/admin',
        component: Bienvenida
    }
];