import React, { useState } from "react"
import logo from "../../../assets/imagens/logo.png"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

import { DivConfig, DivLogo, Configuracoes, Opcoes, Filtro, TextoLogo, LogoArtista, ContainerFiltroPFP, ContainerLogo, Tabela, EstiloTudo, EstiloColunas, Categorias, Colunas, ColunasInfo, EstiloTabela } from "./StyledArtista"


function PaginaArtista(){
    const navigate = useNavigate()
        const [usuarios, setUsuarios] = useState([])
        const [realismo, setRealismo] = useState(null);
        const [caricatura, setCaricatura] = useState(null);
        const [estilizado, setEstilizado] = useState(null);
        const [semiRealismo, setSemiRealismo] = useState(null);
        const [tradicional, setTradicional] = useState(null);
        const [digital, setDigital] = useState(null);
        const [aquarela, setAquarela] = useState(null);
        const [acrilica, setAcrilica] = useState(null);
        const [anime, setAnime] = useState(null);
        const [ilustracao, setIlustracao] = useState(null);
        const [cartoon, setCartoon] = useState(null);
        const [grafite, setGrafite] = useState(null);
        const [lapisColorido, setLapisColorido] = useState(null);

        const logOut = () => (
            localStorage.removeItem('token'),
            localStorage.removeItem('email'),
            navigate('/')
        )

        useEffect(() => {
            const token = localStorage.getItem('token')
            if (!token) {
                navigate('/')
            }
        }, [navigate])

        const gotoConfiguracoes = () => {
            navigate('/configuracoes')
        }

    const fetchUsuarios = async () => {
        const id = localStorage.getItem('@Auth:id');
        const response = await axios.get("http://localhost:3006/api/user/" + id);

        if(response.data.success) {
            setUsuarios(response.data.data)
        }        
    }

    useEffect(() => {
        fetchUsuarios()
    }, [])

    console.log(usuarios);

    return (
        <>
            <EstiloTudo>
                <ContainerLogo>
                    <DivLogo>
                        <LogoArtista src={logo} onClick={logOut} />
                        <TextoLogo onClick={logOut}>ARTÍSSIMO</TextoLogo>
                    </DivLogo>
                    <DivConfig>
                        <Configuracoes onClick={gotoConfiguracoes}>Configurações</Configuracoes>
                    </DivConfig>

                </ContainerLogo>


                <EstiloTabela>
                    <ContainerFiltroPFP>
                        <Filtro>
                            <Opcoes>Estilo</Opcoes>
                            <Opcoes  value={realismo}                            
                            onChange={(e) => setRealismo(1)}>Realismo</Opcoes>
                            <Opcoes value={11}>Semi-realismo</Opcoes>
                            <Opcoes value={7}>Cartoon</Opcoes>
                            <Opcoes value={8}>Anime</Opcoes>
                            <Opcoes value={12}>Ilustração</Opcoes>
                            <Opcoes value={10}>Estilizado</Opcoes>
                            <Opcoes value={2}>Caricatura</Opcoes>
                        </Filtro>
                        <Filtro>
                            <Opcoes>Mídia</Opcoes>
                            <Opcoes value={3}>Digital</Opcoes>
                            <Opcoes value={9}>Tradicional</Opcoes>
                        </Filtro>
                        <Filtro>
                            <Opcoes>Material</Opcoes>
                            <Opcoes value={4}>Grafite</Opcoes>
                            <Opcoes value={5}>Aquarela</Opcoes>
                            <Opcoes value={6}>Acrílica</Opcoes>
                            <Opcoes value={13}>Lápis coloridos</Opcoes>
                        </Filtro>
                        <Configuracoes>Pesquisar</Configuracoes>
                    </ContainerFiltroPFP>
                    <Tabela>
                        <EstiloColunas>
                            <Colunas>
                                <Categorias>Artista</Categorias>
                                <Categorias>Categorias</Categorias>
                                <Categorias>E-mail</Categorias>
                                <Categorias>Twitter</Categorias>
                                <Categorias>Instagram</Categorias>
                            </Colunas>
                            
                            {usuarios.map((usuario) => {
                                return (
                                    <>
                                        <Colunas>
                                            <Categorias>{usuario.nome}</Categorias>
                                            <Categorias>{usuario.categoria}</Categorias>
                                            <Categorias>{usuario.email}</Categorias>
                                            <Categorias>{usuario.twitter}</Categorias>
                                            <Categorias>{usuario.instagram}</Categorias>
                                        </Colunas>
                                    </>
                                )
                            })}
                            
                              
                        </EstiloColunas>
                    </Tabela>
                </EstiloTabela>
            </EstiloTudo>

        </>
    )
}
export default PaginaArtista