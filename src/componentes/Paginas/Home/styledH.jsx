import styled from "styled-components"

export const DivCima = styled.div`
  display:flex;
  flex-direction:column;
`
export const HeaderHome = styled.header`
     width: 100%;
    height: 50px;
     z-index: 9999;
    background-color: #F786AA; 
    @media only screen and (max-width: 414px){
      display:flex;
      justify-content: space-between;
      flex-direction:row-reverse;
  }
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
  @media only screen and (max-width: 414px){
    margin-top: 5px;
    margin-left:auto;
    margin-right:auto;
    font-size: 40px;
  }
`

export const ImgH = styled.img`
  display: inline-block;
  margin: 10px;
  width:300px;
  height:300px;
  @media only screen and (max-width: 414px){
    margin-left:auto;
    margin-right:auto;
    width:250px;
    height:250px;
  }
`
export const ContainerHLT = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #FFA8A9;
  border-radius: 0px 0px 56px 56px;
      @media only screen and (max-width: 414px){
      display:flex;
      justify-content:center;
      height:40vh;
  }
`
export const StyledCarroselContainer = styled.div`
  display: flex;
  justify-content: end;
  align-self: stretch;
  padding-top: 50px;
  margin-left: 40vh;
  @media only screen and (max-width: 1365px){
    margin-left: 6vh;
  };
   @media only screen and (max-width: 414px){
    display:none;
   }
`

export const LogoTituloH = styled.div`
  top: 6%;
  padding: 0;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  justify-content: start;
  flex-direction: row;
    @media only screen and (max-width: 414px){
      flex-direction:column;
  }
`
export const DivBaixo = styled.div`
@media only screen and (max-width: 414px){
  display:flex;
  justify-content:center;
  margin-top:30px;
}
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
  @media only screen and (max-width: 1365px){
    width: 50%;
  }
    @media only screen and (max-width: 414px){
      width: 80%;
      height: 300px;
      margin-top: 10px;

  }
`

export const IntroducaoTexto = styled.p`
  padding-top: auto; 
  padding-bottom: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  
`





