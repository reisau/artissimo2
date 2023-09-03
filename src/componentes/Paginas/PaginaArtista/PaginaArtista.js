import React from "react"
import logo from "../../../assets/imagens/logo.png"
import {useNavigate} from "react-router-dom"
import {Opcoes, Filtro, TextoLogo, LogoArtista, ContainerFiltroPFP, ContainerLogo, Tabela, EstiloTudo, EstiloColunas, Categorias, Colunas, ColunasInfo, EstiloTabela } from "./StyledArtista"


function PaginaArtista() {
    const navigate = useNavigate()
    const Voltar = () => {
      navigate(-2)
    }
    return (
        <>
            <EstiloTudo>
                <ContainerLogo>
                    <LogoArtista src={logo} onClick={Voltar}/>
                    <TextoLogo onClick={Voltar}>ARTÍSSIMO</TextoLogo>
                </ContainerLogo>
                

                <EstiloTabela>
                    <ContainerFiltroPFP> 
                        <Filtro>
                            <Opcoes value="hide">Filtro</Opcoes>
                            <Opcoes value="realismo">Realismo</Opcoes>
                            <Opcoes value="semirealismo">Semi-realismo</Opcoes>
                            <Opcoes value="cartoon">Cartoon</Opcoes>
                            <Opcoes value="anime">Anime</Opcoes>
                            <Opcoes value="tradicional">Tradicional</Opcoes>
                        </Filtro>
                     </ContainerFiltroPFP>
                    <Tabela>


                        <EstiloColunas>
                            <Colunas>
                                <Categorias>Artista</Categorias>
                                <Categorias>Estilo</Categorias>
                            </Colunas>
                            <Colunas>
                                <ColunasInfo>
                                    Raquel
                                </ColunasInfo>
                                <ColunasInfo>
                                    semi-realista
                                </ColunasInfo>
                            </Colunas>
                            <Colunas>
                                <ColunasInfo>
                                    Liz
                                </ColunasInfo>
                                <ColunasInfo>
                                    anime
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