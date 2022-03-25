const namesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_NAMES":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default namesReducer;
