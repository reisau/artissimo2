import { Routes, Route } from "react-router-dom"
import Cadastro from "../../Paginas/Cadastro/Cadastro.js"
import PaginaArtista from "../../Paginas/PaginaArtista/PaginaArtista"
import Home from "../../Paginas/Home/Home.js"
import Login from "../../Paginas/Login/Login"
import React from "react"

function Rota() {

    return (
        <>

            <Routes>
                <Route index element={<Home />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="artista" element={<PaginaArtista/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>

        </>

    )
}

export default Rota