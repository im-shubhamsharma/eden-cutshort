import React, { useEffect, useState } from "react";
import { ProgressContainer, StyledCircle } from "./styles/Progress.style";
import { useLocation } from "react-router-dom";

const Progress = ({ pages, changePages }) => {
  const [psf, setPsf] = useState(1);

  const location = useLocation().pathname.slice(1);

  useEffect(() => {
    if (location === "workspace") {
      setPsf(2);
    } else if (location === "use") {
      setPsf(3);
    } else if (location === "final") {
      setPsf(4);
    } else {
      setPsf(1);
    }
  }, [location]);

  console.log(psf);

  return (
    <ProgressContainer>
      <StyledCircle pages={1} psf={psf}>
        1
      </StyledCircle>
      <StyledCircle pages={2} psf={psf}>
        2
      </StyledCircle>
      <StyledCircle pages={3} psf={psf}>
        3
      </StyledCircle>
      <StyledCircle pages={4} psf={psf}>
        4
      </StyledCircle>
    </ProgressContainer>
  );
};

export default Progress;
