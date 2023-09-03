import Footer from "../../componentes_gerais/Footer/Footer"
import  Header  from "../../componentes_gerais/Header/Header.js"
import { FormEstilos, DivTudo, DivArtista, ContainerC, EscolhaC, FormC, TituloC, InputBotao, InputInfo, LabelC } from "./styledC"
import React from "react"
import '@fontsource-variable/josefin-sans'
import { useNavigate } from "react-router-dom"
function Cadastro() {
    const navigate = useNavigate()
    const gotoArtista= () => {
      navigate('/artista')
    }
    return (
        <>
          <Header/>
          <DivTudo>
                <DivArtista id="mostrar" >
                    <FormEstilos>
                        <TituloC>Escolha seus estilos:</TituloC>
                        <InputInfo type="checkbox" value="Bike"/>
                        <label> I have a bike</label>
                        <InputInfo type="checkbox" value="Car"/>
                        <label> I have a car</label>
                        <InputInfo type="checkbox" value="Boat"/>
                        <label> I have a boat</label>
                        <InputInfo type="submit" value="Submit"/>
                    </FormEstilos>
                </DivArtista>
            <ContainerC>
                
                    <EscolhaC href="#mostrar">Artista</EscolhaC> <EscolhaC href="#">Cliente</EscolhaC>
                        <FormC>
                            <TituloC>Cadastre-se</TituloC>
                            <LabelC>E-mail</LabelC>
                            <InputInfo type="email"/>
                            <LabelC>Nome de usuário</LabelC>
                            <InputInfo type="text" />
                            <LabelC>Senha</LabelC>
                            <InputInfo type="password" />
                            <InputBotao onClick={gotoArtista}>Cadastrar</InputBotao>                
                        </FormC>
                
            </ContainerC>
            </DivTudo>
            <Footer/>
        </>
    )
}

export default Cadastro