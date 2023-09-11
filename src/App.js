import "./App.css";
import { useState } from "react";
import Page from "./component/Page";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />;
    </ThemeContext.Provider>
  );
}

export default App;
