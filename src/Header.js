import React from 'react';
import './Header.css';

const Header = (props) => {

    const addTasksHandler = () => {
        // let newTaskList = [...props.taskList];
        // let text = props.userInput;
        // const task = {
        //     title: text,
        //     isComplete: false
        // }
        // newTaskList.push(task);
        // props.setTaskList(newTaskList);

        let text = props.userInput;
        const task = {
            title: text,
            isComplete: false
        }
        let newTaskList = [...props.taskList, task];
        props.setTaskList(newTaskList);
    }

    return (
        <div className="Header">
            <h1>To Do List</h1>

            <div>
                <input type="text" id="userInput" placeholder="Enter task" onChange={props.userInput}/>
                <button onClick={addTasksHandler} className="addButton"> Add Task </button>
            </div>
        </div>
    )
}

export default Header;