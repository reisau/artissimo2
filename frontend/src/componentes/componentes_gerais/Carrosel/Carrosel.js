import React from 'react'
import {useState} from "react"
import styled from "styled-components"
import imagem1 from "../../../assets/imagens/imagem1.png"
import imagem2 from "../../../assets/imagens/imagem2.png"
import imagem3 from "../../../assets/imagens/imagem3.png"
import {StyledBotaoDireito, StyledBotaoEsquerdo, ContainerCarrosel} from "./StyledCarrosel"

const ImgCarrosel = styled.img`
    display: block;
`

export default function Carrossel(){
    const [Carrosel, SetCarrosel] = useState(imagem1)

    const ImagensDireito = () => {
        if (Carrosel === imagem1){
            SetCarrosel(imagem2)
            
        }
        else if (Carrosel === imagem2){
            SetCarrosel(imagem3)
        }
        else {
            SetCarrosel(imagem1)
        }
    }
    const ImagensEsquerdo = () => {
        if (Carrosel === imagem3){
            SetCarrosel(imagem2)
        }
        else if (Carrosel === imagem2){
            SetCarrosel(imagem1)
        }
        else {
            SetCarrosel(imagem3)
        }
    }
    
    return(
        <>
        <ContainerCarrosel>
            <StyledBotaoEsquerdo onClick={ ImagensEsquerdo} alt="esquerdo"/>
            <ImgCarrosel src={Carrosel} alt=""/>
            <StyledBotaoDireito onClick={ ImagensDireito}alt="direito"/>
        </ContainerCarrosel>
        </>
    )
}

