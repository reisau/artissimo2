import React, { useEffect } from "react"
import Footer from "../../componentes_gerais/Footer/Footer.js"
import {ImgRedes, LabelConfigs, InputConfigs, DivConfigs, DivBotaoConfigs, HeaderConfigs, BotaoConfigs, DivAddImg} from "./StyledConfigs.jsx"
import instagram from "../../../assets/imagens/instagram.png"
import X from "../../../assets/imagens/X.png"
import {useNavigate } from "react-router-dom"
import {useState} from "react"

function Configs(){
    const navigate = useNavigate()
    const gotoPaginaArtista = () => {
      navigate(-1)
    }

        useEffect(()=>{
        const token = localStorage.getItem('token')
        if (!token){
            navigate('/')
        }
    }, [navigate])

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
                    <br>
                    </br>
                </DivAddImg>
            </div>
            <Footer/>
        </>
    )

}
export default Configs