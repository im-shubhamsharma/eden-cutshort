import { useState } from "react";
import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledContainer,
  StyledSubContainer,
} from "./styles/Mixin";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState({
    fullName: "",
    displayName: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setName((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  }

  return (
    <StyledContainer>
      <StyledTitle>Welcome! First things first...</StyledTitle>
      <StyledSubTitle>You can always change them later.</StyledSubTitle>

      <StyledSubContainer>
        <StyledForm>
          <StyledLabel>
            Full Name
            <StyledInput
              type="text"
              name="fullName"
              value={name.fullName}
              placeholder="Steve Jobs"
              onChange={handleChange}
            />
          </StyledLabel>

          <StyledLabel>
            Display Name
            <StyledInput
              type="text"
              name="displayName"
              placeholder="Steve"
              value={name.displayName}
              onChange={handleChange}
            />
          </StyledLabel>

          <Link to="/workspace">
            <StyledButton>Create Workspace</StyledButton>
          </Link>
        </StyledForm>
      </StyledSubContainer>
    </StyledContainer>
  );
};

export default Welcome;
