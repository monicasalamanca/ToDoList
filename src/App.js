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

  addTaskDone = (key) => {
    // 1. Take a copy of the existing state
    const tasksTodo = { ...this.state.tasksTodo };
    const tasksDone = { ...this.state.tasksDone };
    // 2. Add the task to done
    tasksDone[key] = tasksTodo[key];
    // 3. remove task from tasksTodo
    //tasksTodo[key] = null;
    delete tasksTodo[key];
    // 3. update state
    this.setState({
      tasksTodo,
      tasksDone
    });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <h1>Task List</h1>
          <ul className="todo-list">
            {Object.keys(this.state.tasksTodo).map(key => <Task key={key} taskDets={this.state.tasksTodo[key]} addTaskDone={this.addTaskDone} taskKey={key} action="doing" />)}
          </ul>
          <AddTaskTodo addTaskTodo={this.addTaskTodo} />
        </div>
        <div className="done-wrapper">
          <h1>Done List</h1>
          <ul className="done-list">
            {Object.keys(this.state.tasksDone).map(key => <Task key={key} taskDets={this.state.tasksDone[key]} action="finished" />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
