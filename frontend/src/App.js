
import {GlobalStyle, CorFundo} from './styledGlobal';
import React from "react"
import Rota from "./componentes/componentes_gerais/Rotas/Rotas"
import { BrowserRouter } from "react-router-dom";

function App() {
  //map
  // const novoArtista = [
  //   {
  //     id: 1,
  //   nome: "Raquel"
  //   },
  //   {id: 2,
  //   nome: "Raquel2"
  //   }
  // ]

  // const novaLista = novoArtista.map((artista)=>{
  //   return(
  //     <div key={artista.id}>
  //         <p>{artista.nome}</p>

  //     </div>
  //   )
  // })
  return (
    <>
    {/* {novaLista} */}
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
