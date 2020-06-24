import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Task from './Task';
import Display from './Display';
import firebase from './firebase';

const App = () => {

  const [taskList, setTaskList] = useState([]);
  const [userInput, setUserInput] = useState(null);
  const [currentlyShowing, setCurrentlyShowing] = useState("All");

  useEffect(() => {
    let ref = firebase.database().ref("/toDoList")
    ref.once("value", (data) => {
      const newData = data.val();
      setTaskList(newData);
    })
  }, [])

  return (
    <div className="App">
      <Header taskList={taskList} setTaskList={setTaskList} userInput={userInput} setUserInput={setUserInput}/>
    
      <div>
        {taskList.map((task, index) => {
          const taskListProps = {
            task,
            index,
            taskList,
            setTaskList,
            "key": index,
          }

          if (currentlyShowing === "All") {
            return <Task {...taskListProps} />
          }

          if (currentlyShowing === "Incomplete" && !task.isComplete) {
            return <Task {...taskListProps} />
          }

          if (currentlyShowing === "Completed" && task.isComplete) {
            return <Task {...taskListProps} />
          }
        })}
      </div>

      <Display setCurrentlyShowing={setCurrentlyShowing} currentlyShowing={currentlyShowing}/>
    </div>
  );
}

export default App;


// Work to be done:
// 1. display buttons hovering
// 2. if tasks have the same content, when toggle complete on one, toggles on all (use id?)
// 3. firebase: loading icon when loading