import React, { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "./actions";
import reducer, { initState } from "./reducer";
import logger from "./logger";

function Todolist() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;
  // console.log(state);
  const inputRef = useRef();

  const handleInputChange = (e) => {
    // console.log(setJob(e.target.value));
    dispatch(setJob(e.target.value));
  };

  const handleSubmit = () => {
    // console.log(addJob(job));
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  const handleItemDelete = (index) => {
    // console.log(index);
    dispatch(deleteJob(index));
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter todo..."
        value={job}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => handleItemDelete(index)}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
