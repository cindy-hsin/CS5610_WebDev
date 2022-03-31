const initialState = {
  total: 0,
  history : [0]
};

export default function calculate(state = initialState, action) {
  switch(action.type) {
    case "ADD":
      const newAddTotal = state.total + action.value;
      return {
        ...state,
        total: newAddTotal,
        history: [newAddTotal, ...state.history ]
      }
      // return state + action.value;
    case "SUBTRACT":
      const newSubtractTotal = state.total - action.value;
      return {
        ...state,
        total: newSubtractTotal,
        history: [newSubtractTotal, ...state.history, ]
      }
      // return state - action.value;
    default:
      return state;
  }
}
