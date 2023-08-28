import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const categories=["ALL"];
  let[myFilteredData, setMyFilteredData]=useState(TASKS)

  TASKS.forEach(entry=>{
    if(!categories.includes(entry.category)){
      categories.push(entry.category)
    }
  })
  
  function filterData(value){
    console.log(value)
    let tasks=TASKS.filter(task=>{
      if(value === "ALL"){
        return true
      }
  
      return task.category === value
    })
    setMyFilteredData(tasks)
  }

  function handleSubmit(data){
    
    console.log(data)
    let newData={...myFilteredData, data}
    console.log(newData.length)
    setMyFilteredData(newData)
   }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} filter={filterData}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={handleSubmit}/>
      <TaskList tasks={myFilteredData} />
    </div>
  );
}

export default App;