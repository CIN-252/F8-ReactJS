import { useReducer } from "react";

// Init State:
const initState = 0;

// Actions:
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Reducer:
const reducer = (state, action) => {
  console.log("Reducer run...!");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid Action!");
  }
};

function Counter() {
  const [counter, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          dispatch("up");
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          dispatch("down");
        }}
      >
        Down
      </button>
    </>
  );
}

export default Counter;
