import { useRef } from "react";
import "./App.css";
import { actions, useStore } from "./stores";

function App() {
  const [state, dispatch] = useStore();
  const { todo, todos } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(actions.addTodo(todo));
    dispatch(actions.setTodoInput(""));
    inputRef.current.focus();
  };

  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index));
  };

  return (
    <div className="App">
      <input
        type={"text"}
        placeholder="Enter Input..."
        value={todo}
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <span
              style={{
                cursor: "pointer",
                marginLeft: "20px",
              }}
              onClick={() => handleDelete(index)}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
