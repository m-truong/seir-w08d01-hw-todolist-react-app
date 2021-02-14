import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";
import CompletedItem from "./CompletedItem";
import "./App.css";
// import PrimaryButton from "./PrimaryButton";
// import styled, { css, keyframes } from "styled-components";

// import "./styles.css";
// data from data.js
import toDoListData from "./data";

function App() {
  // input state continuously being changed
  const [inputState, inputStateHandler] = useState("");
  // initial-state set equal to toDoItems array
  const [toDoItems, setToDoItems] = useState(toDoListData);
  // initial state set equal to empty-array
  const [completedItems, updateCompleted] = useState([]);
  // this communicates between sibling-components using "Lifted-State"
  const addToCompleted = (index) => {
    const currToDo = toDoItems[index];

    // slice - makes shadow-copy of array
    setToDoItems([
      ...toDoItems.slice(0, index),
      ...toDoItems.slice([index + 1])
    ]);

    // splice
    // setToDoItems([toDoItems.splice(index, 1)]);

    // add to completedItems
    const newArray = [currToDo, ...completedItems];
    updateCompleted(newArray);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newToDoObject = {
      // creates object of current-state during input
      inputState: inputState
    };
    // spread current array of To Do Items, then add to the end
    setToDoItems([...toDoItems, newToDoObject]);
    // resets the State of Input Form to empty ""
    inputStateHandler("");
  };

  const handleNewToDoInput = (event) => {
    inputStateHandler(event.target.value);
  };

  return (
    <div className="App">
      <h1>My To Do List:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new">New Item:</label>
        <input
          id="new"
          type="text"
          value={inputState}
          onChange={handleNewToDoInput}
        />
      </form>
      <h2>To Do Items:</h2>
      <ul>
        {toDoItems.length > 0 &&
          toDoItems.map((currToDoItem, index) => {
            return (
              <ToDoListItem
                currToDoItem={currToDoItem}
                index={index}
                addToCompleted={addToCompleted}
              />
            );
          })}
      </ul>
      <h2>Completed:</h2>
      <ul>
        {completedItems.map((currCompletedItem, index) => {
          return <CompletedItem currToDoItem={currCompletedItem} />;
        })}
      </ul>
    </div>
  );
}

export default App;
