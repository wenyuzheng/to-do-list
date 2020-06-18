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
      isComplete: false
    }
  ]

  const [taskList, setTaskList] = useState(tasks);
  const [userInput, setUserInput] = useState(null);
  const [currDisplaying, setCurrDisplaying] = useState("All");

  const deleteTasksHandler = () => {
    // get id of the task
    // remove that task
  }

  const toggleCompletionHandler = (task, setTaskList) => {
    setTaskList((currTaskList) => {
      let newTaskList = [];
      currTaskList.forEach((currTask) => {
        let newTask = {};
        newTask.title = currTask.title;
        if (task.title === currTask.title) {
          newTask.isComplete = !task.isComplete;
        } else {
          newTask.isComplete = currTask.isComplete;
        }
        newTaskList.push(newTask);
      });
      return newTaskList;
    });
  }

  return (
    <div className="App">
      <Header taskList={taskList} setTaskList={setTaskList} userInput={userInput}/>
    
      <div>
        {taskList.map((task) => {
          const completed = task.isComplete ? "line-through" : "";
          const style = { textDecorationLine: completed};

          return (
            <div className="taskList">
              <div onClick={() => toggleCompletionHandler(task, setTaskList)} style={style} className="text" key={Date.now()}> {task.title} </div>
              {/* <button >delete</button> */}
            </div>
          )

          if (currDisplaying === "Incomplete" && !task.isComplete) {
            
          } else if (currDisplaying === "Completed" && task.isComplete) {

          } else {

          }
        })}
      </div>

      <Display setCurrDisplaying={setCurrDisplaying} currDisplaying={currDisplaying}/>

    </div>
  );
}

export default App;
