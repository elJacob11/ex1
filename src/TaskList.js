import React from 'react';
import Task from './Task';

const TaskListFilter = ({ filter, label, tasks, delete, change, ... props }) => {
    const filteredTasks = tasks.filter(filter);
    return (
        <div {...props}>
            <h2>{label} <em>({filteredTasks.length})</em><</h2>
            {filteredTasks.map(task => (
                <Task 
                    key={task.id} 
                    task={task} 
                    delete={delete} 
                    change={change} 
                />
            ))}
        </div>
    )
};

const TaskList = ({ tasks, delete, change }) => {
    return ( 
        <>
            <TaskListFilter 
                className="active" 
                label={'Zadania do zrobienia'} 
                tasks={tasks} 
                filter={task => task.active} 
                delete={delete} 
                change={change} 
            />
            <hr/>
            <TaskListFilter 
                className="done" 
                label={'Zadania zrobione'} 
                tasks={tasks} 
                filter={task => !task.active} 
                delete={delete} 
                change={change} 
            />
        </>
     );
}
 
export default TaskList;
