import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contenido from '../components/contenido';
import Loadign from '../components/Loading';
const IndexPage = () => {
  const [isloading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  },5000 )

  if (!isloading) {
    return (
      < Layout >
        <SEO title="Home" />
        <Contenido lang="es" />
      </Layout >
    )
  } else {
    return <Loadign />
  }



}

export default IndexPage
