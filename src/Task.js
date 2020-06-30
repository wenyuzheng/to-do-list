import React, { useState } from "react";
import './Task.css';
import firebase from './firebase';

const Task = (props) => {

    const [editing, setEditing] = useState(false);
    const [editUserInput, setEditUserInput] = useState(props.task.title);

    const deleteTasksHandler = (taskIndex) => {
        let newTaskList = { ...props.taskList };
        delete newTaskList[taskIndex];
        props.setTaskList(newTaskList);
        firebase.database().ref(`/toDoList/${taskIndex}`).remove();
    }

    const toggleCompletionHandler = (index) => {
        const temporaryTaskList = { ...props.taskList };
        const task = temporaryTaskList[index];
        task.isComplete = !task.isComplete;
        props.setTaskList(temporaryTaskList);
        firebase.database().ref(`/toDoList/${index}`).set(task);
    }

    const saveEditHandler = (index) => {
        const tempTaskList = { ...props.taskList };
        const task = tempTaskList[index];
        task.title = editUserInput;
        props.setTaskList(tempTaskList);
        setEditing(false);
        firebase.database().ref(`/toDoList/${index}`).set(task);
    }

    const textDecorationLine = props.task.isComplete ? "line-through" : "";
    const style = { textDecorationLine };
    const backgroundColor = editing ? "#ff6347" : "white";
    const editStyle = {backgroundColor};

    return (
        <div className="taskList">
            {editing ? <input value={editUserInput} onChange={(e) => setEditUserInput(e.target.value)} style={editStyle} className="editInput"/> :
                <span onClick={() => toggleCompletionHandler(props.index)} style={style} className="text"> {props.task.title}</span>}
            {editing ? 
                <button onClick={() => saveEditHandler(props.index)} className="taskButtons" style={editStyle}>save</button> : 
                <button onClick={() => setEditing(true)} className="taskButtons">edit</button>}
            <button onClick={() => deleteTasksHandler(props.index)} className="taskButtons">delete</button>
        </div>
    )
}

export default Task;