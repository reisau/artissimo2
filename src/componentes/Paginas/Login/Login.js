import Header from "../../componentes_gerais/Header/Header"
import Footer from "../../componentes_gerais/Footer/Footer.js"
import React from "react"
import {ContainerC, FormC, InputInfo,LabelC, TituloC} from "../Cadastro/styledC"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const BotaoEntrar = styled.button`
    font-family: Josefin sans;
    margin-top: 130px;
    display: block;
    padding: auto;
    height: 30px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    background-color: #F786AA;
    cursor: pointer;
    font-size: 17px;
    color:white;
    border-radius: 10px;
    border: none;
`

function Login(){
    const navigate = useNavigate()
    const gotoArtista= () => {
      navigate('/artista')
    }
    return(
        <>
            <Header/>
                <ContainerC>
                    <FormC>
                        <TituloC>Login</TituloC>

                        <LabelC>E-mail</LabelC>
                        <InputInfo type="email" />
                        <LabelC>Senha</LabelC>
                        <InputInfo type="text" />
                        <BotaoEntrar onClick={gotoArtista}>Entrar</BotaoEntrar>
                    </FormC>
                </ContainerC>
                <Footer/>
        </>
    )
}

export default Login