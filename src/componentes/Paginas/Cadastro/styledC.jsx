import styled from "styled-components"

export const Coluna = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 10px;
    align-content: space-around;

`
 export const ContainerC = styled.div`
    height: 400px;
    width: 300px;
    background-color: #FBC2B5;
    margin-left: auto;
    margin-right: auto;
    margin-top:20px;
    border-radius: 30px;
    padding: 20px;
`
export const DivTudo = styled.div`
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display:flex;
    justify-content: space-around;
    flex-direction: row-reverse;
`
export const DivArtista = styled.div`
    height: 430px;
    width: 700px;
    background-color: #FBC2B5;
    margin-left: 5vh;
    margin-right: auto;
    margin-top:20px;
    padding: 5px;    
    display:flex;
    flex-direction:row;
    border-radius: 30px;
    &:not(:target){
        display:none;
    }
`
export const DivEstilos = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-right: 1px solid #A14A76;
`
export const DivRedes = styled.div`
    margin-left: 20px;
    margin-right: 20px;

`
export const FormEstilos = styled.form`
    padding: 10px;
    display:flex;
    justify-content: space-around;
    flex-flow: row wrap;
    flex-direction: row;
    align-items: baseline;
    align-content: center;
`

export const CheckboxEstilo = styled.input`
    font-size: 5vh;
`

export const FormC = styled.form`
    padding: 10px;
    display:flex;
    flex-direction: column;
`

export const EscolhaC = styled.a`
    text-decoration:none;
    font-style: normal;
    font-weight: 500;
    color: #A14A76;
    padding-top: 30px;
    display: inline;
    padding: 40px;
    cursor: pointer;

    &:hover{
        text-decoration-line: underline;
        text-d7ecoration-color: #8c3c65;
        color: #8c3c65;
    }
`
export const TituloC = styled.h2`
    font-style: normal;
    font-weight: 600;
    text-align: center;
    color: #A14A76;
    display: block;
`
export const LabelC = styled.label`
    font-style: normal;
    color: #A14A76;
    margin: 5px;
`
export const InputInfo = styled.input`
    font-style: normal;
    color: black;
    margin: 10px;
    padding: 5px;
    display: block;
    border: none;
    border-radius: 10px;
    height: 20px;
    width: 250px;
`

export const InputBotao = styled.button`
    font-family: Josefin sans;
    display: block;
    padding: auto;
    height: 30px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    background-color: #F786AA;
    cursor: pointer;
    font-size: 17px;
    color:white;
    border-radius: 10px;
    border: none;

    &:hover{
        background-color: #eb7197;
    }
`
export const InputBotaoFormulario = styled.button`
    font-family: Josefin sans;
    display: block;
    padding: auto;
    height: 30px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 200px;
    background-color: #F786AA;
    cursor: pointer;
    font-size: 17px;
    color:white;
    border-radius: 10px;
    border: none;

    &:hover{
        background-color: #eb7197;
    }
`


