import React from 'react';

class Task extends React.Component {

  currentTask = React.createRef();

  addTaskDone = (e) => {
    this.props.addTaskDone(this.props.taskKey);
  }

  render() {
    return (
      <li 
        className="single-task"
        ref={this.currentTask}>
        {this.props.taskDets.taskText}
        <button onClick={this.addTaskDone}>
          {(this.props.action === 'doing' ? <i className="far fa-trash-alt"></i> : '')}
          
        </button>
      </li>
    )
  }
}

export default Task;