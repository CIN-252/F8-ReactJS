import { ADD_TODO, DELETE_TODO, SET_TODO_INPUT } from "./constants";

// initState:
const initState = {
  todo: "",
  todos: [],
};

// reducer:
const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodos,
      };
    default:
      throw new Error("Invalid Action!");
  }
};

export { initState };
export default reducer;
