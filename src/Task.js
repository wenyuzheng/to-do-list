import React from "react";
import './Task.css';

const Task = (props) => {

    const deleteTasksHandler = (taskIndex) => {
        let newTaskList = [...props.taskList];
        newTaskList.splice(taskIndex, 1);
        props.setTaskList(newTaskList);
    }

    const toggleCompletionHandler = (task, setTaskList) => {
        setTaskList((currTaskList) => {
            let newTaskList = [];
            currTaskList.forEach((currTask) => {
                let newTask = {};
                newTask.title = currTask.title;
                if (task.title === currTask.title) {
                    newTask.isComplete = !task.isComplete;
                } else {
                    newTask.isComplete = currTask.isComplete;
                }
                newTaskList.push(newTask);
            });
            return newTaskList;
        });
    }

    const completed = props.task.isComplete ? "line-through" : "";
    const style = { textDecorationLine: completed };

    return (
        <div className="taskList">
            <div onClick={() => toggleCompletionHandler(props.task, props.setTaskList)} style={style} className="text" > {props.task.title}
                <button onClick={() => deleteTasksHandler(props.index)} className="delete">delete</button>
            </div>
        </div>
    )
}

export default Task;