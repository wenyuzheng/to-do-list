import React from 'react';
import './Display.css';

const Display = (props) => {

    const displayButtonList = [
        {
            id: "All",
            isClicked: true
        },
        {
            id: "Incomplete",
            isClicked: false
        },
        {
            id: "Completed",
            isClicked: false
        }
    ];

    const displayHandler = (id) => {
        props.setCurrentlyShowing(id);
    }

    return (
        <div className="outerDisplayDiv">
            <div className="innerDisplayDiv">
                <div>
                    <p> Display:</p>
                </div>
            </div>

            {displayButtonList.map((button) => {

                const backgroundColor = button.isClicked ? "#fae29c" : "white";
                const style = { backgroundColor };

                return <button onClick={() => displayHandler(button.id)} style={style} key={button.id}>{button.id}</button>
            })}
        </div>
    )
}

export default Display;