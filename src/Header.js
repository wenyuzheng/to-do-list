import React from 'react';
import './Header.css';

const Header = (props) => {

    const addTasksHandler = () => {
        const task = {
            title: props.userInput,
            isComplete: false
        }
        let newTaskList = [...props.taskList, task];
        props.setTaskList(newTaskList);
        props.setUserInput("");
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
                    onChange={(e) => {props.setUserInput(e.target.value)}}/>
                <button 
                    onClick={addTasksHandler} 
                    className="addButton"> Add Task </button>
            </div>
        </div>
    )
}

export default Header;