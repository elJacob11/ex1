import React from 'react';

const Task = (props) => {

    const {text, date, id} = props.task;
    return ( 
        <div>
            <p>
                <strong>{props.task.text}</strong> - do <span>{date} </span>
                <button onClick={() => props.change(id)}>zrobione</button>
                <button onClick={() => props.delete(id)}>X</button>
            </p>
            
        </div>
     );
}
 
export default Task;