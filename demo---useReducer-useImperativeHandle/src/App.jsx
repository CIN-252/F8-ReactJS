import React, { useEffect, useRef } from "react";
import "./App.css";
// import Counter from "./components/Counter";
// import Todolist from "./components/Todolist";
import Theme from "./components/ThemeContext/Theme";
import ThemeProvider from "./components/ThemeContext/ThemeProvider";
import Video from "./components/useImperativeHandle/Video";

function App() {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef.current);
  });

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Todolist /> */}

      {/* <ThemeProvider>
        <Theme />
      </ThemeProvider> */}

      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
