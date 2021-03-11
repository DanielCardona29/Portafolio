import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/homestyles.css'
import '../styles/progresStyles.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="wrapper ">
      <div class="title ">
        <h1>Daniel Cardona Calderón</h1>
      </div>

      <section class="contenido ">
        <article>

          <p>Hola mi nombre es Daniel Cardona, escribir algo sobre mí es complicado, nunca se me ha dado expresarme bien y menos en letras, pero bueno, aquí estamos, tú estás de ese lado de la pantalla, expectante por saber qué talento tengo para otorgarle
                    valor a tu compañía o negocio, y yo estoy aquí de este lado sin saber qué escribir. Supongo que debo empezar por lo básico, lo que todo el mundo quisiera saber. </p>

          <p>Tengo 19 años y soy un técnico en desarrollo de software, actualmente mis conocimientos están encaminados por el desarrollo front-end, hago énfasis en la tecnología de react.js, y pues como lo es de suponer tengo conocimientos en JavaScript
                    Vanilla y tengo conocimientos avanzados en el dominio de HTML5, CSS y SASS, además de que tengo conocimientos en backend con NodeJS, y en base de datos con SQL. En el futuro me gustaría aprender el arte del Machine Learning</p>
          <p>Supongo que si sigues leyendo esto es porque desea saber más sobre mi, bueno no tengo mucho que contarte, además de que entre mis pasiones se encuentran los videojuegos, yo creo que ellos hicieron parte importante al momento de yo escoger
                    mi futuro.</p>

          <p>También buscó terminar mi carrera ingeniería en sistemas, pero lastimosamente es demasiado complicado hacerlo si no trabajo, y encontrar trabajo como desarrollador está siendo muy complicado, supongo que las compañías grandes piensan que
          soy muy joven o que aún me falta mucho por aprender para ingresar a trabajar, que es verdad, las entiendo, y he buscado trabajo por fuera del mundo del desarrollo, pero las personas me dicen que sea paciente y que no me preocupe por
                    hacer lo que ellos hacen, porque a lo que me quiero dedicar hay mucho trabajo.</p>

          <p>El mundo aún es muy confuso, pero solo espero que algún día , sea mi turno, encontraré una empresa en donde pueda aprender de talentosos desarrolladores y enseñar a desarrolladores del futuro, solo espero algún día poder cambiar el mundo.
                </p>

        </article>
      </section>

      <section class="contenido-proyectos " id="proyectos">

        <div class="title ">
          <h2>PROYECTOS</h2>
        </div>

        <div class="proyectos-wrapper ">
          <div class="proyecto " onclick="opener('Modal', {type:'proyecto',element: 'newnews'},'Content-Modal')">
            <div class="title-proyecto ">NewNews</div>
            <div class="icon "></div>
          </div>
          <div class="descripcion ">Este proyecto es un sistema que quise desarrollar para ponder en practica mis nuevos conocimientos sobre la tecnologia de reactJS, no es muy profesional pero por algo se empieza</div>
        </div>
      </section>

      <section class="contenido-habilidades" id="abilities">

        <div class="title margiRight-25">
          <h2>HABILIDADES</h2>
        </div>

        <div class="abilities-wrappper ">
          <div class="title-abilites ">Técnicos</div>
          <div class="container-style ">
            <ul>
              <li class="js ">JavaScript EcmaScript+6</li>
              <li class="JQjs ">JavaScript Jquery</li>
              <li class="html ">HTML5</li>
              <li class="css ">CSS</li>
              <li class="sass ">SASS</li>
              <li class="Rjs ">ReactJS</li>
              <li class="Njs ">NodeJS</li>
              <li class="Ejs ">ExpressJS</li>
            </ul>
          </div>
          <div class="title-abilites ">Lenguajes</div>
          <div class="container-style ">
            <ul>
              <li class="es ">Español - Nativo</li>
              <li class="en ">Ingles - A2</li>

            </ul>
          </div>
        </div>
      </section>
    </div>

  </Layout>
)

export default IndexPage


// import { StaticImage } from "gatsby-plugin-image"

{/* <StaticImage
src="../images/gatsby-astronaut.png"
width={300}
quality={100}
formats={["AUTO", "WEBP", "AVIF"]}
alt="A Gatsby astronaut"
style={{ marginBottom: `1.45rem` }}
/> */}