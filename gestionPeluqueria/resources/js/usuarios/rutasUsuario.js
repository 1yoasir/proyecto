const Bienvenida = () => import('./components/Bienvenida.vue');

export const rutasUsuario = [
    {
        name: 'bienvenida',
        path: '/usuario',
        component: Bienvenida
    }
];