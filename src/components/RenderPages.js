import React from "react";
import { useContext } from "react";
import { PathContext } from "../context/PathContext";
import Home from "../pages/Home";
import Workspace from "../pages/Workspace";
import Usage from "../pages/Usage";
import Finish from "../pages/Finish";

const RenderPages = () => {
  // eslint-disable-next-line
  const [pname, setPname] = useContext(PathContext);
  const myFunction = () => {
    if (pname === "/home") return <Home />;
    if (pname === "/workspace") return <Workspace />;
    if (pname === "/usage") return <Usage />;
    if (pname === "/finish") return <Finish />;
  };

  return <>{myFunction()}</>;
};

export default RenderPages;
