import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from "../../Paginas/Cadastro/Cadastro.js"
import Home from "../../Paginas/Home/Home.js"
import React from "react"
import  { GlobalStyle, CorFundo } from "../../../styledGlobal.jsx"

function Rota() {
    return (
        <>
            <CorFundo>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="cadastro" element={<Cadastro />} />
                        <Route path="home" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </CorFundo>
        </>

    )
}

export default Rota