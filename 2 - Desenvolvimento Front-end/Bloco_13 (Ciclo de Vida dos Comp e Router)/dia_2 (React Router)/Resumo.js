// Single Page Application são página fluídas, sem necessidade de carregamento durante a navegação pela página

// props.children é uma forma de passar elementos

// App.jsx
class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
        </ComponentePai>
      </div>
    )
  }
}

// ComponentePai.jsx
const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

// Caso fosse mais de um item, seria um array de objetos composto pelos itens
class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}

// P/ instalar o react-router-dom
// npm install react-router-dom


// <<====================================================>>

// COMO ENCAPSULAR COMPONETES VIA ROUTER
// DEPOIS DE INSTALAR O ROUTER

//No App.js
import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </div>
    )
  }
}

// NO Home.js
import React, { Component } from 'react';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';
import { Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Minha homepage</h1>
         <Route path="/About" Component={About} />
         <Route path="/HowTo" Component={HowTo} />
         <Route path="/profile"><Profile /></Route>    
      </div>
    )
  }
}

// PORÉM, DESSA MANEIRA O TITULO ESTARIA SEMPRE PRESENTE. PARA EXIBIR APENAS 1:
//No App.js
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <BrowserRouter>
        <Route path="/About" Component={About} />
        <Route path="/HowTo" Component={HowTo} />
        <Route path="/profile"><Profile /></Route>    
        <Route path="/" Component={Home} />
        </BrowserRouter>
      </div>
    )
  }
}

// TODOS SE ENCAIXARIAM NO "/" DO HOME, PORTANTO, CONTINUARIA SENDO EXIBIDO. EX: /PROFILE => / ===> DÁ MATCH POIS BASTA COMPLETAR COM PROFILE E SE TORNARÁ IGUAL, DIFERENTE DE /PROFILE => /HOWTO SOLUÇÃO:
<Route exact path="/" Component={Home} />
// SÓ IRÁ RENDERIZAR SE O MATCH FOR EXATO. 


// <<====================================================>>

// PARA UTILIZAR LINKS
// ELE IRÁ EXIBIR O CONTEÚDO DE ABOUT. A DIFERENÇA DE <a> É QUE NÃO OCORRE UM CARREGAMENTO DA PÁG
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Minha homepage</h1>
         <Link to="/about"></Link>  
      </div>
    )
  }
}

// E lembre-se: palavras, imagens, até mesmo outros componentes podem ser componentes filhos do Link ! Ser filho do Link significa que, se você clicar neste filho, irá para onde o Link te direciona!

// <<====================================================>>

//PARA PASSAR PROPS VIA ROUTE
//No App.js
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <BrowserRouter>
        <Route path="/About" Component={About} />
        <Route path="/HowTo" Component={HowTo} />
        {/* IRÁ CHAMAR UMA CALLBACK NO RENDER, QUE IRÁ CHAMAR O COMP E PASSAR A PROP */}
        <Route path="/profile" render={() => <Profile name="Barbaruiva, o bucaneiro da web"/>}/>    
        <Route exact path="/" Component={Home} />
        </BrowserRouter>
      </div>
    )
  }
}

// NO Profile.js
import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      // AGORA O NOME RENDERIZADO SERÁ O PASSADO VIA PROP
      <h1>Meu perfil: {this.props.name}</h1>
    )
  }
}

// <<====================================================>>
// PASSSANDO PROPS VIA ROUTE URL

//No App.js
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <BrowserRouter>
        <Route path="/About" Component={About} />
        <Route path="/HowTo" Component={HowTo} />
        {/* PASSANDO A PROPS(É UM ARRAY) VIA PARAM DA CALLBACK. AGORA IRÁ RECEBER TODAS AS PROPS DO ROUTE. ASSIM SERÁ POSSÍVEL ACESSAR HISTORY, LOCATION, MATCH. PARA ACESSAR OS ITENS VIA PATH, MUDA-SE SUA SINTAXE*/}
        {/* HISTORY => DÁ O ACESSO DE HISTÓRICO DE NAVEGAÇÃO
          LOCATION =>
          MATCH => SERVE PARA PASSAR PARAMETRO VIA URL 
        */}
        <Route path="/profile:/ship" render={(props) => <Profile {...props} name="Barbaruiva, o bucaneiro da web"/>}/>
        {/* NA CHAVE MATCH.PARAMS HAVERÁ UMA CHAVE SHAMADA SHIP QUE IRÁ CONTER O PARÂMETRO VIA URL. EX: /PROFILE/PEROLANEGRA => MATCH: { PARAMS: { SHIP: PEROLANEGRA} }*/}
        <Route exact path="/" Component={Home} />
        </BrowserRouter>
      </div>
    )
  }
}

// NO Profile.js
import React, { Component } from 'react';

class Profile extends Component {
  //PARA ACESSAR:
  render() {
    const { ship } = this.props.match.params
    const { name } = this.props
    return (
      <h1>Meu perfil: { name }, do navio { ship }</h1>
    )
  }
}
// O QUE FOR DIGITADO NA URL SERÁ INSERIDO NO TEXTO NA PARTE DO NAVIO

// <<====================================================>>

// COMPONENTE SWITCH => TEM A FUNÇÃO DE ENCAPSULAR UM CONJUNTO DE ROTAS. EX:
<Switch>
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route path="/movies" component={Movies} />
  <Route path="/" component={Home} />
</Switch>
// TODOS SEUS FILHOS DEVEM SER ROUTE OU REDIRECT

// <<====================================================>>

// COMPONENTE REDIRECT => LEVA A APLICAÇÃO PARA DIFERENTES LOCAIS DA APLICAÇÃO. PODE ACONTECER EM CASOS DE AUTENTICAÇÃO. EX: CONTA BANCÁRIA SEM AUTENTICAÇÃO, SERÁ DIRECIONADA P/ LOGIN. O REDIRECT PODE SER UTILIZADO TAMBÉM CASO QUEIRA RESTRINGIR O ACESSO A PÁGINA
<Switch>
  <Redirect from="/PaginaSemAcesso" to="/PaginaParaRedirecionar"/>
  {/* IRÁ VERIFICAR SE USUARIOLOGADO P/ DAR ACESSO AO COMPONENTE, SE NÃO, DIRECIONA P/ ABOUT */}
  <Route path="/strictaccess">
      {usuarioLogado ? <StrictAcess /> : <Redirect to="/about" />}
  </Route>
</Switch>


// **********PARA VALIDAR UM LOGIN*********
// O SEGUINTE CÓDIGO IRÁ VERIFICAR SE AS PROPS USER E PASS PASSADOS DO APP P/ STRICT SÃO VÁLIDAS PERMITINDO OU NÃO O ACESSO A PÁG RESTRITA
//NO App.js
import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'
import StrictAcess from './components/StrictAccess'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={About} />
        <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning"/>} />
        <Route path="/strictaccess" render={() => <StrictAcess username="joao" password={123} />} />
        </Switch>
          <Link to="/">Home</Link>  
          <Link to="/about"> About</Link>  
          <Link to="/users">Users</Link>
          <Link to="/strictaccess">Access</Link>  
      </BrowserRouter>
    );
  }
}

export default App;

//NO StrictAccess
import React, { Component } from 'react';
// import Home from './components/Home';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  constructor() {
    super()
    this.state = {
      validLogin: false
    }
  }
  
  handleLogin(username, password) {
    if(username === 'joao' && password === 1234){
      this.setState({
        validLogin: true
      })
      return alert('Olá')
    }
    alert('Login Inválido')
  }


  componentWillMount() {
    const { username, password } = this.props
    this.handleLogin(username, password)
  }

  render() {
    if(!this.state.validLogin){
      return <Redirect to='/'/>
    }
    return(
      <h1>Acesso Restrito</h1>
    )
  }
}

export default StrictAccess;



// MAPA MENTAL DO CONTEÚDO:
// https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/front-end/react/react-router/img_13.2.1-c84299b20c160e6b25e7c79a5ad4b15e.png