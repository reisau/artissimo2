import styled from "styled-components"

export const TextoAdd = styled.h3`
    color: #A14A76;
`
export const HeaderConfigs = styled.header`
    height: 10vh;
    background-color: #A14A76;
`
export const LabelConfigs = styled.label`
    color: #A14A76;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 20px;
    font-weight: 50px;
`
export const DivConfigs = styled.div`
    display:flex;
    margin-top:10px;
    flex-direction:row;
      @media only screen and (max-width: 414px){
        flex-direction:column;
  }
`
export const ImgRedes = styled.img`
    height: 20px;
    width: 20px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
`
export const InputConfigs = styled.input`
    font-style: normal;
    color: black;
    margin: 10px;
    padding: 5px;
    display: block;
    border: none;
    border-radius: 10px;
    height: 20px;
    width: 300px;
`
export const DivAddImg = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom: 60vh;
`
export const DivBotaoConfigs = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: end;
`
export const BotaoConfigs = styled.button`
    font-family: Josefin sans;
    display: block;
    padding: auto;
    height: 30px;
    width: 200px;
    margin-top: 15px;
    margin-left: 5px;
    margin-right: 5px;
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