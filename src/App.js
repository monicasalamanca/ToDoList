import React from 'react';
import Task from './components/Task';
import AddTask from './components/AddTask';
import './App.scss';

class App extends React.Component {
  state = {
    tasks: {}
  };

  addTask = (task) => {
    // 1. Take a copy of the existing state
    const tasks = { ...this.state.tasks };
    // 2. Add our new task to that variable
    tasks[`task${Date.now()}`] = task;
    // 3. set the new task object to state
    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Task List</h1>
        <ul className="task-list">
          {Object.keys(this.state.tasks).map(key => <Task key={key} taskDets={this.state.tasks[key]} />)}
        </ul>
        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
