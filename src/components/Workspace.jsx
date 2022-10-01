import React, { useState } from "react";
import { WorkspaceContainer } from "./styles/Workspace.style";
import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledInputFixedText,
} from "./styles/Mixin";
import { Link } from "react-router-dom";

const Workspace = () => {
  const [workspaceDetails, setWorkSpaceDetails] = useState({
    name: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkSpaceDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <WorkspaceContainer>
      <StyledTitle>Let's set up a home for all your work</StyledTitle>
      <StyledSubTitle>
        You can always create another workspace later.
      </StyledSubTitle>

      <StyledForm>
        <StyledLabel>
          Workspace Name
          <StyledInput
            type="text"
            name="name"
            value={workspaceDetails.name}
            placeholder="Eden"
            onChange={handleChange}
          />
        </StyledLabel>

        <StyledLabel>
          Workspace URL (optional)
          <StyledInputFixedText>
            <StyledInput
              type="text"
              name="url"
              placeholder="Example"
              value={workspaceDetails.url}
              onChange={handleChange}
              before={true}
            />
          </StyledInputFixedText>
        </StyledLabel>

        <Link to="/workspace">
          <StyledButton>Create Workspace</StyledButton>
        </Link>
      </StyledForm>
    </WorkspaceContainer>
  );
};

export default Workspace;
