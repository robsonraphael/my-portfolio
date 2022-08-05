import { Routes, Route } from "react-router-dom";

// Components
import { Header } from "./components/header";

// Pages
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Experience } from "./pages/experience";

// Theme
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
          <Route path="experience" element={<Experience />}/>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
