import React from 'react';
import PropTypes from 'prop-types';

import { Es_texts } from '../../json_text_elements/textos_Espanol';
import { En_texts } from '../../json_text_elements/textos_Ingles'


const Introduccion = (props) => {


    if (props.lang === 'es') {
        return (
            <article>
                <p>{Es_texts.introduction.text1}</p>
                <p>{Es_texts.introduction.text2}</p>
                <p>{Es_texts.introduction.text3}</p>
                <p>{Es_texts.introduction.text4}</p>
                <p>{Es_texts.introduction.text5}</p>
            </article>
        );
    } else if (props.lang === 'en') {
        return (
            <article>
                <p>{En_texts.introduction.text1}</p>
                <p>{En_texts.introduction.text2}</p>
                <p>{En_texts.introduction.text3}</p>
                <p>{En_texts.introduction.text4}</p>
                <p>{En_texts.introduction.text5}</p>
            </article>
        );
    }

}

Introduccion.propTypes = {
    lang: PropTypes.string.isRequired
  };

export default Introduccion;