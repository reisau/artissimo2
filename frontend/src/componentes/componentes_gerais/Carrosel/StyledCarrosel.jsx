import styled from "styled-components"

export const ContainerCarrosel = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`

export const StyledBotaoDireito = styled.button`
    width: 0; 
    height: 0; 
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 25px solid #A14A76;
    border-right: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 25px solid #8c3c65;
        border-right: none;
        background-color: transparent;
        transition-duration: 0,4;
    }
`
export const StyledBotaoEsquerdo = styled.button`
    width: 0; 
    height: 0; 
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 10px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: none ;
    border-right: 25px solid #A14A76;
    background-color: transparent;
    cursor: pointer;

    &:hover{
         margin-right: 10px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: none ;
        border-right: 25px solid #8c3c65;
        background-color: transparent;
    }
`