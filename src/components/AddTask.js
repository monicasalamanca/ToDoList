import React from 'react';

class AddTask extends React.Component {

  taskInput = React.createRef();

  addTask = (e) => {
    var task = {}
    if (e.keyCode === 13) {
      task = {
        taskText: this.taskInput.current.value
      }
      this.props.addTask(task);
      // Clear the input
      this.taskInput.current.value = "";
    }
  }

  render() {
    return (
      <input 
        type="text" 
        ref={this.taskInput}
        placeholder="Add Task" 
        onKeyUp={this.addTask} />
    )
  }
}

export default AddTask;