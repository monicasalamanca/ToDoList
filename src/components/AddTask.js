import React from 'react';

class AddTask extends React.Component {

  taskInput = React.createRef();

  addTask = (e) => {
    if (e.key === 'Enter') {
      console.log(this.taskInput.current.value);
    }
  }

  render() {
    return (
      <input 
        type="text" 
        ref={this.taskInput}
        placeholder="Add Task" 
        onKeyDown={this.addTask} />
    )
  }
}

export default AddTask;