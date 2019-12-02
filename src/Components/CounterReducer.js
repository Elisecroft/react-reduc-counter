const CounterReducer = (state = 0, action) => {
  if (action.type === "ADD-ONE") {
    return state + 1;
  } else if (action.type === "ADD-TEN") {
    return state + 10;
  } else if (action.type === "DELETE-ONE") {
    return state - 1;
  } else if (action.type === "DELETE-TEN") {
    return state - 10;
  }
  return state;
};
export default CounterReducer;
