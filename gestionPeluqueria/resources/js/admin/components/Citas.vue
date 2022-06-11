<template>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Listado de Citas Totales</div>

                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Trabajador</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(trabajador, index) in trabajadores" :key="index">
                            <th scope="row">1</th>
                            <td>Pepe</td>
                            <td>Yoasir</td>
                            <td>12-03-2022</td>
                            <td>17:30</td>
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