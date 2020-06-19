import React, { useState }from 'react';
import './Display.css';

const Display = (props) => {

    // const displayAllHandler = () => {
    //     props.setCurrDisplaying("All");
    //     console.log(props.c)
    // }

    // const displayIncompleteHandler = () => {
    //     props.setCurrDisplaying("Incomplete");
    //     console.log(props.c)
    // }

    // const displayCompletedHandler = () => {
    //     props.setCurrDisplaying("Completed");
    //     console.log(props.c)
    // }

    const [clicked, setClicked] = useState(false);

    const displayHandler = (name) => {
        props.setCurrDisplaying(name);
        setClicked(true);
        console.log(props.currDisplaying)
    }

    // const backgroundColor = clicked ? "fae29c" : "white";
    // const style = { backgroundColor };

    return (
        <div className="outerDisplayDiv">
            <div className="innerDisplayDiv">
                <div>
                    <p> Display:</p>
                </div>
                <div>
                    <button onClick={() => displayHandler("All")} >All</button>
                </div>
                <div>
                    <button onClick={() => displayHandler("Incomplete")} >Incomplete</button>
                </div>
                <div>
                    <button onClick={() => displayHandler("Completed")} >Completed</button>
                </div>
            </div>
        </div>
    )
}

export default Display;