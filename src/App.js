import React, { useState } from 'react';
import './App.css';
import Task from './Task';

const App = () => {

  const tasks = [];

  const[userInput, setUserInput] = useState(null);
  const[completed, setCompleted] = useState(false);

  const addTasksHandler = () => {
    setUserInput(document.getElementById("userInput").value);
    tasks.push(userInput);
  }

  const deleteTasksHandler = () => {
    console.log("delete")
  }

  const markAsCompleteHandler = () => {
    setCompleted(true);
  }

  const displayAllHandler = () => {

  }

  const displayIncompleteHandler = () => {

  }

  const displayCompletedHandler = () => {
    
  }

  return (
    <div className="App">
      <h1>To Do List</h1>

      <div>
        <input type="text" id="userInput"/>
        <button onClick={addTasksHandler}>Add Tasks</button>
      </div>
    
      <div>
        {tasks.map((content) => {
          const taskProps = {
            content,
            "key": content,
            deleteTasksHandler,
            markAsCompleteHandler
          }
          return(
            <Task {...taskProps}/>
          )
          })}
      </div>

      <div>
        <div>Display:</div>
        <button onClick={displayAllHandler}>All</button>
        <button onClick={displayIncompleteHandler}>Incomplete</button>
        <button onClick={displayCompletedHandler}>Completed</button>
      </div>

    </div>
  );
}

export default App;
