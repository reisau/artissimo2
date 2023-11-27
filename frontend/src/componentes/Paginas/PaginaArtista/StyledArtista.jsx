import styled from 'styled-components'

export const ContainerLogo = styled.div`
    height: 100vh;
    width: 30vh;
    background-color:#FFA8A9;
    display: flex;
    flex-direction: column;
      @media only screen and (max-width: 414px){
        width: 100%;
        height: 60px;
        flex-direction:row;
        justify-content:space-between;
  }

`
export const DivLogo = styled.div`
    display: flex;
    flex-direction: row;
      @media only screen and (max-width: 414px){
        margin-left:10px;
        margin-right:70px;
  }
`
export const LogoArtista = styled.img`
    width: 10vh;
    height: 10vh;
    cursor: pointer;
      @media only screen and (max-width: 414px){
        width: 7vh;
        height: 7vh;
        margin-top:auto;
        margin-bottom:auto;
  }
`
export const TextoLogo = styled.h1`
    font-size: 14px;
    margin-left: 10px;
    margin-top: 23px;
    align-self: start;
    color: #A14A76;
    text-decoration-line: underline;
    text-decoration-color: #A14A76;
    text-shadow: -1px 1px white;
    cursor: pointer;
`

export const ContainerFiltroPFP = styled.div`
    background-color: #FBC2B5;
    height: 60px;
    align-self: stretch;
    display:flex;
    justify-content: space-around;
      @media only screen and (max-width: 414px){

  }
`
export const Filtro = styled.select`
    border:none;
    font-family: Josefin sans;
    width: 90%;
    height: 30px;
    margin: 20px;
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
      @media only screen and (max-width: 414px){
        display:none;
  }
`

export const EstiloTudo =styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
      @media only screen and (max-width: 414px){
        flex-direction:column;
  }

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
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #ffffff;
`

export const Colunas = styled.tr`
    border: 1px solid #A14A76;
`
export const ColunasInfo = styled.td`
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
`
export const DivConfig = styled.div`
    margin-left: auto;
    margin-right: auto;
      @media only screen and (max-width: 414px){

  }
    
`
export const Configuracoes = styled.button`
    font-family: Josefin sans;
    display: block;
    margin-top: 15px;
    padding: auto;
    height: 30px;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    background-color: #F786AA;
    cursor: pointer;
    font-size: 16px;
    color:white;
    border-radius: 10px;
    border: none;

    &:hover{
        background-color: #eb7197;
    };
      @media only screen and (max-width: 414px){
        margin-top:15px;
  }
`