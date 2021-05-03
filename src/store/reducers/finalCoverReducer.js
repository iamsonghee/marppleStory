const finalCoverReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_FINALCOVER":
      return action.img;
    default:
      return state;
  }
};

export default finalCoverReducer;
