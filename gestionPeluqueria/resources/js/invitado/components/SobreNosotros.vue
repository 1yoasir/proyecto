<template>
    <div id="principal">
        <div id="introduccion">
            <div id="introduccion2">
                <div id="introduccion3">
                    <div id="introduccion4">
                        <div class="espaciado"></div>
                        <p id="pretitulo">Introduccion</p>
                        <h1 id="titulo">HairCut Tienda de Barbería</h1>
                        <p id="subtitulo">Un peluquero es una persona cuya ocupación es principalmente cortar, vestir, arreglar, peinar y afeitar el cabello de hombres y niños. El lugar de trabajo de un peluquero se conoce como "barbería"</p>
                        <div class="espaciado"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="historia" class="contenedor-full tabsmodule">
            <div id="subHistoria1" class="hilera row-no-gutter visible">
                <div id="subHistoria2" class="colu-md-6">
                    <div id="imagen" class="banner"></div>
                </div>
                <div id="texto" class="colu-md-6">
                    <div id="subTexto" class="banner-tabs">
                        <div id="subTexto2">
                            <ul id="lista" class="list-horizontal-links carousel-tabs">
                                <li id="itemLista1" class="active">
                                    <a href="#" id="itemLista2">Desde 1996</a>
                                </li>
                            </ul>
                            <div id="textoHistoria" class="carusel-tabs-text flickity-enabled" tabindex="0">
                                <div id="textoHistoria2" class="flickity-viewport" style="height: 580px;">
                                    <div id="textoHistoria3" class="flickity-slider" style="left: 0px; transform: translateX(0%);">
                                        <div id="textoHistoria4" class="carousel-cell is-selected" style="position: absolute; left: 0%;">
                                            <h2 id="tituloHistoria" class="title invert">Nuestra Historia</h2>
                                            <p class="parrafo">La Peluquería HairCut es una clásica barbería de lujo. Ofrecemos una variedad de servicios, atendiendo a todos.<br> HairCut es una tienda de caballeros, que recuerda a la clásica barbería. <br>Nos esforzamos por traer de vuelta los recuerdos, pensando únicamente en la clientela. <br>La gente paga por la calidad: HairCut es donde la obtendrá.</p>
                                            <p class="parrafo">Somos peluqueros que amamos nuestro oficio y brindamos un servicio de primer nivel que ayuda a los hombres a mantenerse en forma.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="voffset80"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#principal{
   
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;

}

    #introduccion2{
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
    }

    #introduccion2::before{
        content: " ";
        display: table;
        box-sizing: border-box;
    }

    @media (min-width: 992px){
        #introduccion2{
            width: 970px;
        }
    }

    @media (min-width: 768px){
        #introduccion2{
            width: 750px;
        }
    }

    #introduccion2::after{
        clear: both;
        content: " ";
        display: table;
    }
    
    #introduccion3{
        opacity: 1;
        transition: opacity 0.5s ease-in;
        margin-left: -15px;
        margin-right: -15px;
    }

    #introduccion3::before{
        content: " ";
        display: table;
    }

    #introduccion::after{
        clear: both;
        content: " ";
        display: table;
    }

    #introduccion4{
        position: inherit;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
    }

    @media (min-width: 992px){
        #introduccion4 {
            margin-left: 16.66666667%;
            width: 66.66666667%;
            float: left;
        }
    }

    .espaciado{
        padding-bottom: 90px;
    }

    #pretitulo{
        font-family: 'Bitter', sans-serif;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 3px;
        font-style: italic;
        color: #000000;
        text-align: center;
    }

    #pretitulo::before{
        content: "~";
        display: inline-block;
        width: 20px;
        margin: 0 14px 4px;
    }

    #pretitulo::after{
        content: "~";
        display: inline-block;
        width: 20px;
        margin: 0 14px 4px;
    }

    @media (min-width: 768px){
        #titulo {
            font-size: 52px;
            line-height: 62px;
        }
    }

    #titulo{
        font-family: Oswald;
        color: #000000;
        text-align: center;
        margin-top: 25px;
        margin-bottom: 25px;
        font-size: 52px;
        line-height: 50px;
        font-weight: 700;
    }

    #subtitulo{
        font-size: 16px;
        color: #b59472;
        letter-spacing: 3px;
        text-align: center;
        line-height: 30px;
        font-family: 'Merriweather', sans-serif;
    }

    .contenedor-full {
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
}

@media (min-width: 992px){
.tabsmodule .hilera {
    display: -moz-box;
    display: -webkit-flexbox;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
}
}

@media (min-width: 992px){
        #imagen{
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }


.hilera.visible {
    opacity: 1;
}
.hilera {
    opacity: 0;
    -webkit-transition: opacity 0.5s ease-in;
    -o-transition: opacity 0.5s ease-in;
    transition: opacity 0.5s ease-in;
}
.row-no-gutter {
    margin-right: 0;
    margin-left: 0;
}
.hilera {
    margin-left: -15px;
    margin-right: -15px;
}

.hilera:before, .hilera:after {
    content: " ";
    display: table;
}

.hilera:after {
    clear: both;
}

.row-no-gutter [class^="colu-"], .row-no-gutter [class*=" colu-"] {
    padding-right: 0;
    padding-left: 0;
}

@media (min-width: 992px){
.colu-md-6 {
    width: 50%;
}
}
@media (min-width: 992px){
.colu-md-6 {
    float: left;
}
}

.colu-md-6{
        position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}

#imagen {
    background-image: url("../../../../storage/app/public/images/sobrenosotros1.png");
}

@media (min-width: 992px){
.tabsmodule .hilera .banner {
    position: relative;
    width: 100%;
    height: 100%;
}
}

.tabsmodule .hilera .banner {
    height: 500px;
}

.banner {
    background-color: #000;
    color: #fff;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.banner-tabs {
    height: auto;
    padding: 150px 0;
}
@media (max-width: 991px){
.banner-tabs {
    padding: 30px 0;
}
}
.banner-tabs {
    background-color: #000000;
    color: #ffffff;
    height: auto;
}

.banner-tabs > div {
    padding: 0px 10%;
}


.banner-tabs .list-horizontal-links, .banner-tabs .carousel-tabs {
    color: rgba(255, 255, 255, 0.8);
    text-align: left;
    font-size: 16px;
    letter-spacing: 2px;
    margin-top: 0;
    font-style: italic;
    line-height: 40px;
    margin-bottom: 10px;
}
.list-horizontal-links {
    margin-top: 26px;
    font-size: 16px;
    color: #000000;
    letter-spacing: 3px;
    line-height: 40px;
    text-align: center;
    font-family: 'Merriweather', sans-serif;
}

.list-horizontal-links li {
    display: inline-block;
}

.banner-tabs .list-horizontal-links li.active a, .banner-tabs .carousel-tabs li.active a {
    font-style: italic;
    border-bottom: 2px solid #ffffff;
}

.banner-tabs .list-horizontal-links li a, .banner-tabs .carousel-tabs li a {
    color: #B08B66;
    font-style: normal;
    letter-spacing: 3px;
    padding: 0 7px 9px 7px;
}
.list-horizontal-links li a {
    color: #000000;
    position: relative;
}

.list-horizontal-links li a:after {
    content: "";
    display: block;
    width: 25px;
    height: 1px;
    border-bottom: 2px solid #000000;
    margin: 0 12px 3px;
    position: absolute;
    left: calc(50% - 25px);
    bottom: -13px;
    border-color: transparent;
    left: calc(50% - 12px);
    -webkit-transition: width .3s ease 0s,left .3s ease 0s;
    -o-transition: width .3s ease 0s,left .3s ease 0s;
    transition: width .3s ease 0s,left .3s ease 0s;
    width: 0;
}

.flickity-enabled {
    position: relative;
}

.flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%;
}

.flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
}

.banner-tabs .carusel-tabs-text .carousel-cell {
    width: 100%;
}

.carousel-cell {
    position: relative;
    overflow: hidden;
}

.banner-tabs .title {
    text-align: left;
}

.title.invert {
    color: #ffffff;
}
.title {
    font-family: Oswald;
    color: #000000;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 52px;
    line-height: 50px;
    font-weight: 700;
}

.banner-tabs p:not(:last-child) {
    margin-bottom: 40px; 
}
.banner-tabs p {
    line-height: 36px;
    font-family: 'Merriweather', sans-serif;
}



    div {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    -vertical-align: baseline;
    outline: none;
    }

    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        -vertical-align: baseline;
        outline: none;
        margin-top: 0;
        margin-bottom: 10px;
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        
    }

    li{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        outline: none;
        display: list-item;
        text-align: left;
    }
    a{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        outline: none;
        color: #428bca;
        text-decoration: none;
        background: transparent;
        box-sizing: border-box;
    }

    a::after{
        content: "";
        display: block;
        width: 25px;
        height: 1px;
        border-bottom: 2px solid #000000;
        margin: 0 12px 3px;
        position: absolute;
        left: calc(50% - 25px);
        bottom: -13px;
        border-color: transparent;
        left: calc(50% - 12px);
        -webkit-transition: width .3s ease 0s,left .3s ease 0s;
        -o-transition: width .3s ease 0s,left .3s ease 0s;
        transition: width .3s ease 0s,left .3s ease 0s;
        width: 0;
    }
    h2{
        display: block;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        -vertical-align: baseline;
        outline: none;
    }

    p{
        font-size: 14px;
        letter-spacing: 2.9px;
        line-height: 30px;
        font-weight: 400;
        font-family: 'Merriweather', sans-serif;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        -vertical-align: baseline;
        outline: none;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    h1{
        display: block;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        -vertical-align: baseline;
        outline: none;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    .voffset80{
        padding-bottom: 30px;
    }
</style>