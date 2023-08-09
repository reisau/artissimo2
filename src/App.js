// import './App.css';
import Cadastro from './componentes/Cadastro/Cadastro';
import StyledGlobal, { CorFundo } from './styledGlobal';
import Home from "./componentes/Home/Home";

function App() {
  return (
    <>
      <CorFundo>
        <StyledGlobal />
        {/* <Cadastro /> */}
        <Home/>
      </CorFundo>
    </>
  );
}
export default App;
