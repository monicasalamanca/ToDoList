import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <li className="single-task">
        {this.props.taskDets.taskText}
      </li>
    )
  }
}

export default Task;