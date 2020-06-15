import React, { useState} from 'react';
import './App.css';
import Header from './Header';
import Task from './Task';
import Display from './Display';

// class App extends Component {
//   state = {
//     tasks: []
//   }

//     addTasksHandler = () => {
//     setUserInput(document.getElementById("userInput").value);
//     tasks.push(userInput);
//     console.log(tasks);
//   }

//   render() {

//     return (
//       <div className="App">
//         <div className="Header">
//           <h1>To Do List</h1>

//           <div>
//             <input type="text" id="userInput" placeholder="Enter task" />
//             <button onClick={addTasksHandler}>Add Tasks</button>
//           </div>
//         </div>

//       </div>
//     )
//   }
// }

// export default App;


const App = () => {

  const tasks = [];

  const[userInput, setUserInput] = useState(null);
  const[completed, setCompleted] = useState(false);

  const addTasksHandler = () => {
    setUserInput(document.getElementById("userInput").value);
    if (userInput === null || userInput === "") {
      alert("Please enter your task");
    } else {
      tasks.push(userInput);
    }
    console.log(tasks);
  }

  const deleteTasksHandler = () => {
    // get id of the task
    // remove that task
  }

  const markAsCompleteHandler = () => {
    setCompleted(true);
  }

  const displayHandler = (name) => {
    if (name === "Completed") {

    } else if (name === "Incomplete") {

    } else {

    }
  }

  const displayAllHandler = () => {

  }

  const displayIncompleteHandler = () => {

  }

  const displayCompletedHandler = () => {
    
  }

  return (
    <div className="App">
      <Header handler={addTasksHandler}/>
    
      <div>
        {tasks.map((content) => {
          const taskProps = {
            content,
            "key": content,
            deleteTasksHandler,
            markAsCompleteHandler,
            completed
          }
          return(
            <Task {...taskProps}/>
          )
          })}
      </div>

      <Display/>

    </div>
  );
}

export default App;
