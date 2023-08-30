import React from "react"
import { ContainerFiltroPFP, ContainerLogo, Tabela, EstiloTudo, EstiloColunas, Categorias, Colunas, ColunasInfo, EstiloTabela } from "./StyledArtista"


function PaginaArtista() {
    return (
        <>
            <EstiloTudo>
                <ContainerLogo>logo!</ContainerLogo>
                <ContainerFiltroPFP> FILTRO</ContainerFiltroPFP>

                <EstiloTabela>
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
console.log(PaginaArtista)
export default PaginaArtista