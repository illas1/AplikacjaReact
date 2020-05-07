import React from 'react';
import Task from './Task'

const TaskList = (props) => { //Komponent funkcyjny

    
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

    console.log(active);
    console.log(done);

    const activeTasks = active.map(task=>
    <Task 
    key={task.id}
    task={task} 
    delete={props.delete} 
    change={props.change}/>)
    //tworzymy nową tablicę w oparciu o tablicę z zadaniami

    const doneTasks = done.map(task=>
        <Task 
        key={task.id}
        task={task} 
        delete={props.delete} 
        change={props.change}/>)


    return ( 
        <>
        <div className="active">
           <h2>Lista zadań do zrobienia <em>({active.length})</em></h2>
            {activeTasks.length>0 ? activeTasks: <p>brak zadań</p>}
        </div>
        <hr />
        <div className="done">
        <h2>Zadania wykonane <em>({done.length})</em> </h2>
            {doneTasks}
     </div>
     </>
     );
}
 
export default TaskList;