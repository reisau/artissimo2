import logo from "../../assets/imagens/logo.png"
import './Cadastro.css'
function Cadastro() {
    return (
        <>
            <header class="HeaderC">
                <img class="logop" src={logo} alt="" />
            </header>

            <div class="ContainerC">
                <form>
                    <p>Artista</p> <p>Cliente</p>
                    <h2>Cadastre-se</h2>
                    <label>E-mail</label>
                    <input type="email"/>
                    <label>Nome de usuário</label>
                    <input typer="text" />
                    <label>Senha</label>
                    <input type="password" />
                    <input type="submit" value="Cadastrar" class="botao"/>                
                    </form>

            </div>
            <footer/>
        </>
    )
}

export default Cadastro