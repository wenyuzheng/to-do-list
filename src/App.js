import React, { useState} from 'react';
import './App.css';
import Header from './Header';
import Task from './Task';
import Display from './Display';

const App = () => {

  let tasks = [
    {
      title: "Do work",
      isComplete: false
    },
    {
      title: "Hiiiiiiiiiiiiiiiiiiiii  kkkkkkkk kkkk",
      isComplete: true
    }
  ]

  const [taskList, setTaskList] = useState(tasks);
  const [userInput, setUserInput] = useState(null);
  const [currentlyShowing, setCurrentlyShowing] = useState("All");

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
            return <Task {...taskListProps}/>
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
// 1. delete button function [done]
// 2. delete button layout  [done]
// 3. set currentlyShowing [done]
// 4. display all/incomplete/completed  [done]
// 5. display buttons background color changed if clicked
// 6. if userInput is nothing or null, alert
// 6. simplify code + give correct name [done]
// 7. firebase