import React from "react";
import './Task.css';

const Task = (props) => {
    return (
        <div className="task">
            <input type="checkbox" className="checkbox" onClick={props.markAsCompleteHandler}/>
            <div className="text">{props.content}</div>
            <div>
                <button onClick={props.deleteTasksHandler}>delete</button>
            </div>
            
        </div>
    )
}

export default Task;