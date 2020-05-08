import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
counter = 8
state={
  tasks: [ //jedna tablica
  {
    id: 0, 
    text:'Ulożyć dietę 1600kcal - Marta', 
    date: '2020-05-12', 
    important: false,
    active: true,
    finishDate: null
  },//każde zadanie osobnym obiektem
  {
    id: 1, 
    text:'Plan treningowy - Krystian', 
    date: '2020-05-18', 
    important: false,
    active: true,
    finishDate: null
  }, 
  {
    id: 2, 
    text:'Plan treningowy - Izabela', 
    date: '2020-05-08', 
    important: true,
    active: true,
    finishDate: null
  },
  {
    id: 3, 
    text:'Porada psychodietetyczna - Ania M', 
    date: '2020-05-25', 
    important: false,
    active: true,
    finishDate: null
  },
  {
    id: 4, 
    text:'Analiza składu ciała - Izabela', 
    date: '2020-06-10', 
    important: false,
    active: true,
    finishDate: null
  },
  {
    id: 5, 
    text:'Plan treningowy na siłownię - Robert', 
    date: '2020-05-10', 
    important: true,
    active: true,
    finishDate: null
  },
  {
    id: 6, 
    text:'Analiza składu ciała - Joanna', 
    date: '2020-06-10', 
    important: false,
    active: true,
    finishDate: null
  },
  {
    id: 7, 
    text:'Analiza wyników po miesiącu współpracy - Marta', 
    date: '2020-06-12', 
    important: false,
    active: true,
    finishDate: null
  },
  ]
}

  deleteTask = (id) =>{ //usuwanie zadania
  console.log("delete elementu o id" + id);

  let tasks = [...this.state.tasks];
  tasks = tasks.filter(task => task.id !== id)
  this.setState({
    tasks
  })
  }

  changeStatusTask = (id) =>{
    console.log("change elementu o id" + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task=>{
      if (task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask=(text, date, important) =>{
    console.log("Dodany obiekt");
    const task ={
      id: this.counter,
      text,
      date,   
      important,// wartosci z inputa
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task,this.counter);

    this.setState(prevState=>({
      tasks:[...prevState.tasks,task]
    }))
    return true
  }

  render() {
    return(
      <div className="App">
        <AddTask add={this.addTask}/>
        <TaskList 
        tasks={this.state.tasks} 
        delete={this.deleteTask} 
        change={this.changeStatusTask}
        />
      </div>
    );
  }
}

export default App;
