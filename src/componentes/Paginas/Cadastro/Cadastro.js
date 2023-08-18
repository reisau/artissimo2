// import './Cadastro.css'
import Footer from "../../componentes_gerais/Footer/Footer"
import  Header  from "../../componentes_gerais/Header/Header.js"
import { ContainerC, EscolhaC, FormC, TituloC, InputBotao, InputInfo, LabelC } from "./styledC"
import React from "react"
import '@fontsource-variable/josefin-sans'


function Cadastro() {
    return (
        <>
          <Header/>
            <ContainerC>
                <FormC>
                    <EscolhaC>Artista</EscolhaC> <EscolhaC>Cliente</EscolhaC>
                    <TituloC>Cadastre-se</TituloC>
                    <LabelC>E-mail</LabelC>
                    <InputInfo type="email"/>
                    <LabelC>Nome de usuário</LabelC>
                    <InputInfo type="text" />
                    <LabelC>Senha</LabelC>
                    <InputInfo type="password" />
                    <InputBotao>Cadastrar</InputBotao>                
                </FormC>

            </ContainerC>
            <Footer/>
        </>
    )
}

export default Cadastro