import React from 'react';
import './App.css';
import Task from './tasklist'
import MyName from './Component'

const tarefas = ['olhar o mar', 'pegar a prancha', 'surfar']
const createList = () => {
  return tarefas.map((tarefa) => Task(tarefa))
}

// PS: ****APÓS O RETURN, SÓ É PERMITIDO 1 PAI. CASO HAJA MAIS DE UM ELEMENTO, ARMAZENE-OS EM UMA DIV/CONTAINER/ETC
class App extends React.Component {
  render () {
    return <div>
      <MyName />
      {Task('Tenho vontade de surfar?')}
      {createList()}
    </div>
  }
}

export default App;
