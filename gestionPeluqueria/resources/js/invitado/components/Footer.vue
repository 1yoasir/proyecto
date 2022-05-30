<template>
    <div class="pie-pagina">
        <div class="voffset20"></div>
        <div>
            <div class="redes">
                <h1>Siguenos</h1>
                <ul>
                    <li><i class="fa fa-facebook"> <br>Facebook</i></li>
                    <li><i class="fa fa-instagram"> <br>Instagram</i></li>
                    <li><i class="fa fa-youtube"> <br>Youtube</i></li>
                </ul>
            </div>
        </div>
        <div class="voffset20"></div>
        <div class="grupo-2">
            <small>&copy; 2022 <b>HairCut</b> - Todos los derechos reservados.</small>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
*{
   margin:0;
   padding:0;
   box-sizing:border-box;
   font-family:"Open Sans",sans-serif;
   
}

.pie-pagina{
  text-align:center;
  position:relative;
  bottom:0;
  left:0;
  width:100%;
  background: black;
  color: white;
  height: auto;
}

.redes>ul{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
}

.redes>ul>li>i:hover{
    color: #b59472;
    cursor: pointer;
}

ul{
    text-decoration: none;
    list-style: none;
}


h1{
    color: #b59472
}

.voffset20{
    padding-bottom: 20px;
}


</style>