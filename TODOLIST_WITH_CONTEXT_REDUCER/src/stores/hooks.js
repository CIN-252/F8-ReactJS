import { useContext } from "react";
import Context from "./Context";

// useContext custom hooks:
export const useStore = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};
