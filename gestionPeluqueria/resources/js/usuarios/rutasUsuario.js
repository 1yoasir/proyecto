// COMPONENTES CLIENTE
const BienvenidaCliente = () => import('./components/cliente/Bienvenida.vue');
const CitasCliente = () => import('./components/cliente/Citas.vue');
const PedirCita = () => import('./components/cliente/PedirCita.vue');
const Servicios = () => import('./components/cliente/Servicios.vue');

//COMPONENTES TRABAJADOR
const BienvenidaTrabajador = () => import('./components/trabajador/Bienvenida.vue');
const CitasTrabajador = () => import('./components/trabajador/Citas.vue');
const Horario = () => import('./components/trabajador/Horario.vue');
const cambiarHorario = () => import('./components/trabajador/CambiarHorario.vue');

export const rutasUsuario = [
    //RUTAS DEL CLIENTE
    {
        name: 'bienvenida-cliente',
        path: '/cliente',
        component: BienvenidaCliente
    },
    {
        name: 'citas-cliente',
        path: '/cliente/citas',
        component: CitasCliente
    },
    {
        name: 'pedir-cita',
        path: '/cliente/citas/crear',
        component: PedirCita
    },
    {
        name: 'servicios',
        path: '/cliente/servicios',
        component: Servicios
    },

    //RUTAS DEL TRABAJADOR
    {
        name: 'bienvenida-trabajador',
        path: '/trabajador',
        component: BienvenidaTrabajador
    },
    {
        name: 'citas-trabajador',
        path: '/trabajador/citas',
        component: CitasTrabajador
    },
    {
        name: 'bienvenida-trabajador',
        path: '/trabajador/horario',
        component: Horario
    },
    {
        name: 'cambiar-horario',
        path: '/trabajador/horario/editar',
        component: cambiarHorario
    },
];