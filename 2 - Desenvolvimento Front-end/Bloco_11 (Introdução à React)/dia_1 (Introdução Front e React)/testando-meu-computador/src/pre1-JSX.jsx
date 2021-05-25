// Exemplos de REACT
const element = <h1>Hello, world!</h1>; //Observe a união de HTML com JS

// Criação de elemento com REACT
const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

// Utilizando Func
function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

// Adicionando em uma div...
const container = <div>{element}</div>;

// Adicionando classe...
const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;


//<===============================================================>
// FIXAÇÃO
const textJSX =  'Hello, JSX';
const classe = 'conhecendo-JSX';
const element = <h1 className={classe}>{textJSX}</h1>;
return element;