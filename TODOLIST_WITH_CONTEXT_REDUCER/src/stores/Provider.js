import { useReducer } from "react";
import { StoresContext } from ".";
import logger from "./logger";
import reducer, { initState } from "./reducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  return (
    <StoresContext.Provider value={[state, dispatch]}>
      {children}
    </StoresContext.Provider>
  );
}

export default Provider;
