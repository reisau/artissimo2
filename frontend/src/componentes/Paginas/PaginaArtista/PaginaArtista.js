import React from "react"
import logo from "../../../assets/imagens/logo.png"
import {useNavigate} from "react-router-dom"
import {DivConfig, DivLogo, Configuracoes, Opcoes, Filtro, TextoLogo, LogoArtista, ContainerFiltroPFP, ContainerLogo, Tabela, EstiloTudo, EstiloColunas, Categorias, Colunas, ColunasInfo, EstiloTabela } from "./StyledArtista"


function PaginaArtista() {
    const navigate = useNavigate()
    const Voltar = () => {
      navigate(-2)
    }
    const gotoConfiguracoes = () => {
      navigate('/configuracoes')
    }
    return (
        <>
            <EstiloTudo>
                <ContainerLogo>
                    <DivLogo>
                        <LogoArtista src={logo} onClick={Voltar}/>
                        <TextoLogo onClick={Voltar}>ARTÍSSIMO</TextoLogo>
                    </DivLogo>
                    <DivConfig>
                        <Configuracoes onClick={gotoConfiguracoes}>Configurações</Configuracoes>
                    </DivConfig>
                </ContainerLogo>
                

                <EstiloTabela>
                    <ContainerFiltroPFP> 
                        <Filtro>
                            <Opcoes value="0">Estilo</Opcoes>
                            <Opcoes value="realismo">Realismo</Opcoes>
                            <Opcoes value="semirealismo">Semi-realismo</Opcoes>
                            <Opcoes value="cartoon">Cartoon</Opcoes>
                            <Opcoes value="anime">Anime</Opcoes>
                        </Filtro>
                        <Filtro>
                            <Opcoes value="0">Mídia</Opcoes>
                            <Opcoes value="Digital">Digital</Opcoes>
                            <Opcoes value="Tradicional">Tradicional</Opcoes>
                        </Filtro>
                        <Filtro>
                            <Opcoes value="0">Material</Opcoes>
                            <Opcoes value="Grafite">Grafite</Opcoes>
                            <Opcoes value="Aquarela">Aquarela</Opcoes>
                            <Opcoes value="Acrílica">Acrílica</Opcoes>
                            <Opcoes value="Lápis coloridos">Lápis coloridos</Opcoes>
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