export const setBooks = (array) => {
  return (dispatch) => {
    dispatch({
      type: "SET_BOOKS",
      payload: array,
    });
  };
};

export const setNames = (arr) => {
  return (dispatch) => {
    dispatch({
      type: "SET_NAMES",
      payload: arr,
    });
  };
};
