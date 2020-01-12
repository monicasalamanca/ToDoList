import React from 'react';

class Task extends React.Component {

  currentTask = React.createRef();

  addTaskDone = (e) => {
    this.props.addTaskDone(this.props.taskKey);

    console.log(this.props.taskKey);
  }

  render() {
    return (
      <>
        <li 
          className="single-task"
          ref={this.currentTask}>
          {this.props.taskDets.taskText}
        </li>
        <button onClick={this.addTaskDone}><i className="far fa-trash-alt"></i></button>
      </>
    )
  }
}

export default Task;