import {
  Header,
  Progress,
  Welcome,
  Workspace,
  EdenUse,
  Final,
} from "./components";
import GlobalStyles from "./components/styles/GlobalStyle";
import { StyledContainer } from "./components/styles/Mixin";
import { ThemeProvider } from "styled-components";
import {theme} from "./components/styles/Theme"
import { useState } from "react";
import {Routes, Route} from 'react-router-dom';

function App() {

   const [pages, setPages] = useState(1);

   const changePages = () => {
       setPages(prevPage =>  prevPage+1);
   }


  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <GlobalStyles />
        <Header />
        <Progress />
        <Routes>
          <Route
            path="/"
            element={<Welcome changePages={changePages} pages={pages} />}
          />
          <Route
            path="/workspace"
            element={<Workspace changePages={changePages} pages={pages} />}
          />
        </Routes>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
