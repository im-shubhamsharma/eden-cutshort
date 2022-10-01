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

body {
    width: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif;
    color: ${({ theme }) => theme.textPrimaryColor}
}

body::-webkit-scrollbar {
  display: none;
}

${'' /* h1,
h2,
h3 {
  font-weight: 500;
  line-height: 1.1;
  margin-top: 0;
} */}

${'' /* p {
  margin: 0;
} */}

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

/*
@media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }
*/
