import React from 'react';
import Task from './components/Task';
import AddTaskTodo from './components/AddTaskTodo';
import './App.scss';

class App extends React.Component {
  state = {
    tasksTodo: {},
    tasksDone: {}
  };

  addTaskTodo = (taskTodo) => {
    // 1. Take a copy of the existing state
    const tasksTodo = { ...this.state.tasksTodo };
    // 2. Add our new task to that variable
    tasksTodo[`task${Date.now()}`] = taskTodo;
    // 3. set the new task object to state
    this.setState({
      tasksTodo
    });
  };

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <h1>Task List</h1>
          <ul className="todo-list">
            {Object.keys(this.state.tasksTodo).map(key => <Task key={key} taskDets={this.state.tasksTodo[key]} />)}
          </ul>
          <AddTaskTodo addTaskTodo={this.addTaskTodo} />
        </div>
        <div className="done-wrapper">
          <h1>Done List</h1>
          <ul className="done-list">

          </ul>
        </div>
      </div>
    );
  }
}

export default App;
