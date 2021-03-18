import React from 'react';
import * as $ from 'jquery';
import '../../styles/menu_mobile.css';

// Propiedad del menu
const Menu = (props) => {
    let element = $(`#menu`);
    if (props.apear) {
        element.css({ display: 'flex' });
    } else {
        element.addClass('close_menu')
        setTimeout(() => {
            element.css({ display: 'none' });
            element.removeClass('close_menu')
        }, 1000)
    }

    return (
        <div className="menu" id="menu">
            <div className="lateralA">
                <ul>
                    {
                        props.contenido.map((item, key) => {
                            return <li key={key} onClick={() => item.actionMobile()}>{item.name}</li>
                        })
                    }

                </ul>
            </div>
            <div className="lateralB">

            </div>
        </div>
    )
}

export default Menu;