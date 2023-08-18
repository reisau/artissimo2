import {HeaderC, LogoC } from "./StyledHeader.jsx"
import logo from "../../../assets/imagens/logo.png"
import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <HeaderC>
            <Link to="/home"><LogoC src={logo} alt=""/></Link>
        </HeaderC>
    )
}

export default Header