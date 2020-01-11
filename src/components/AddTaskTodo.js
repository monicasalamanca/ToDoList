import React from 'react';

class AddTaskTodo extends React.Component {

  taskInput = React.createRef();

  addTaskTodo = (e) => {
    var task = {}
    if (e.keyCode === 13) {
      task = {
        taskText: this.taskInput.current.value
      }
      this.props.addTaskTodo(task);
      // Clear the input
      this.taskInput.current.value = "";
    }
  }

  render() {
    return (
      <input 
        type="text" 
        className="add-task-input"
        ref={this.taskInput}
        placeholder="Add Task" 
        onKeyUp={this.addTaskTodo} />
    )
  }
}

export default AddTaskTodo;