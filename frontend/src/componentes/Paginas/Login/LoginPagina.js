import Header from "../../componentes_gerais/Header/Header"
import Footer from "../../componentes_gerais/Footer/Footer.js"
import React from "react"
import {FormC, InputInfo,LabelC, TituloC} from "../Cadastro/styledC"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from 'axios'
import { useState } from "react";

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

function LoginPagina(){
    const navigate = useNavigate()
    const rotasInfo = (token)=>(
        localStorage.setItem('token', token),
        localStorage.setItem('email', email)
    );
    
    const [email, setEmail] = useState("");
    const [senha, setPassword] = useState("");

    const handleSubmit = async (e) => { 
        e.preventDefault();
        
        const data = {
            email,
            senha,
        };

        const response = await axios.post("http://localhost:3006/api/auth/login", data)
        .then(response=>{
            console.log(response.data)
            rotasInfo(response.data.token)
            navigate('/artista')
            // if ()
        })
    };    
    
    return(
        <>
            <Header/>
                <ContainerC>
                    <FormC onSubmit={handleSubmit}>
                        <TituloC>Login</TituloC>

                        <LabelC>E-mail</LabelC>
                        <InputInfo type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                        <LabelC>Senha</LabelC>
                        <InputInfo className={senha !== "" ? "has-val input" : "input"}
                        type="password"
                        value={senha}
                        onChange={(e) => setPassword(e.target.value)} />
                        <BotaoEntrar type="submit">Entrar</BotaoEntrar>
                    </FormC>
                </ContainerC>
                <Footer/>
        </>
    )
}

export default LoginPagina