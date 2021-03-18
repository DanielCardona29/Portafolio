export const Es_texts = {
    introduction: {
        text1: `Hola mi nombre es Daniel Cardona, escribir algo sobre mí es complicado, nunca se me ha dado expresarme bien y menos en letras, pero bueno, aquí estamos, tú estás de ese lado de la pantalla, expectante por saber qué talento tengo para otorgarle
        valor a tu compañía o negocio, y yo estoy aquí de este lado sin saber qué escribir. Supongo que debo empezar por lo básico, lo que todo el mundo quisiera saber.`,

        text2: `Tengo 19 años y soy un técnico en desarrollo de software, actualmente mis conocimientos están encaminados por el desarrollo front-end, hago énfasis en la tecnología de react.js, y pues como lo es de suponer tengo conocimientos en JavaScript
        Vanilla y tengo conocimientos avanzados en el dominio de HTML5, CSS y SASS, además de que tengo conocimientos en backend con NodeJS, y en base de datos con SQL. En el futuro me gustaría aprender el arte del Machine Learning`,

        text3: `Supongo que si sigues leyendo esto es porque desea saber más sobre mi, bueno no tengo mucho que contarte, además de que entre mis pasiones se encuentran los videojuegos, yo creo que ellos hicieron parte importante al momento de yo escoger
        mi futuro.`,

        text4: `También buscó terminar mi carrera ingeniería en sistemas, pero lastimosamente es demasiado complicado hacerlo si no trabajo, y encontrar trabajo como desarrollador está siendo muy complicado, supongo que las compañías grandes piensan que
        soy muy joven o que aún me falta mucho por aprender para ingresar a trabajar, que es verdad, las entiendo, y he buscado trabajo por fuera del mundo del desarrollo, pero las personas me dicen que sea paciente y que no me preocupe por
        hacer lo que ellos hacen, porque a lo que me quiero dedicar hay mucho trabajo.`,

        text5: `El mundo aún es muy confuso, pero solo espero que algún día , sea mi turno, encontraré una empresa en donde pueda aprender de talentosos desarrolladores y enseñar a desarrolladores del futuro, solo espero algún día poder cambiar el mundo.`
    },

    proyectos: [
        {
            id: 'NewNews',
            title: 'NEW NEWS',
            description: `Pensando en como mejorar el portal de noticias de <a target="_blank" href="https://www.proteccion.com/wps/portal/proteccion/web/home/proteccion-conecta/lo-nuevo">protección.com</a>, se me ocurrió New News un portal en donde cada usuario puede crear y compartir noticias, no es muy profesional, pero es la primera alternativa de solución que desarrollo en este estilo.`,
            image: 'news.png',
            cardColor: null,
            link_github: 'https://github.com/danielcardona123/NewNews',
            link_API: 'https://github.com/danielcardona123/API-New-News/tree/master',
            link_web: 'https://newnews-ce08d.web.app'
        }
    ],
    header: [
        {
            name: 'Inicio',
            action: () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });

            },
            actionMobile: () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            },
        },

        {
            name: 'Proyectos',
            action: () => {
                window.scrollTo({
                    top: 1400,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            actionMobile: () => {
                window.scrollTo({
                    top: 2800,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        },
        {
            name: 'Habilidades',
            action: () => {
                window.scrollTo({
                    top: 2100,
                    left: 0,
                    behavior: 'smooth'
                });
            },

            actionMobile: () => {
                window.scrollTo({
                    top: 4200,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        },
    ]
}