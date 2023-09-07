import Carrosel from "../../componentes_gerais/Carrosel/Carrosel"
import logo from "../../../assets/imagens/logo.png"
import { DivBaixo, DivCima, StyledCarroselContainer, HeaderHome, TituloH, TrocaPagina, ContainerHLT, LogoTituloH, SecaoIntroducao, IntroducaoTexto, ImgH } from "./styledH"
import Footer from "../../componentes_gerais/Footer/Footer.js"
import React from "react"
import {useNavigate } from "react-router-dom"
import { GlobalStyle } from "../../../styledGlobal"

//828 x 1792

function Home() {
  
  const navigate = useNavigate()
  const gotoCadastro = () => {
    navigate('/cadastro')
  }
  const gotoLogin = () => {
    navigate('/login')
  }


  
  return (
    <>
      <GlobalStyle />
      <DivCima>
      <HeaderHome>   
        <TrocaPagina onClick={gotoCadastro}>Cadastre-se</TrocaPagina>
        <TrocaPagina onClick={gotoLogin}> Login </TrocaPagina>
      </HeaderHome>

      <ContainerHLT>
          <LogoTituloH>
              <ImgH srcset={logo} />
              <TituloH> ARTÍSSIMO </TituloH>
          <StyledCarroselContainer>
            <Carrosel />
          </StyledCarroselContainer>
          </LogoTituloH>
      </ContainerHLT>
      </DivCima>
      <DivBaixo>
      <SecaoIntroducao>
        <IntroducaoTexto>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae justo et felis interdum
          faucibus. In at lorem sapien. Suspendisse potenti. Cras porttitor turpis sit amet consequat
          fermentum. Morbi velit lectus, congue gravida erat ac, molestie luctus velit. Nullam fringilla,
          magna at blandit vestibulum, nulla orci laoreet enim, in imperdiet lacus mi nec libero. Donec leo
          erat, dictum nec euismod sit amet, consequat a enim.
        </IntroducaoTexto>
      </SecaoIntroducao>
      </DivBaixo>
      <Footer />
    </>
  )
}

export default Home