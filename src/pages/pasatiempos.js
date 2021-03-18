import React from 'react';
import PasatiemposContent from '../components/pasatiempos/contenido';
import SEO from "../components/seo"
import Layout from "../components/layout"

const Pasatiempo = () => {
  return < Layout >
    <SEO title="Home" />
    <PasatiemposContent lang="es" />
  </Layout >
}


export default Pasatiempo;