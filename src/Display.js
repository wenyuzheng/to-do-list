import React from 'react';
import './Display.css';

const Display = () => {
    return (
        <div className="outerDisplayDiv">
            <div className="innerDisplayDiv">
                <div>
                    <p> Display:</p>
                </div>
                <div>
                    <button name="All">All</button>
                </div>
                <div>
                    <button name="Incomplete">Incomplete</button>
                </div>
                <div>
                    <button name="Completed">Completed</button>
                </div>
            </div>
        </div>
    )
}

export default Display;