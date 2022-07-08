import './App.css';
import AddTask from './AddTask.js';
import TaskList from './TaskList';
import Task from './Task';
import React, { Component } from 'react';

class App extends Component {
  counter = 2;
  
  state ={
    tasks: [
      {
        id: 0,
        text: 'zagrać w grę',
        date: '2022-09-15',
        important: true,
        active: true,
      },
    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];

    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {

    this.setState({
      tasks: this.state.tasks.map(task => task.id === id ? { ...task, active: false } : task)
    })

  }

  addTask = (text, date, important) => {
    const task = {
        id: this.counter,
        text: text,
        date: date,
        important: important,
        active: true,
    }
    this.counter++
    console.log(task, this.counter)
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task] // building new tab and adding task
    }))
    return true;
  }

render() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AddTask add={this.addTask}/>
      <TaskList tasks={this.state.tasks} delete = {this.deleteTask} change={this.changeTaskStatus} />
    </div>
  );
}
}

export default App;
