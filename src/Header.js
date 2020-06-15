import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="Header">
            <h1>To Do List</h1>

            <div>
                <input type="text" id="userInput" placeholder="Enter task" />
                <button onClick={props.handler}>Add Tasks</button>
            </div>
        </div>
    )
}

export default Header;