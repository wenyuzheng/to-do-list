import React from "react";

const Task = (props) => {
    return (
        <div>
            <input type="checkbox" onClick={props.markAsCompleteHandler}/>
            <div>{props.content}</div>
            <button onClick={props.deleteTasksHandler}>delete</button>
        </div>
    )
}

export default Task;