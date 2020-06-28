import React from 'react';
import './Header.css';
import firebase from './firebase';

const Header = (props) => {

    const addTasksHandler = () => {
        if (props.userInput === "" || props.userInput === null) {
            alert("Please enter your task!")
        } else {
            const task = {
                title: props.userInput,
                isComplete: false,
                id: Date()
            }
            let newTaskList = [];
            if (props.taskList === null) {
                newTaskList = [task];
            } else {
                newTaskList = [...props.taskList, task];
            }
            props.setTaskList(newTaskList);
            props.setUserInput("");
            firebase.database().ref("/toDoList").set(newTaskList);
        }
    }

    return (
        <div className="Header">
            <h1>To Do List</h1>

            <div>
                <input 
                    value={props.userInput}
                    type="text" 
                    id="userInput" 
                    placeholder="Enter task" 
                    onChange={(e) => props.setUserInput(e.target.value)}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            addTasksHandler();
                        }
                    }}/>
                <button 
                    onClick={addTasksHandler} 
                    className="addButton"> Add Task </button>
            </div>
        </div>
    )
}

export default Header;