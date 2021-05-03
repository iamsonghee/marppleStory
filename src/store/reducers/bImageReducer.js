const bImageReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_BIMAGE":
      return action.img;
    default:
      return state;
  }
};

export default bImageReducer;
