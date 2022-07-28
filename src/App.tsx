/* Components */
import { Header } from "./components/header";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Routes, Route } from "react-router-dom";

/* Theme */
import { ThemeProvider } from "styled-components";
import { Theme } from "./style/theme"

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
