const btnReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_BUTTON":
      return action.id;
    default:
      return state;
  }
};

export default btnReducer;
