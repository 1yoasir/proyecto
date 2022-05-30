const Inicio = ()=> import('./components/Inicio.vue');
const SobreNosotros = ()=> import('./components/SobreNosotros.vue');
const Servicios = ()=> import('./components/Servicios.vue');
const Equipo = ()=> import('./components/Equipo.vue');
const Login = ()=> import('./components/Login.vue');

export const rutasInvitado = [
    {
        name: 'inicio',
        path: '/',
        component: Inicio
    },

    {
        name: 'sobre-nosotros',
        path: '/sobreNosotros',
        component: SobreNosotros
    },

    {
        name: 'servicios',
        path: '/servicios',
        component: Servicios,
    },

    {
        name: 'equipo',
        path: '/equipo',
        component: Equipo,
    },

    {
        name: 'login',
        path: '/login',
        component: Login,
    }
]