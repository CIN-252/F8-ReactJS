import React, { useEffect, useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };

  const prevCount = useRef(); // undefined
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const h3ref = useRef();
  useEffect(() => {
    // Lay toa do cua the h3
    const rect = h3ref.current.getBoundingClientRect();
  });

  return (
    <React.Fragment>
      <h1>Count: {count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>

      <h2>
        {undefined || null ? "Undefined" : `Prev Count: ${prevCount.current}`}
      </h2>

      <h3 ref={h3ref}>
        useRef còn dc dùng như thuộc tính của thẻ để lấy ra thẻ đó giống
        getElementBy...
      </h3>
    </React.Fragment>
  );
}

export default Counter;
