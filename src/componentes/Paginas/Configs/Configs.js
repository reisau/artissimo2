import React from "react"
import Footer from "../../componentes_gerais/Footer/Footer.js"
import {TextoAdd, ImgRedes, LabelConfigs, InputConfigs, DivConfigs, DivBotaoConfigs, HeaderConfigs, BotaoConfigs, DivAddImg} from "./StyledConfigs.jsx"
import instagram from "../../../assets/imagens/instagram.png"
import X from "../../../assets/imagens/X.png"
import {useNavigate } from "react-router-dom"
import {useState} from "react"

function Configs(){
    const navigate = useNavigate()
    const gotoPaginaArtista = () => {
      navigate(-1)
    }
    const [Salvar, setSalvar] = useState('Salvar')
    return(
        <>
            <HeaderConfigs>
            <DivBotaoConfigs>
                <BotaoConfigs onClick={()=> setSalvar('Salvo!')}>{Salvar}</BotaoConfigs> <BotaoConfigs onClick={gotoPaginaArtista}>Voltar</BotaoConfigs>
            </DivBotaoConfigs>
            </HeaderConfigs>
            <div>
                <DivConfigs>
                    <LabelConfigs>Mudar nome:</LabelConfigs>
                    <InputConfigs type="text"></InputConfigs>
                </DivConfigs>
                <DivConfigs>
                    <LabelConfigs>Mudar redes:</LabelConfigs>
                    <ImgRedes src={instagram} alt="instagram"/>
                    <InputConfigs type="url"></InputConfigs>
                    <ImgRedes src={X} alt="Twitter"/>
                    <InputConfigs type="url"></InputConfigs>
                </DivConfigs>
                <DivAddImg>
                    <TextoAdd>Tabela de preços e exemplos da sua arte (mín 1-máx 6)</TextoAdd>
                    <BotaoConfigs>Adicionar</BotaoConfigs>
                </DivAddImg>
            </div>
            <Footer/>
        </>
    )

}
export default Configs