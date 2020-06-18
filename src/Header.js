import React from 'react';
import './Header.css';

const Header = (props) => {

    const addTasksHandler = () => {
        props.setUserInput(props.userInput);
        const task = {
            title: props.userInput,
            isComplete: false
        }
        const newTaskList = [...props.taskList];
        props.setTaskList(newTaskList.push(task));
    }

    return (
        <div className="Header">
            <h1>To Do List</h1>

            <div>
                <input type="text" id="userInput" placeholder="Enter task" onChange={props.userInput}/>
                <button onClick={addTasksHandler}> Add Task </button>
            </div>
        </div>
    )
}

export default Header;