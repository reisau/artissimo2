import Carrosel from "../Carrosel/Carrosel"
import logo from "../../assets/imagens/logo.png"
import { Header, TituloH, TrocaPagina, ContainerHLT, LogoTituloH, SecaoIntroducao, IntroducaoTexto, ImgH } from "./styledH"
import Footer from "../componentes_gerais/Footer/Footer.js"


function Home() {
  return (
    <>
      <Header>
        <nav>
          <TrocaPagina>Cadastre-se</TrocaPagina> <TrocaPagina> Login </TrocaPagina>
        </nav>
      </Header>

      <ContainerHLT>
        <Carrosel />
        <LogoTituloH>
          <ImgH srcset={logo}/>
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
      <Footer/>
    </>
  )
}

export default Home