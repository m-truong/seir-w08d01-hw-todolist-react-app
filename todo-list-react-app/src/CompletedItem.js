import React from "react";
// import PrimaryButton from "./PrimaryButton";
// import styled, { css, keyframes } from "styled-components";
const CompletedItem = ({ currToDoItem }) => {
  return (
    <div className="completed">
      <li>{currToDoItem.inputState}</li>
    </div>
  );
};

export default CompletedItem;
