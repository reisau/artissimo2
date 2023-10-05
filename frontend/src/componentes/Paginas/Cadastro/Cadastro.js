import Footer from "../../componentes_gerais/Footer/Footer"
import  Header  from "../../componentes_gerais/Header/Header.js"
import { InputBotaoFormulario, DivEstilos, DivRedes, Coluna, CheckboxEstilo, FormEstilos, DivTudo, DivArtista, ContainerC, EscolhaC, FormC, TituloC, InputBotao, InputInfo, LabelC } from "./styledC"
import React from "react"
import '@fontsource-variable/josefin-sans'
import { useNavigate } from "react-router-dom"
import {useState} from "react"

function Cadastro() {
    const navigate = useNavigate()
    const gotoArtista= () => {
      navigate('/artista')
    }

    const [Confirmar, setConfirmar] = useState('Confirmar')
    return (
        <>
          <Header/>
          <DivTudo>
                <DivArtista id="mostrar" >
                    <DivEstilos>
                        <TituloC>Escolha seus estilos:</TituloC>
                        <FormEstilos>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" value="Realismo"/>
                            <LabelC> Realismo</LabelC>
                            <CheckboxEstilo type="checkbox" value="Caricatura"/>
                            <LabelC> Caricatura</LabelC>
                            <CheckboxEstilo type="checkbox" value="Estilizado"/>
                            <LabelC> Estilizado</LabelC>
                            </Coluna>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" value="Semi-realismo"/>
                            <LabelC> Semi-realismo</LabelC>
                            <CheckboxEstilo type="checkbox" value="Tradicional"/>
                            <LabelC> Tradicional</LabelC>
                            </Coluna>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" value="Digital"/>
                            <LabelC> Digital</LabelC>
                            <CheckboxEstilo type="checkbox" value="Aquarela"/>
                            <LabelC> Aquarela</LabelC>
                            <CheckboxEstilo type="checkbox" value="Acrilica"/>
                            <LabelC> Acrílica</LabelC>
                            </Coluna>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" value="Anime"/>
                            <LabelC> Anime</LabelC>
                            <CheckboxEstilo type="checkbox" value="Ilustracao"/>
                            <LabelC> Ilustração</LabelC>
                            </Coluna>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" value="C"/>
                            <LabelC>Cartoon</LabelC>
                            <CheckboxEstilo type="checkbox" value="Grafite"/>
                            <LabelC> Grafite </LabelC>
                            </Coluna>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" value="Lapis_coloridos"/>
                            <LabelC>Lápis coloridos</LabelC>
                            </Coluna>
                        </FormEstilos>
                    </DivEstilos>
                    <DivRedes>
                <TituloC>Suas redes sociais (Link)</TituloC>
                    <LabelC>Intagram:</LabelC>
                    <InputInfo type="url" />
                    <LabelC>Twitter:</LabelC>
                    <InputInfo type="url"/>
                    <InputBotaoFormulario  type="submit" value="Submit" onClick={()=> setConfirmar('Confirmado!')}> {Confirmar}  </InputBotaoFormulario>
                </DivRedes>
                
                </DivArtista>

            <ContainerC>
                    <EscolhaC href="#mostrar">Artista</EscolhaC> <EscolhaC href="">Cliente</EscolhaC>
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