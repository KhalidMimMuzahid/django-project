/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const MyContext = createContext();
const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({
    roomCode: null,
  });
  const values = { state, setState };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
