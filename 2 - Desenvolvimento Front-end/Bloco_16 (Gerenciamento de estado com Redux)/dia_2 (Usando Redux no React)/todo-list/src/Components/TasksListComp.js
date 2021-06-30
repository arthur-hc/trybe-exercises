import React from 'react';
import { connect } from 'react-redux';

class TaskListCom extends React.Component {
  render(){
    const { list } = this.props;
    return(
      <div>
        <ul>
          {list.map((task) => <li>{task}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.taskReducer,
})

export default connect(mapStateToProps) (TaskListCom);
