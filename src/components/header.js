import * as React from 'react'
import '../styles/header.css'

const Header = (props) => {

    const _Header = (
        <header class="header ">
            <div class="separador ">
                <span>Inicio</span>
            </div>
            <div class="separador ">
                <span>Pasatiempos</span>
            </div>
            <div class="separador ">
                <span>Fotos</span>
            </div>
            <div class="separador ">
                <span>Proyectos</span>
            </div>
            <div class="separador ">
                <span >Habilidades</span>
            </div>
            <div class="separadorLogo ">
                <span></span>
            </div>
            <div class="separadorLenguaje ">
                <div class="titleLanguaje ">
                    <span class="text ">Lenguaje</span>
                    <span class="icon "></span>
                </div>
            </div>
            <div class="movileButton" ></div>
        </header>
    )


    return _Header
}


export default Header