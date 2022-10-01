import React from "react";
import { ProgressContainer, StyledCircle } from "./styles/Progress.style";

const Progress = ({ pages, changePages }) => {
  return (
    <ProgressContainer>
      <StyledCircle pages={1}>1</StyledCircle>
      <StyledCircle pages={2}>2</StyledCircle>
      <StyledCircle pages={3}>3</StyledCircle>
      <StyledCircle pages={4}>4</StyledCircle>
    </ProgressContainer>
  );
};

export default Progress;
