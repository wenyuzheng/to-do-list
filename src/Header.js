import React, { useState } from 'react';
import './Header.css';
import firebase from './firebase';

const Header = (props) => {

    const [userInput, setUserInput] = useState("");

    const addTasksHandler = () => {
        if (userInput === "" || userInput === null) {
            alert("Please enter your task!")
        } else {
            const task = {
                title: userInput,
                isComplete: false
            }

            let currTime = new Date();
            let timeId = currTime.getTime();

            let newTaskList = { ...props.taskList, [timeId]: task};
            props.setTaskList(newTaskList);
            setUserInput("");
            firebase.database().ref(`/toDoList/${timeId}`).set(task);
        }
    }

    return (
        <div className="Header">
            <h1>To Do List</h1>

            <div>
                <input 
                    value={userInput}
                    type="text" 
                    id="userInput" 
                    placeholder="Enter task" 
                    onChange={(e) => setUserInput(e.target.value)}
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