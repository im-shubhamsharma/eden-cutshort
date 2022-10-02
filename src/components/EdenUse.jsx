import React, { useState } from "react";
import { StyledOption, StyledOptionContainer } from "./styles/EdenUse.style";
import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
  StyledForm,
  StyledContainer,
  StyledSubContainer,
} from "./styles/Mixin";
import { Link } from "react-router-dom";

const Option1 = ({ setOption, selected }) => {
  return (
    <StyledOption
      onClick={() => {
        setOption({
          option1: true,
          option2: false,
        });
      }}
      selected={selected}
    >
      <i className="fa-solid fa-user"></i>
      <h4>For myself</h4>
      <p>Write better. Think more clearly. Stay organzied</p>
    </StyledOption>
  );
};
const Option2 = ({ setOption, selected }) => {
  return (
    <StyledOption
      onClick={() => {
        setOption({
          option1: false,
          option2: true,
        });
      }}
      selected={selected}
    >
      <i className="fa-solid fa-people-group"></i>
      <h4>With my team</h4>
      <p>Wikis, docs, tasks & projects, all in one place.</p>
    </StyledOption>
  );
};

const EdenUse = () => {
  const [option, setOption] = useState({
    option1: true,
    option2: false,
  });

  return (
    <StyledContainer>
      <StyledTitle>How are you planning to use Eden ?</StyledTitle>
      <StyledSubTitle>
        We'll streamline your setup experience accordingly.
      </StyledSubTitle>

      <StyledSubContainer>
        <StyledForm>
          <StyledOptionContainer>
            <Option1 setOption={setOption} selected={option.option1} />
            <Option2 setOption={setOption} selected={option.option2} />
          </StyledOptionContainer>
        </StyledForm>

        <Link to="/final">
          <StyledButton>Create Workspace</StyledButton>
        </Link>
      </StyledSubContainer>
    </StyledContainer>
  );
};

export default EdenUse;
