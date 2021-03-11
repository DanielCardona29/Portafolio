import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contenido from '../components/contenido';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Contenido lang="es" />
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