// Teste pagina de login
// dev Alexandre de oliveira luta
//11/02/2022

/*
OLÁ, EU QUERIA DIZER QUE GOSTEI MUITO DE FAZER O TESTE, E TAMBÉM PRECISO SER SINCERO,
EU AINDA NÃO TENHO CONHECIMENTO COM O REDUX E O SAGA, E TAMBEM AINDA NÃO TENHO MUITA HABILIDADE COM 
REACT JS, POIS ATUALMENTE ESTOU UTILIZANDO NOS PROJETOS PROFISSIONAIS HTML CSS JS PHP, SENDO ASSIM
EU TIVE UMA DIFICULDADE EM CODAR A PARTE DO OLHO PARA VISUALIZAR A SENHA.
  MAS ACREDITO QUE POSSO APRENDER MUITO NA EMPRESA E CRESCER PROFISSIONALMENTE.

  OBRIGADO!
*/

import './App.css';

function App() {
  return (
    <body>
      <div className="box">
        <div className="logo">
          <img src={"https://www.xtrategie.com.br/wp-content/uploads/2019/08/logo_xtrategie.png"} />
        </div>
        <div className="linha"></div>
        <div className="containerlogin">
          <h1>Faça seu login</h1>
          <form action="App.js" method="post">
            <div className="inputs">
              <div className="display">
                <input placeholder="E-mail" type="email" name="email" id="email" requerid />
              </div><br></br>
              <div className="display">
                <input placeholder="Senha" type="password" name="password" id="password" requerid />
              </div>
            </div>
            <div className="btn">
              <button type="submit" name="btn" id="btn">ENTRAR</button>
            </div>
          </form>
        </div>
      </div>
      <div className="cop">
        <img src={"https://img.icons8.com/material-outlined/50/000000/copyright.png"} />
        <label>Softwere Powered by xtrategie</label><br></br>
        <p>2009-2021</p>
      </div>
    </body>
  );
}

export default App;
