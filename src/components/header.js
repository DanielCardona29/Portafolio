import React, { useState, PropsTypes } from 'react'
import '../styles/header.css'

import Menu from './menu/Menu';
import '../utils/swiped.events.js';

import { Es_texts } from '../json_text_elements/textos_Espanol';
import { object } from 'prop-types';

const Header = (props) => {
    const [menu, setMenu] = useState(false);

    const onChange = (value) => {
        setMenu(value)
    }
    const _Header = (

        <>
            <Menu apear={menu} contenido={props.contenido.header} />
            <header className="header ">
                {
                    props.contenido.header.map((item, key) => {
                        return (
                            <div className="separador" key={key}>
                                <span onClick={() => item.action()}>{item.name}</span>
                            </div>
                        )
                    })
                }
                <div className="separadorLogo ">
                    <span></span>
                </div>
                <div className="separadorLenguaje ">
                    <div className="titleLanguaje ">
                        <span className="text ">Lenguaje</span>
                        <span className="icon "></span>
                    </div>
                </div>
                <div className="movileButton" onClick={() => {
                    return menu ? onChange(false) : onChange(true)
                }} ></div>
            </header>
        </>
    )

    document.addEventListener('swiped-right', () => onChange(true))
    document.addEventListener('swiped-left', () => onChange(false))
    return _Header
}

Header.prototype = {
    contenido: object,
}
Header.defaultProps = {
    contenido: Es_texts,
}



export default Header