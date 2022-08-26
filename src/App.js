import React from "react";
import Home from "./pages/Home";
import Brand from "./components/Brand";
import Finish from "./pages/Finish";
import Usage from "./pages/Usage";
import Workspace from "./pages/Workspace";
import MyCard from "./components/MyCard";

const App = () => {
  return (
    <div className="App">
      <Brand />
      <Usage/>
    </div>
  );
};

export default App;
