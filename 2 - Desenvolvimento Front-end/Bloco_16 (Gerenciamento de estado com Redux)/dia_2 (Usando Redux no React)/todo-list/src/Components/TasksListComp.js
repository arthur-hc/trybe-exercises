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
              {listCompleted.map(({task, id}, index) => <li onDoubleClick={() => unDone(task, id)}  key={index}>{task}</li>)}
            </ul>
          </div>
        );
      case 'toDo':
          return(
            <div>
              <h2>To Do</h2>
              <ul>
                {listToDo.map(({task, id}, index) => <li onDoubleClick={() => done(task, id)} key={index}>{task}</li>)}
              </ul>
          </div>
          );
      default:
        return(
          <div>
            <h2>To Do</h2>
            <ul>
              {listToDo.map(({task, id}, index) => <li onDoubleClick={() => done(task, id)} key={index}>{task}</li>)}
            </ul>
            <h2>Completed</h2>
            <ul>
              {listCompleted.map(({task, id}, index) => <li onDoubleClick={() => unDone(task, id)} key={index}>{task}</li>)}
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
  done: (task, id) => dispatch(doneTaskAction(task, id)),
  unDone: (task, id) => dispatch(unDoneTaskAction(task, id)),
})

export default connect(mapStateToProps, mapDispatchToProps) (TaskListCom);
