import Header from "../../componentes_gerais/Header/Header"
import Footer from "../../componentes_gerais/Footer/Footer.js"
import React from "react"
import {FormC, InputInfo,LabelC, TituloC} from "../Cadastro/styledC"
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

        &:hover{
        background-color: #eb7197;
    }
`
export const ContainerC = styled.div`
height: 400px;
width: 300px;
background-color: #FBC2B5;
margin-left: auto;
margin-right: auto;
margin-top:20px;
border-radius: 30px;
padding: 20px;
@media only screen and (max-width: 414px){
    margin-bottom: 83%;
}
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
                        <InputInfo type="password" />
                        <BotaoEntrar onClick={gotoArtista}>Entrar</BotaoEntrar>
                    </FormC>
                </ContainerC>
                <Footer/>
        </>
    )
}

export default Login