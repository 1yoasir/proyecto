const Bienvenida = () => import('./components/Bienvenida.vue');
const Clientes = () => import('./components/s.vue');
const Trabajadores = () => import('./components/Trabajadores.vue');
const Citas = () => import('./components/Citas.vue');

export const rutasAdmin = [
    {
        name: 'bienvenida',
        path: '/admin',
        component: Bienvenida
    },
    {
        name: 'clientes',
        path: '/admin/clientes',
        component: Clientes
    },
    {
        name: 'trabajadores',
        path: '/admin/trabajadores',
        component: Trabajadores
    },
    {
        name: 'citas',
        path: '/admin/citas',
        component: Citas
    }

];