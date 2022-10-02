import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
   box-sizing: inherit;
}

html {
   box-sizing: border-box;
   width: 100%;
   scroll-behavior: smooth;
}

body #root {
    width: 100%;
    height: 90vh;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif;
    color: ${({ theme }) => theme.textPrimaryColor};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem; 
}

body::-webkit-scrollbar {
  display: none;
}

a,
a:visited,
a:active {
  text-decoration: none;
}

.link{
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
}
`;

export default GlobalStyles;
