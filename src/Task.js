import React from "react";
import './Task.css';
import firebase from './firebase';

const Task = (props) => {

    const deleteTasksHandler = (taskIndex) => {
        let newTaskList = [...props.taskList];
        newTaskList.splice(taskIndex, 1);
        props.setTaskList(newTaskList);
        firebase.database().ref("/toDoList").set(newTaskList);
    }

    const toggleCompletionHandler = (index) => {
        const temporaryTaskList = [...props.taskList];
        temporaryTaskList[index].isComplete = !temporaryTaskList[index].isComplete;
        props.setTaskList(temporaryTaskList);
    }

    const completed = props.task.isComplete ? "line-through" : "";
    const style = { textDecorationLine: completed };

    return (
        <div className="taskList">
            <div onClick={() => toggleCompletionHandler(props.index)} style={style} className="text" > {props.task.title}
                <button onClick={() => deleteTasksHandler(props.index)} className="delete">delete</button>
            </div>
        </div>
    )
}

export default Task;