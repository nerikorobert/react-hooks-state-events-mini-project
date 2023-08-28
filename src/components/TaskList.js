import React,  {useState} from "react";
import Task from "./Task"

function TaskList({tasks}) {
  let [myTasks, setMyTasks] = useState(tasks)
  console.log(myTasks)

  function changeTask(text){
    let newTasks = myTasks.filter(task=>{
      return task.text !== text
    })
    setMyTasks(newTasks)
  }

  const taskList = myTasks.map((task)=>{
      return <Task key={myTasks.indexOf(task)} text={task.text} category={task.category} changeTask={changeTask}/>
    })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
       {taskList}
      
    </div>
  );
}

export default TaskList;