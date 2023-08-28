import React, { useState } from "react";

function CategoryFilter({categories, filter}) {
  const [myCategories, setMyCategories]=useState(categories)
  const [clicked, setClicked]=useState("selected")

  function updateClass(e){
    e.target.classList.add("selected")
    console.log(e.target)
    // filter(e.target.textContent)
    let btns = e.target.parentNode.querySelector(".selected")
    console.log(btns)
    btns.classList.remove("selected")
    filter(e.target.textContent)
  }
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
    
      {myCategories.map(category=>{
        // console.log(category)
        return ( category === "ALL"? <button key={category} className={clicked} onClick={updateClass} >{category}</button> : <button key={category} className="" onClick={updateClass} >{category}</button>)
      })}
    </div>
  );
}

export default CategoryFilter;