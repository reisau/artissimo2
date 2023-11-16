import React from "react"
import logo from "../../../assets/imagens/logo.png"
import {useNavigate} from "react-router-dom"
import { useEffect } from "react"
import {DivConfig, DivLogo, Configuracoes, Opcoes, Filtro, TextoLogo, LogoArtista, ContainerFiltroPFP, ContainerLogo, Tabela, EstiloTudo, EstiloColunas, Categorias, Colunas, ColunasInfo, EstiloTabela } from "./StyledArtista"


function PaginaArtista() {
    const navigate = useNavigate()

    const logOut = () =>(
        localStorage.removeItem('token'),
        localStorage.removeItem('email'),
        navigate('/')
    )
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (!token){
            navigate('/')
        }
    }, [navigate])

    const gotoConfiguracoes = () => {
      navigate('/configuracoes')
    }

    
    return (
        <>
            <EstiloTudo>
                <ContainerLogo>
                    <DivLogo>
                        <LogoArtista src={logo} onClick={logOut}/>
                        <TextoLogo onClick={logOut}>ARTÍSSIMO</TextoLogo>
                    </DivLogo>
                    <DivConfig>
                        <Configuracoes onClick={gotoConfiguracoes}>Configurações</Configuracoes>
                    </DivConfig>
                </ContainerLogo>
                

                <EstiloTabela>
                    <ContainerFiltroPFP> 
                        <Filtro>
                            <Opcoes value="0">Estilo</Opcoes>
                            <Opcoes value={1}>Realismo</Opcoes>
                            <Opcoes value={11}>Semi-realismo</Opcoes>
                            <Opcoes value={7}>Cartoon</Opcoes>
                            <Opcoes value={8}>Anime</Opcoes>
                            <Opcoes value={11}>Ilustração</Opcoes>
                            <Opcoes value={10}>Estilizado</Opcoes>
                            <Opcoes value={2}>Caricatura</Opcoes>
                        </Filtro>
                        <Filtro>
                            <Opcoes value="0">Mídia</Opcoes>
                            <Opcoes value={3}>Digital</Opcoes>
                            <Opcoes value={9}>Tradicional</Opcoes>
                        </Filtro>
                        <Filtro>
                            <Opcoes value="0">Material</Opcoes>
                            <Opcoes value={4}>Grafite</Opcoes>
                            <Opcoes value={5}>Aquarela</Opcoes>
                            <Opcoes value={6}>Acrílica</Opcoes>
                            <Opcoes value={13}>Lápis coloridos</Opcoes>
                        </Filtro>
                     </ContainerFiltroPFP>
                    <Tabela>
                        <EstiloColunas>
                            <Colunas>
                                <Categorias>Artista</Categorias>
                                <Categorias>Estilo</Categorias>
                                <Categorias>Mídia</Categorias>
                                <Categorias>Material</Categorias>
                                <Categorias>Redes sociais</Categorias>
                            </Colunas>
                            <Colunas>
                                <ColunasInfo>
                                    Raquel
                                </ColunasInfo>
                                <ColunasInfo>
                                    semi-realista
                                </ColunasInfo>
                                <ColunasInfo>
                                    Digital
                                </ColunasInfo>
                                <ColunasInfo>
                                    -
                                </ColunasInfo>
                                <ColunasInfo>
                                    Instagram(link)
                                </ColunasInfo>
                            </Colunas>
                            <Colunas>
                                <ColunasInfo>
                                    Liz
                                </ColunasInfo>
                                <ColunasInfo>
                                    anime
                                </ColunasInfo>
                                <ColunasInfo>
                                    Tradicional
                                </ColunasInfo>
                                <ColunasInfo>
                                    Grafite
                                </ColunasInfo>
                                <ColunasInfo>
                                    X(link)
                                </ColunasInfo>
                            </Colunas>
                        </EstiloColunas>
                    </Tabela>
                </EstiloTabela>
            </EstiloTudo>

        </>
    )

}
export default PaginaArtista