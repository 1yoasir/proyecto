/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 import Appinvitado from './invitado/AppInvitado.vue';
 import Appadmin from './admin/AppAdmin.vue';
 import Appusuario from './usuarios/AppUsuario.vue';

 require('./bootstrap');
 
 window.Vue = require('vue').default;
 
 import VueRouter from 'vue-router';

 import {rutasInvitado} from './invitado/rutasInvitado';
 import {rutasAdmin} from './admin/rutasAdmin';
 import {rutasUsuario} from './usuarios/rutasUsuario';


 Vue.use(VueRouter);
 
 const routerInvitado = new VueRouter({
     mode: 'history',
     routes: rutasInvitado,
 });

 

 
 const routerAdmin = new VueRouter({
    mode: 'history',
    routes: rutasAdmin,
});




 const routerUsuario = new VueRouter({
    mode: 'history',
    routes: rutasUsuario,
});


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//COMPONENTES INVITADO
Vue.component('menu-invitado', require('./invitado/components/Menu.vue').default);
// Vue.component('incio', require('./invitado/components/Inicio.vue').default);
// Vue.component('sobrenosotros', require('./invitado/components/SobreNosotros.vue').default);
// Vue.component('servicios', require('./invitado/components/Servicios.vue').default);
Vue.component('pie', require('./invitado/components/Footer.vue').default);
// Vue.component('incio-invitado', require('./components/invitado/InicioInvitado.vue').default);
// Vue.component('sobreNosotros', require('./components/invitado/SobreNosotros.vue').default);
// Vue.component('menu-invitado', require('./components/invitado/MenuInvitado.vue').default);
// Vue.component('pie', require('./components/invitado/Footer.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const appInvitado = new Vue({
    el: '#appInvitado',
    router: routerInvitado,
    components: {Appinvitado},
});

const appAdmin = new Vue({
    el: '#appAdmin',
    router: routerAdmin,
    components: {Appadmin},
});

const appUsuario = new Vue({
    el: '#appUsuario',
    router: routerUsuario,
    components: {Appusuario},
});
