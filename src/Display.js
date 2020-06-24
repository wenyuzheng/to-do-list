import React, { useState } from 'react';
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

    const [displayButtons, setDisplayButtons] = useState(displayButtonList)

    const displayHandler = (id) => {
        props.setCurrentlyShowing(id);

        let newDisplayButtonList = displayButtonList.map(displayButton =>
            displayButton.id === id ? { ...displayButton, isClicked: true } : { ...displayButton, isClicked: false }
        );
        setDisplayButtons(newDisplayButtonList);
    }

    return (
        <div className="outerDisplayDiv">
            <div className="innerDisplayDiv">
                <div>
                    <p> Display:</p>
                </div>
            </div>

            {displayButtons.map((button) => {
                const backgroundColor = button.isClicked ? "#fae29c" : "white";
                const style = { backgroundColor };

                return <button onClick={() => displayHandler(button.id)} className="button" style={style} key={button.id}>{button.id}</button>
            })}
        </div>
    )
}

export default Display;