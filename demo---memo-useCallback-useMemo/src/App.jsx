import "./App.css";
import Memo from "./components/Memo";
import Counter from "./components/Counter";
import { useCallback, useState, useEffect } from "react";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";

function App() {
  const [count, setCount] = useState(0);

  // useCallback
  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="App">
      {/* <Counter /> */}

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Memo />

      <UseCallback onIncrease={handleIncrease} />

      <UseMemo />
    </div>
  );
}

export default App;
