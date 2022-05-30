const Bienvenida = () => import('./components/Bienvenida.vue');

export const rutasUsuario = [
    {
        name: 'bienvenida',
        path: '/cliente',
        component: Bienvenida
    }
];