import React from 'react';
import { connect } from 'react-redux';
import addTask from '../Actions'

class InputComp extends React.Component {
  constructor() {
    super()
    this.state = {task: ''};
  }

  render() {
    const { task } = this.state;
    const { add } = this.props;
    const handleChange = ({target}) => {
      this.setState({ task: target.value})
    }
    const submit = () => {
      add(task)
      this.setState({task:''})
    }
    return (
      <div className="div-app">
        <input onChange={handleChange} value={ task } />
        <button onClick={() => submit()}>Adiconar</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (task) => dispatch(addTask(task))
});

export default connect(null, mapDispatchToProps) (InputComp)