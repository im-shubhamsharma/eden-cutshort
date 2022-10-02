import styled from "styled-components";

export const ProgressContainer = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 480px) {
    gap: 3rem;
  }
`;

export const StyledCircle = styled.div`
  transition: 0.5s linear 0.5s;
  width: 2.8rem;
  height: 2.8rem;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 2px #c2c4c7;
  background-color: ${({ pages, psf, theme }) =>
    pages <= psf ? theme.primaryColor : "transparent"};

  color: ${({ pages, psf, theme }) =>
    pages <= psf ? "#fff" : theme.textPrimaryColor};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    transition: 0.5s linear;
    content: "";
    width: ${({ pages }) => (pages === 1 ? 0 : "2rem")};
    height: 2px;
    background-color: ${({ pages, psf, theme }) =>
      pages <= psf ? theme.primaryColor : "#c2c4c7"};
    opacity: 0.5;

    position: absolute;
    right: 100%;
  }

  &:after {
    transition: 0.5s linear 1s;
    content: "";
    width: ${({ pages }) => (pages === 4 ? 0 : "2rem")};
    height: 2px;
    background-color: ${({ pages, psf, theme }) =>
      pages <= psf ? theme.primaryColor : "#c2c4c7"};
    opacity: 0.5;

    position: absolute;
    left: 100%;
  }

  @media (max-width: 480px) {
    &:before {
      width: ${({ pages }) => (pages === 1 ? 0 : "1.5rem")};
    }
    &:after {
      width: ${({ pages }) => (pages === 4 ? 0 : "1.5rem")};
    }
  }
`;
