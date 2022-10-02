import styled, { keyframes } from "styled-components";

const zoomIn = keyframes`
   0%{
      scale: 0.2
   }
   100%{
      scale: 1
   }
  `;

export const StyledSuccessMark = styled.div`
  height: 4rem;
  width: 4rem;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem;
  animation: ${zoomIn} 1s linear 3;
`;
