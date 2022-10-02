import styled from "styled-components";

export const StyledOption = styled.div`
  transition: 0.7s ease-in;
  padding: 1.7rem;
  border-radius: 6px;
  box-shadow: 0 0 3px #c2c4c7;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 2px solid
    ${({ selected, theme }) =>
      selected ? theme.primaryColor : "rgba(0, 0, 0, 0.01)"};

  i {
    font-size: 1.5rem;
    color: ${({ selected, theme }) => (selected ? theme.primaryColor : "none")};
  }
  h4 {
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  p {
    color: ${({ theme }) => theme.textSecondaryColor};
    font-size: 0.92rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

export const StyledOptionContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1536px) {
    
  }

  @media (max-width: 1080px) {
    
  }
  @media (max-width: 768px) {
    
  }
  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;
