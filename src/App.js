import React from "react";
import Brand from "./components/Brand";
import { PathContextProvider } from "./context/PathContext";
import RenderPages from "./components/RenderPages";
// eslint-disable-next-line
import ProgressBar from "./components/ProgressBar";

const App = () => {
  return (
    <PathContextProvider>
      <div className="App">
        <Brand />
        <RenderPages />
      </div>
    </PathContextProvider>
  );
};

export default App;
