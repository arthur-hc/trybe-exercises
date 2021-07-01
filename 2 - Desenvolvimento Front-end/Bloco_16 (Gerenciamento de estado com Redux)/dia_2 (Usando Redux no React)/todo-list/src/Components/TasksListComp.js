import React from 'react';
import { connect } from 'react-redux';
import { doneTaskAction, unDoneTaskAction } from '../Actions'

class TaskListComp extends React.Component {
  render(){
    const { listToDo, listCompleted, filter, done, unDone } = this.props;

    switch (filter) {
      case 'completed':
        return(
          <div className="flex-colum-center">
            <h2>Completed</h2>
            <ul>
              {listCompleted.map(({task, id}, index) => <li className="done" onDoubleClick={() => unDone(task, id)}  key={index}>{task}</li>)}
            </ul>
          </div>
        );
      case 'toDo':
          return(
            <div className="flex-colum-center">
              <h2>To Do</h2>
              <ul>
                {listToDo.map(({task, id}, index) => <li onDoubleClick={() => done(task, id)} key={index}>{task}</li>)}
              </ul>
          </div>
          );
      default:
        return(
          <div className="flex-colum-center">
            <h2>To Do</h2>
            <ul>
              {listToDo.map(({task, id}, index) => <li onDoubleClick={() => done(task, id)} key={index}>{task}</li>)}
            </ul>
            <h2>Completed</h2>
            <ul>
              {listCompleted.map(({task, id}, index) => <li className="done" onDoubleClick={() => unDone(task, id)} key={index}>{task}</li>)}
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

export default connect(mapStateToProps, mapDispatchToProps) (TaskListComp);
