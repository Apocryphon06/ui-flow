import React from "react";
import Brand from "./components/Brand";
import { PathContextProvider } from "./context/PathContext";
import { DataContextProvider } from "./context/DataContext";

import RenderPages from "./components/RenderPages";
// eslint-disable-next-line
import ProgressBar from "./components/ProgressBar";

const App = () => {
  return (
    <PathContextProvider>
    <DataContextProvider>
      <div className="App">
        <Brand />
        <RenderPages />
      </div>
      </DataContextProvider>
    </PathContextProvider>
  );
};

export default App;
