import React from 'react';
import { connect } from 'react-redux';
import { doneTaskAction, unDoneTaskAction } from '../Actions'

class TaskListCom extends React.Component {
  render(){
    const { listToDo, listCompleted, filter, done, unDone } = this.props;

    switch (filter) {
      case 'completed':
        return(
          <div>
            <h2>Completed</h2>
            <ul>
              {listCompleted.map((task, index) => <li onDoubleClick={({target}) => unDone(target.innerText)}  key={index}>{task}</li>)}
            </ul>
          </div>
        );
      case 'toDo':
          return(
            <div>
              <h2>To Do</h2>
              <ul>
                {listToDo.map((task, index) => <li onDoubleClick={({target}) => done(target.innerText)} key={index}>{task}</li>)}
              </ul>
          </div>
          );
      default:
        return(
          <div>
            <h2>To Do</h2>
            <ul>
              {listToDo.map((task, index) => <li onDoubleClick={({target}) => done(target.innerText)} key={index}>{task}</li>)}
            </ul>
            <h2>Completed</h2>
            <ul>
              {listCompleted.map((task, index) => <li onDoubleClick={({target}) => unDone(target.innerText)} key={index}>{task}</li>)}
            </ul>
        </div>
        );
    }
    
    
  }
}

const mapStateToProps = (state) => ({
  listToDo: state.taskReducer.tasksToDo,
  listCompleted: state.taskReducer.tasksCompleted,
  filter: state.taskReducer.filter
})

const mapDispatchToProps = (dispatch) => ({
  done: (task) => dispatch(doneTaskAction(task)),
  unDone: (task) => dispatch(unDoneTaskAction(task)),
})

export default connect(mapStateToProps, mapDispatchToProps) (TaskListCom);
