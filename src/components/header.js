import * as React from 'react'
import '../styles/header.css'

const Header = (props) => {

    const _Header = (
        <header className="header ">
            <div className="separador ">
                <span>Inicio</span>
            </div>
            <div className="separador ">
                <span>Pasatiempos</span>
            </div>
            <div className="separador ">
                <span>Fotos</span>
            </div>
            <div className="separador ">
                <span>Proyectos</span>
            </div>
            <div className="separador ">
                <span >Habilidades</span>
            </div>
            <div className="separadorLogo ">
                <span></span>
            </div>
            <div className="separadorLenguaje ">
                <div className="titleLanguaje ">
                    <span className="text ">Lenguaje</span>
                    <span className="icon "></span>
                </div>
            </div>
            <div className="movileButton" ></div>
        </header>
    )


    return _Header
}


export default Header