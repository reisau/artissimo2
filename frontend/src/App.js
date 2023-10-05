
import {GlobalStyle, CorFundo} from './styledGlobal';
import React from "react"
import Rota from "./componentes/componentes_gerais/Rotas/Rotas"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
      <CorFundo>
        <GlobalStyle />
        <Rota/>
      </CorFundo>
      </BrowserRouter>
    </>
  );
}
export default App;
