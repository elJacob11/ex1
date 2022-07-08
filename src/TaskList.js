import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete}
        change={props.change} />)
        const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete}
            change={props.change} />)
    return ( 
        <>
        <div className='active'>
            <h2>Zadania do zrobienia</h2>
            {activeTasks}
        </div>
        <hr/>
        <div className='done'>
        <h2>Zadania zrobione <em>({done.length})</em></h2>
        {doneTasks}
        
        </div>
    </>
     );
}
 
export default TaskList;