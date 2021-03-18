import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as $ from 'jquery';
import { StaticImage } from "gatsby-plugin-image"

import '../../styles/card_styles.css';
const Card = (props) => {
    const [hold, setHold] = useState(false);

    //Esta funcion es para hacer rotar la card
    const card_clic = async (ele) => {
        //Capturamos los elementos 
        let element = $(`#card${ele}`);
        let element2 = $(`#cardImage${ele}`);
        let element3 = $(`#cardTitle${ele}`);
        let element4 = $(`#cardDesc${ele}`);
        //Las animaciones de la card
        element.addClass('card_animations_1')
        setTimeout(() => {
            element.removeClass('card_animations_1')
        }, 1000)
        //Si la carta no esta rotada la rotamos
        if (!hold) {
            setTimeout(() => {
                element2.css({ display: 'none' })
                element3.css({ display: 'none' })
                element4.css({ display: 'flex' })
            }, 500)

            setHold(true)
        } else {
            setTimeout(() => {
                element2.css({ display: 'flex' })
                element3.css({ display: 'flex' })
                element4.css({ display: 'none' })
                return true
            }, 500)
            setHold(false)
        }
    }
    console.log(props.info.imageURL);

    if (props.lang === 'es') {
        return (
            //Estructura de mi card
            <div className="card" id={`card${props.info.id}`} onClick={() => card_clic(props.info.id)}>
                <div className="image" id={`cardImage${props.info.id}`}>
                    <StaticImage src={`../../images/news.png`} width={200} quality={100} formats={["AUTO", "WEBP", "AVIF"]} alt={props.info.title} />
                </div>
                <div className="title-card" id={`cardTitle${props.info.id}`}>
                    <h3>{props.info.title}</h3>
                </div>
                <div className="description" id={`cardDesc${props.info.id}`} >
                    <p className="descripcion" dangerouslySetInnerHTML={{ __html: props.info.description }}></p>
                    <a className="Link" href={props.info.link_github} target="_blank">Link GitHub</a>
                    {
                        (() => {
                            if (props.info.link_API) {
                                return <a className="Link" href={props.info.link_API} target="_blank">Link API</a>
                            }
                        })()
                    }
                    <a className="Link" href={props.info.link_web} target="_blank">Link de la web</a>
                </div>

            </div>
        );
    } else if (props.lang === 'en') {
        return (
            <article>
                hola
            </article>
        );
    }

}

Card.propTypes = {
    lang: PropTypes.string.isRequired
};

export default Card;