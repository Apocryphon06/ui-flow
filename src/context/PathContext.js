import { createContext } from "react";
import { useState } from "react";

export const PathContext = createContext();

export const PathContextProvider = (props) => {
  const [pname, setPname] = useState("/home");

  return (
    <PathContext.Provider value={[pname, setPname]}>
      {props.children}
    </PathContext.Provider>
  );
};
