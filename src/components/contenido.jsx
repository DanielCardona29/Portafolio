//Elementos de terceros
import React from 'react';
import PropsType from 'prop-types'
import * as $ from 'jquery';
//Mis elementos
import '../styles/homestyles.css'
import '../styles/progresStyles.css'

import Introduccion from './PrincipalPage/introduction.jsx';
import Card from './PrincipalPage/proyectosCard.jsx';
import { Es_texts } from '../json_text_elements/textos_Espanol';
const Contenido = (props) => {
    setTimeout(() => {
        $('#wrapper-index').removeClass('apear_animation')
    }, 4000)

    //Hacemos el parallax del contenido


    window.addEventListener("scroll", () => {

        if (window.innerWidth <= 425) {
            let proyectos = document.getElementById('proyectos');
            let habilidades = document.getElementById('habilidades');
            let offset = window.pageYOffset - (window.pageYOffset * 0.3);
            let offset2 = window.pageYOffset - (window.pageYOffset * 0.4);
            proyectos.style.top = offset + "px";
            habilidades.style.top = offset2 + "px";
        } else {
            let proyectos = document.getElementById('proyectos');
            let habilidades = document.getElementById('habilidades');
            let offset = window.pageYOffset - (window.pageYOffset * 0.7);
            let offset2 = window.pageYOffset - (window.pageYOffset * 1);
            proyectos.style.top = offset + "px";
            habilidades.style.top = offset2 + "px";

        }

    });
    return (
        <div className="wrapper apear_animation" id="wrapper-index">
            <div className="title ">
                <h1>Daniel Cardona Calderón</h1>
            </div>

            <section className="contenido" id="introduccion">
                <Introduccion lang={props.lang} />
            </section>

            <section className="contenido-proyectos" id="proyectos">
                <h2 className="title title-proyecto">PROYECTOS</h2>


                {
                    props.Cards.map((item, key) => {
                        return <Card lang={props.lang} info={item} />
                    })
                }
            </section>
            <section className="contenido-habilidades" id="habilidades">

                <div className="title ">
                    <h2>HABILIDADES</h2>
                </div>

                <div className="abilities-wrappper ">
                    <div className="title-abilites ">Técnicos</div>
                    <div className="container-style ">
                        <ul>
                            <li className="js ">JavaScript EcmaScript+6</li>
                            <li className="JQjs ">JavaScript Jquery</li>
                            <li className="html ">HTML5</li>
                            <li className="css ">CSS</li>
                            <li className="sass ">SASS</li>
                            <li className="Rjs ">ReactJS</li>
                            <li className="Njs ">NodeJS</li>
                            <li className="Ejs ">ExpressJS</li>
                        </ul>
                    </div>
                    <div className="title-abilites ">Lenguajes</div>
                    <div className="container-style ">
                        <ul>
                            <li className="es ">Español - Nativo</li>
                            <li className="en ">Ingles - A2</li>

                        </ul>
                    </div>
                </div>

            </section>
        </div>
    )
}


Contenido.PropsType = {
    lang: PropsType.string,
    Cards: PropsType.object
}

Contenido.defaultProps = {
    Cards: Es_texts.proyectos,
}

export default Contenido;