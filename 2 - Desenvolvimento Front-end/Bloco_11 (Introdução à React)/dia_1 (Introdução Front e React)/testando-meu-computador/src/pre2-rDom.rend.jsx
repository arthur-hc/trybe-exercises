// A INTEREÇÃO COM DOM NO REACT

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
  //ELEMENT É O ITEM CRIADO. 'root' É A DIV ONDE SERÁ INSERIDA ESSES ELEMENTOS
}

setInterval(tick, 1000);

// A CADA 1 SEG, A FUNC TICK É EXECUTADA, GERANDO UM NOVO HORÁRIO. APÓS ISSO, CAPTURA-SE O LOCAL E ADICIONA OS NOVOS ELEMENTOS
