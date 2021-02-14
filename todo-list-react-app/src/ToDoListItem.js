import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
// import styled, { css, keyframes } from "styled-components";

const ToDoListItem = ({ currToDoItem, index, addToCompleted }) => {
  const handler = () => {
    addToCompleted(index);
  };
  return (
    <div className="list-item">
      {/* <input id="position-checkbox" type="checkbox" /> */}
      <li>{currToDoItem.inputState}</li>
      <PrimaryButton modifiers={["small"]} onClick={handler}>
        Completed
      </PrimaryButton>
    </div>
  );
};

export default ToDoListItem;