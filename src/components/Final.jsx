import React from "react";
import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
  StyledContainer,
  StyledSubContainer,
} from "./styles/Mixin";
import { StyledSuccessMark } from "./styles/Final.style";
import { Link } from "react-router-dom";

const Final = () => {
  return (
    <StyledContainer>
      <StyledSuccessMark>
        <i className="fa-solid fa-check"></i>
      </StyledSuccessMark>
      <StyledTitle>Congratulations, Eren!</StyledTitle>
      <StyledSubTitle>
        You have completed onboarding, you can start using the Eden!
      </StyledSubTitle>

      <div
        style={{
          margin: "0.8rem 0",
        }}
      ></div>

      <StyledSubContainer>
        <Link to="/final">
          <StyledButton>Launch Eden</StyledButton>
        </Link>
      </StyledSubContainer>
    </StyledContainer>
  );
};

export default Final;
