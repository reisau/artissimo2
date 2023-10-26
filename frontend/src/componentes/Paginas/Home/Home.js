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
              <ImgH srcSet={logo} />
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
          Artíssimo é uma plataforma que visa a comunicação clara de clientes interessados em
          obter artes, e artistas que precisam de clientes para sustentar suas vidas. Além disso
          é uma plataforma que anseia criar uma cultura de valorização da arte no Brasil.
        </IntroducaoTexto>
      </SecaoIntroducao>
      </DivBaixo>
      <Footer />
    </>
  )
}

export default Home