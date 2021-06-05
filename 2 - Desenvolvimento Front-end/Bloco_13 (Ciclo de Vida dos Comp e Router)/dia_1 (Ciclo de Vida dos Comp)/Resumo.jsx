// Fases do ciclo de vida do React

// componentDidMount => executado depois da montagem
// componentDidUpdate => executado após cada atualização
// componentWillUnmount => executado ao fim do ciclo de vida do componente

// Fases do Componente

// Inicialização ={ 
//   => Constructor - recebe as props e define o estado
// }

// Motagem ={
//   => Render
//   => React atualiza o DOM e referencias
//   => componentDidMount -  dispara uma ou mais ações após comp ser inserido no DOM
// }

// Atualizaçãp = {
//   => New props / set­State() / force­Update()
//   => Render
//   => React atualiza o DOM e referencias
//   => componentDidUpdate - dispara uma ou mais ações após o comp ser atualizado

//   *** >>> shouldComponentUpdate <<< *** menos comum na fase de atualização - possibilita autorizar ou não o componente a atualizar
// }

// Desmontagem = {
//   => componentWillUnmount - dispara uma ou mais ações após o comp ser desmontado
// }
