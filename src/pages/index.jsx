import React from "react"

import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <h1>Itens desta página:</h1>
      <ul>
        <li>Uma seção com fotos do estabelecemento</li>
        <li>Uma breve descrição do negócio</li>
        <li>
          Uma foto de um pão de queijo com uma descrição dele e como é feito. No
          fim, um botão com link pro cardápio dizendo que para mais detalhes de
          mais produtos clicar aqui
        </li>
      </ul>
    </Layout>
  )
}

export default Home
