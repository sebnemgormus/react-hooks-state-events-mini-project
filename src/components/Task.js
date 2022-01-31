import React from "react";

function Task({text, label, onDeleteTask}) {

  function handleOnClick() {
    
    console.log('oh its working!');
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{label}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleOnClick}>Delete</button>
    </div>
  );
}

export default Task;
