import {
  Header,
  Progress,
  Welcome,
  Workspace,
  EdenUse,
  Final,
} from "./components";
import GlobalStyles from "./components/styles/GlobalStyle";
import { StyledButton, StyledContainer } from "./components/styles/Mixin";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [pages, setPages] = useState(1);

  const changePages = () => {
    setPages((prevPage) => prevPage + 1);
  };

  return (
    <ThemeProvider theme={theme}>
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
        <Route
          path="/use"
          element={<EdenUse changePages={changePages} pages={pages} />}
        />
        <Route
          path="/final"
          element={<Final changePages={changePages} pages={pages} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
