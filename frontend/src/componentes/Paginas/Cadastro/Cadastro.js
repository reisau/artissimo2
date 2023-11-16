import Footer from "../../componentes_gerais/Footer/Footer"
import  Header  from "../../componentes_gerais/Header/Header.js"
import { InputBotaoFormulario, DivEstilos, DivRedes, Coluna, CheckboxEstilo, FormEstilos, DivTudo, DivArtista, ContainerC, EscolhaC, FormC, TituloC, InputBotao, InputInfo, LabelC } from "./styledC"
import React from "react"
import '@fontsource-variable/josefin-sans'
import { useNavigate } from "react-router-dom"
import {useState} from "react"
import axios from 'axios';

function Cadastro() {
    const navigate = useNavigate()
    
    const rotasInfo = (token)=>(
        localStorage.setItem('token', token),
        localStorage.setItem('email', email)
    )

    //variaveis de usuario
    const [email, setEmail] = useState("");
    const [senha, setPassword] = useState("");
    const [nome, setName] = useState("");

    // variaveis de artista
    const [x, setX] = useState(null);
    const [instagram, setInstagram] = useState(null);
    const [realismo, setRealismo] = useState(null);
    const [caricatura, setCaricatura] = useState(null);
    const [estilizado, setEstilizado] = useState(null);
    const [semiRealismo, setSemiRealismo] = useState(null);
    const [tradicional, setTradicional] = useState(null);
    const [digital, setDigital] = useState(null);
    const [aquarela, setAquarela] = useState(null);
    const [acrilica, setAcrilica] = useState(null);
    const [anime, setAnime] = useState(null);
    const [ilustracao, setIlustracao] = useState(null);
    const [cartoon, setCartoon] = useState(null);
    const [grafite, setGrafite] = useState(null);
    const [lapisColorido, setLapisColorido] = useState(null);
    const [user, setUser] = useState("cliente");
    let data = null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(user);        

        if (user === 'artista') {            
            data = {
                nome,
                email,
                senha,
                instagram,
                x,
                realismo,
                caricatura,
                estilizado,
                semiRealismo,
                tradicional,
                digital,
                aquarela,
                acrilica,
                anime,
                ilustracao,
                cartoon,
                grafite,
                lapisColorido
            };
        } else {
            data = {
                nome,
                email,
                senha,
            };
        }

        

        console.log(data);
        alert(43)
        const response = await axios.post("http://localhost:3006/api/user/create", data)
        .then(response=>{
            console.log(response.data)
            rotasInfo(response.data.token);
            navigate('/artista');
        })

    };

    return (
        <>
          <Header/>
          <DivTudo>
                <DivArtista id="mostrar" >
                    <DivEstilos>
                        <TituloC>Escolha seus estilos:</TituloC>
                        <FormEstilos>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" 
                            value={realismo}                            
                            onChange={(e) => setRealismo(realismo === null ? 1 : null)}/>
                            <LabelC> Realismo</LabelC>
                            <CheckboxEstilo type="checkbox" value={2}
                            onChange={(e) => setCaricatura(e.target.value)}/>
                            <LabelC> Caricatura</LabelC>
                            <CheckboxEstilo type="checkbox" value={estilizado}
                            onChange={(e) => setEstilizado(estilizado === null ? 10 : null )}/>
                            <LabelC> Estilizado</LabelC>
                            </Coluna>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" value={semiRealismo}
                            onChange={(e) => setSemiRealismo(semiRealismo === null ? 11 : null)}/>
                            <LabelC> Semi-realismo</LabelC>
                            <CheckboxEstilo type="checkbox" value={tradicional}
                            onChange={(e) => setTradicional(tradicional === null ? 9 : null)}/>
                            <LabelC> Tradicional</LabelC>
                            </Coluna>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" value={digital}
                            onChange={(e) => setDigital(digital === null ? 3 : null)}/>
                            <LabelC> Digital</LabelC>
                            <CheckboxEstilo type="checkbox" value={aquarela}
                            onChange={(e) => setAquarela(aquarela === null ? 5 : null)}/>
                            <LabelC> Aquarela</LabelC>
                            <CheckboxEstilo type="checkbox" value={acrilica}
                            onChange={(e) => setAcrilica(acrilica === null ? 6 : null)}/>
                            <LabelC> Acrílica</LabelC>
                            </Coluna>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" value={anime}
                            onChange={(e) => setAnime(anime === null ? 8 : null)}/>
                            <LabelC> Anime</LabelC>
                            <CheckboxEstilo type="checkbox" value={ilustracao}
                            onChange={(e) => setIlustracao(ilustracao === null ? 12 : null)}/>
                            <LabelC> Ilustração</LabelC>
                            </Coluna>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" value={cartoon}
                            onChange={(e) => setCartoon(cartoon === null ? 7 : null)}/>
                            <LabelC>Cartoon</LabelC>
                            <CheckboxEstilo type="checkbox" value={grafite}
                            onChange={(e) => setGrafite(grafite === null ? 4 : null)}/>
                            <LabelC> Grafite </LabelC>
                            </Coluna>
                            <Coluna>
                            <CheckboxEstilo type="checkbox" value={lapisColorido}
                            onChange={(e) => setLapisColorido(lapisColorido === null ? 13 : null)}/>
                            <LabelC>Lápis coloridos</LabelC>
                            </Coluna>
                        </FormEstilos>
                    </DivEstilos>
                    <DivRedes>
                <TituloC>Suas redes sociais (Link)</TituloC>
                    <LabelC>Instagram:</LabelC>
                    <InputInfo type="url"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)} />
                    <LabelC>X:</LabelC>
                    <InputInfo type="url"
                    value={x}
                    onChange={(e) => setX(e.target.value)}/>
                </DivRedes>
                
                </DivArtista>

            <ContainerC>
                    <EscolhaC href="#mostrar" value={user} 
                    onClick={(e) => setUser('artista')}>Artista
                    </EscolhaC>
                     <EscolhaC href="" value={user}
                     onClick={(e) => setUser('cliente')}>Cliente
                     </EscolhaC>
                        <FormC>
                            <TituloC>Cadastre-se</TituloC>
                            <LabelC>E-mail</LabelC>
                            <InputInfo 
                                type="email"
                                value={ email }
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <LabelC>Nome de usuário</LabelC>
                            <InputInfo 
                                type="text" 
                                value={ nome }
                                onChange={(e) => setName(e.target.value)}
                            />
                            <LabelC>Senha</LabelC>
                            <InputInfo 
                                type="password" 
                                value={ senha }
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputBotao onClick={handleSubmit}>Cadastrar</InputBotao>
                            {/* <InputBotao onClick={gotoArtista}>Cadastrar</InputBotao>                 */}
                        </FormC>
                
            </ContainerC>
            </DivTudo>
            <Footer/>
        </>
    )
}

export default Cadastro