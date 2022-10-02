import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.5rem;
`;

export const StyledSubContainer = styled.div`
  width: 22%;

  @media (max-width: 1536px) {
    width: 30%;
  }

  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 85%;
  }
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.textPrimaryColor};
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  line-height: 150%;

  @media (max-width: 768px) {
    width: 85%;
  }
  @media (max-width: 480px) {
    width: 85%;
    font-size: 1.8rem;
  }
`;

export const StyledSubTitle = styled.p`
  color: ${({ theme }) => theme.textSecondaryColor};
  font-size: 1.1rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 85%;
  }
  @media (max-width: 480px) {
    width: 85%;
    font-size: 0.8rem;
  }
`;

// -----------form and inputs----------------
export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  margin-top: 3rem;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textPrimaryColor};
  font-size: 1rem;
  gap: 0.6rem;

  span #optional {
    color: ${({ theme }) => theme.textSecondaryColor};
    font-size: 90%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 6px;
  border: none;
  box-shadow: 0 0 2px #c2c4c7;
  padding: ${({ before }) => (before ? "0 0 0 40%" : "0.9rem")};

  &::placeholder {
    color: #8d93a2;
    font-weight: 500;
    font-size: 1rem;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.primaryColor};
  }

  @media (max-width: 480px) {
    padding: ${({ before }) => (before ? "0 0 0 40%" : "0.9rem")};

    &::placeholder {
      font-size: 0.9rem;
    }
  }
`;

export const StyledInputFixedText = styled.div`
  width: 100%;
  position: relative;

  &:before {
    content: "www.eden.com/";
    position: absolute;
    width: 35%;
    height: 100%;
    background-color: #f8f9fc;
    color: #a1abbf;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px 0 0 6px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    &:before {
      width: 36%;
      font-size: 0.9rem;
    }
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
  font-weight: 500;
  font-size: 0.95rem;
`;
