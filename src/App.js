import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Task from './Task';
import Display from './Display';
import firebase from './firebase';

const App = () => {

  const [taskList, setTaskList] = useState({});
  const [currentlyShowing, setCurrentlyShowing] = useState("All");

  useEffect(() => {
    let ref = firebase.database().ref("/toDoList");
    ref.once("value", (data) => {
      let newData = data.val();
      if (newData === null) newData = {};
      setTaskList(newData);
    })
  }, [])

  return (
    <div className="App">
      <Header taskList={taskList} setTaskList={setTaskList}/>
    
      <div>
        {Object.entries(taskList).map(([index, task]) => {
          const taskListProps = {
            task,
            index,
            taskList,
            setTaskList,
            key: index,
          }

          const shouldDisplay = (currentlyShowing === "All") || (currentlyShowing === "Incomplete" && !task.isComplete) || (currentlyShowing === "Completed" && task.isComplete);
          return shouldDisplay ? <Task {...taskListProps} /> : null
        })}
      </div>

      <Display setCurrentlyShowing={setCurrentlyShowing} currentlyShowing={currentlyShowing}/>
    </div>
  );
}

export default App;


// Work to be done:
// 1. 
// 5. css
