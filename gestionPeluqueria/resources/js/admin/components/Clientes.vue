<template>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Mis Clientes</div>

                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Citas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(trabajador, index) in trabajadores" :key="index">
                            <th scope="row">Paco</th>
                            <td>66778844</td>
                            <td>Horario</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            trabajadores: 3
        }
    },
    created() {
        axios.get('/trabajadores')
        .then(respuesta => {
            this.trabajadores = respuesta.data;
        });
    },
}
</script>