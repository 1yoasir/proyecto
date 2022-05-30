<template>
    <div id="equipo" class="seccion meet-the-team">
        <div class="contenedor">
            <div class="columna visible">
                <div class="colu-md-7">
                    <div class="voffset100"></div>
                    <p class="pretitulo left">Equipo</p>
                    <h1 class="titulo left-horizontal">Nuestros Barberos</h1>
                </div>
            </div>
            <div class="columna row-no-gutter visible">
                <div class="colu-sm-4 fadeInUp">
                    <div class="team-member">
                        <img src="images/miembro1.png" alt="miembro1">
                        <div class="voffset50"></div>
                        <h4 class="nombre-miembro">Jesús Gómez </h4>
                        <p class="posicion">Peluquero</p>
                        <div class="voffset20"></div>
                        <ul class="redes">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="colu-sm-4 fadeInUp">
                    <div class="team-member">
                        <img src="images/miembro2.png" alt="miembro1">
                        <div class="voffset50"></div>
                        <h4 class="nombre-miembro">Camilo Sánchez</h4>
                        <p class="posicion">Peluquero</p>
                        <div class="voffset20"></div>
                        <ul class="redes">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="colu-sm-4 fadeInUp">
                    <div class="team-member">
                        <img src="images/miembro3.png" alt="miembro1">
                        <div class="voffset50"></div>
                        <h4 class="nombre-miembro">Alberto Ramírez </h4>
                        <p class="posicion">Peluquero</p>
                        <div class="voffset20"></div>
                        <ul class="redes">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div class="columna visible"></div>
        </div>
    </div>
</template>

<style scope>
    .contenedor:before, .contenedor:before:after {
    content: " ";
    display: table;
}

.contenedor:before:after{
    clear: both;
}

.columna.visible {
    opacity: 1;
}

.columna {
    opacity: 0;
    -webkit-transition: opacity 0.5s ease-in;
    -o-transition: opacity 0.5s ease-in;
    transition: opacity 0.5s ease-in;
}

.columna {
    margin-left: -15px;
    margin-right: -15px;
}


.columna {
    margin-left: -15px;
    margin-right: -15px;
}

.columna:before, .columna:after {
    content: " ";
    display: table;
}

.columna:after {
    clear: both;
}

@media (min-width: 992px){
.colu-md-7 {
    width: 58.33333333%;
}
}

@media (min-width: 992px){
.colu-md-7{
    float: left;
}
}

.colu-md-7{
    position: inherit;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}

.voffset100 {
    padding-bottom: 100px;
}
.pretitulo.left {
    text-align: left;
    color: #b59472;
}

.pretitulo{
    font-family: 'Bitter', sans-serif;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 3px;
    font-style: italic;
    color: #000000;
    text-align: center;
}

p {
    font-size: 14px;
    letter-spacing: 2.9px;
    line-height: 30px;
    font-weight: 400;
    font-family: 'Merriweather', sans-serif;
}

.pretitulo.left:before {
    border-color: #b59472;
}

.pretitulo:after, .pretitulo:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 1px;
    border-bottom: 1px solid #000000;
    margin: 0 14px 4px;
}

@media (min-width: 1200px){
.titulo.left-horizontal {
    margin-bottom: 100px;
}
}

@media (min-width: 768px){
.titulo.left-horizontal {
    font-size: 60px;
}
}

.titulo.left-horizontal {
    text-align: left;
    font-weight: 700;
    margin-top: 18px;
    margin-left: 11px;
    display: inline-block;
    position: inherit;
    font-size: 40px;
}

@media (min-width: 768px){
.titulo {
    font-size: 52px;
    line-height: 62px;
}
}

.titulo {
    font-family: Oswald;
    color: #000000;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 52px;
    line-height: 50px;
    font-weight: 700;
}

.meet-the-team .row-no-gutter {
    margin: 0 14px;
}

.row-no-gutter {
    margin-right: 0;
    margin-left: 0;
}

.visible .fadeInUp:nth-child(1) {
    animation-delay: 0.4s;
}

.visible .fadeInUp {
    -webkit-animation: fadeInUp 0.5s ease-in-out both;
    -moz-animation: fadeInUp 0.5s ease-in-out both;
    animation: fadeInUp 0.5s ease-in-out both;
}

.row-no-gutter [class^="colu-"], .row-no-gutter [class*=" colu-"] {
    padding-right: 0;
    padding-left: 0;
}

@media (min-width: 768px){
.colu-sm-4 {
    width: 33.33333333%;
}
}

@media (min-width: 768px){
.colu-sm-4 {
    float: left;
}
}

.colu-sm-4 {
    position: inherit;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}

@media (min-width: 768px){
.team-member {
    margin-bottom: 0;
}
}

.team-member {
    text-align: center;
    margin-bottom: 50px;
}

img {
    max-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    outline: none;
}

.voffset50{
    padding-bottom: 50px;
}

.team-member .posicion{
    font-size: 13px;
    letter-spacing: 2px;
}

.voffset20 {
    padding-bottom: 20px;
}

ol, ul {
    list-style: none;
}

.team-member .redes li {
    display: inline-block;
    margin: 2px 8px;
}

.team-member .redes li a {
    color: #000000;
    transition: opacity .2s linear;
}

.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.fa-facebook-f:before, .fa-facebook:before {
    content: "\f09a";
}

.team-member .redes li a:hover {
  color: #b59472;
}

</style>