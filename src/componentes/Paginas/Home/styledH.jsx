import styled from "styled-components"

export const HeaderHome = styled.header`
     width: 100%;
    height: 50px;
     z-index: 9999;
    background-color: #F786AA; 
`

export const TrocaPagina = styled.button`
    float: right;
    justify-content:flex-end;
    display: inline;
    margin: 15px;
    padding-top: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #FFECE8;
    cursor: pointer;
    border:none;
    background-color:#F786AA;
    font-family: Josefin sans;

    &:hover{
      color:#FFFFFF;
    }
`

export const TituloH = styled.h1`
    color: #A14A76;
  text-decoration-line: underline;
  text-decoration-color: #A14A76;
  text-shadow: -3px 2px white;
  margin-top: 125px;
  padding-bottom: -20px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-size: 50px;
  display: inline-block;
  vertical-align: top;
`

export const ImgH = styled.img`
  display: inline-block;
  margin: 10px;
  width:300px;
  height:300px;
`
export const ContainerHLT = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #FFA8A9;
  border-radius: 0px 0px 56px 56px;
`
export const StyledCarroselContainer = styled.div`
  display: flex;
  justify-content: end;
  align-self: stretch;
  padding-top: 50px;
  margin-left: 30vh;
  @media only screen and (max-width: 1366px){
    margin-left: 20vh;
  }
`

export const LogoTituloH = styled.div`
  // position: absolute;
  top: 6%;
  padding: 0;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  justify-content: start;
  flex-direction: row;
`

export const SecaoIntroducao = styled.section`
  background-color: white;
  border-radius: 20px;
  margin: 5px 50px ;
  padding: 3px;
  width: 55%;
  height: 170px;
  text-align: center;
  display:flex;
  align-items: center;
  @media only screen and (max-width: 1366px){
    width: 45%;
  }
`

export const IntroducaoTexto = styled.p`
  padding-top: auto; 
  padding-bottom: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  
`





