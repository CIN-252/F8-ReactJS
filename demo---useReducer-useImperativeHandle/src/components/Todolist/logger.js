function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type);
    console.log("Action:", action);
    console.log("Prev State: ", prevState);
    const newState = reducer(prevState, action);
    console.log("New State: ", newState);
    console.groupEnd();
    return newState;
  };
}

export default logger;
