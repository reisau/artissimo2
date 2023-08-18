import Cadastro from "./componentes/Paginas/Cadastro/Cadastro.js"
import {GlobalStyle, CorFundo} from './styledGlobal';
import React from "react"
import Rota from "./componentes/componentes_gerais/Rotas/Rotas"
import Home from "./componentes/Paginas/Home/Home.js";


function App() {
  return (
    <>
      <CorFundo>
        <GlobalStyle />
        <Rota/>
        <Cadastro />
        <Home/>
      </CorFundo>
    </>
  );
}
export default App;
