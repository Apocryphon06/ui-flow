import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  // eslint-disable-next-line
  const [data,setData] = useState("John wick");

  return (
    <DataContext.Provider value={[data,setData]}>{props.children}</DataContext.Provider>
  );
};
