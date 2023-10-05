import {HeaderC, LogoC } from "./StyledHeader.jsx"
import logo from "../../../assets/imagens/logo.png"
import React from "react"
import {useNavigate} from "react-router-dom"

function Header() {
    const navigate = useNavigate()
    const Voltar = () => {
      navigate(-1)
    }
    return (
        <HeaderC>
            <LogoC src={logo} onClick={Voltar} alt=""/>
        </HeaderC>
    )
}

export default Header