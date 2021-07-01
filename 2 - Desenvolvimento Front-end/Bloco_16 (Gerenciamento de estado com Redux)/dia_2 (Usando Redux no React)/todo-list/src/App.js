import './App.css';
import InputComp from './Components/InputComp';
import TaskListComp from './Components/TasksListComp'

function App() {
  return (
    <div className="flex-colum-center">
      <h1>To Do List</h1>
      <InputComp />
      <TaskListComp />
    </div>
  );
}

export default App;
