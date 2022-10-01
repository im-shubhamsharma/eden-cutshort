import styled from "styled-components";


export const ProgressContainer = styled.div`
   display: flex;
   gap: 3rem;
`

export const StyledCircle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 2px #c2c4c7;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    content: "";
    width: ${({ pages }) => (pages === 1 ? 0 : "1.5rem")};
    height: 1px;
    background-color: #c2c4c7;
    opacity: 0.5;

    position: absolute;
    right: 100%;
  }

  &:after {
    content: "";
    width: ${({ pages }) => (pages === 4 ? 0 : "1.5rem")};
    height: 1px;
    background-color: #c2c4c7;
    opacity: 0.5;

    position: absolute;
    left: 100%;
  }
`;
