import styled from 'styled-components'

export const ContainerLogo = styled.div`
    height: 100vh;
    width: 30vh;
    background-color:#FFA8A9;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    
`
export const LogoArtista = styled.img`
    widht: 10vh;
    height: 10vh;
`
export const TextoLogo = styled.h1`
    font-size: 14px;
    padding-left: 10px;
    padding-top: 20px;
    color: #A14A76;
    text-decoration-line: underline;
    text-decoration-color: #A14A76;
    text-shadow: -1px 1px white;
`

export const ContainerFiltroPFP = styled.div`
    background-color: #FBC2B5;
    height: 60px;
    align-self: stretch;
    display:flex;
    justify-content:center;
`
export const Filtro = styled.select`
    border:none;
    font-family: Josefin sans;
    width: 90%;
    height: 30px;
    border-radius: 20px;
    padding-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
    color: #F786AA;
    cursor: pointer;
`
export const Opcoes = styled.option`
    padding:10px;
    border: none;
`

export const Tabela = styled.table`
    margin: 10px;
    background-color: white;
    border-radius: 26px;
    display:flex;
    flex-direction:column;
    align-self: center;
`

export const EstiloTudo =styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;

`
export const EstiloTabela = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
    justify-content: flex-start;
    width: 100%;
` 

export const EstiloColunas = styled.div`
    margin: 5px;
    
`
export const Categorias = styled.th`
    color: #A14A76;
    border-bottom: 1px solid #A14A76;
    padding-left: 100px;
    padding-right: 100px;
    background-color: #ffffff;
    
`

export const Colunas = styled.tr`
    border: 1px solid #A14A76;
`
export const ColunasInfo = styled.td`
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 5px;
    padding-bottom: 5px;
`