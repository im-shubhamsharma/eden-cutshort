import styled from "styled-components";

export const StyledContainer = styled.div`
  border: 2px solid purple;

  /* width: 50%; */
  height: 100vh;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.textPrimaryColor};
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
`;

export const StyledSubTitle = styled.p`
  color: ${({ theme }) => theme.textSecondaryColor};
  font-size: 1rem;
  font-weight: 400;
`;

// -----------form and inputs----------------
export const StyledForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textPrimaryColor};
  font-weight: 600;
  font-size: 0.9rem;
  gap: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 6px;
  border: none;
  box-shadow: 0 0 2px #c2c4c7;
  padding: ${({before}) => before ? "0 32%" : "0.8rem"};

  &::placeholder {
    color: #8d93a2;
    font-weight: 600;
  }
`;

export const StyledInputFixedText = styled.div`
  width: 100%;
  position: relative;

  &:before {
    content: "www.eden.com/";
    position: absolute;
    width: 30%;
    height: 100%;
    background-color: #f2f2f2;
    color: #b2bacd;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px 0 0 6px;
  }
`;

// -----------button----------------
export const StyledButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  border: none;
  border-radius: 6px;
  padding: 0.9rem;
  color: #fff;
  font-weight: 600;
`;
