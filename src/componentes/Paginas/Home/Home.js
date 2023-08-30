import Carrosel from "../../componentes_gerais/Carrosel/Carrosel"
import logo from "../../../assets/imagens/logo.png"
import { HeaderHome, TituloH, TrocaPagina, ContainerHLT, LogoTituloH, SecaoIntroducao, IntroducaoTexto, ImgH } from "./styledH"
import Footer from "../../componentes_gerais/Footer/Footer.js"
import React from "react"
import {useNavigate } from "react-router-dom"
import { GlobalStyle } from "../../../styledGlobal"


function Home() {
  
  const navigate = useNavigate()
  const gotoCadastro = () => {
    navigate('/cadastro')
  }

  
  return (
    <>
      <GlobalStyle />
      <HeaderHome>
        <nav>
        <TrocaPagina onClick={gotoCadastro}>Cadastre-se</TrocaPagina>
          <TrocaPagina> Login </TrocaPagina>
        </nav>
      </HeaderHome>

      <ContainerHLT>
        <Carrosel />
        <LogoTituloH>
          <ImgH srcset={logo} />
          <TituloH> ARTÍSSIMO </TituloH>
        </LogoTituloH>
      </ContainerHLT>
      <SecaoIntroducao>
        <IntroducaoTexto>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae justo et felis interdum
          faucibus. In at lorem sapien. Suspendisse potenti. Cras porttitor turpis sit amet consequat
          fermentum. Morbi velit lectus, congue gravida erat ac, molestie luctus velit. Nullam fringilla,
          magna at blandit vestibulum, nulla orci laoreet enim, in imperdiet lacus mi nec libero. Donec leo
          erat, dictum nec euismod sit amet, consequat a enim.
        </IntroducaoTexto>
      </SecaoIntroducao>
      <Footer />
    </>
  )
}

export default Home