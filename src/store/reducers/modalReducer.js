const modalReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_MODAL_WIN":
      return action.isOpen;
    default:
      return state;
  }
};

export default modalReducer;
