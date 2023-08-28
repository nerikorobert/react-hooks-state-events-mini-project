import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const[input, setInput]=useState({
    text:'',
    category:''
  })

  const categoryOption =categories.slice(1).map(category=>{
    return <option key={category} value={category}>{category}</option>
  })

  function handleInput(e){
    const name = e.target.name;
    const value = e.target.value;
  
    setInput({
       ...input,
      [name]: value,
    });
  }
  
  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit(input)
    setInput({
      text:'',
      category:''
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInput} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleInput}>
          {/* render <option> elements for each category here */}
          {categoryOption}
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;