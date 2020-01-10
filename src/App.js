import React from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Task List</h1>
      <Tasks />
      <AddTask />
    </div>
  );
}

export default App;
