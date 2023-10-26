import { Routes, Route } from "react-router-dom"
import Cadastro from "../../Paginas/Cadastro/Cadastro.js"
import PaginaArtista from "../../Paginas/PaginaArtista/PaginaArtista"
import Home from "../../Paginas/Home/Home.js"
import LoginPagina from "../../Paginas/Login/LoginPagina.js"
import Configs from "../../Paginas/Configs/Configs.js"
import Erro from '../../Paginas/Erro/Erro.js'
import React from "react"


function Rota() {

    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="artista" element={<PaginaArtista/>}/>
                <Route path="login" element={<LoginPagina/>}/>
                <Route path="configuracoes" element={<Configs/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </>

    )
}

export default Rota