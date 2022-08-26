import React from "react";
import Brand from "./components/Brand";
import { PathContextProvider } from "./context/PathContext";
import RenderPages from "./components/RenderPages";

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
