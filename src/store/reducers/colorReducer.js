const initialState = [
  {
    color: "FFFFFF",
  },
];

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COLOR":
      return [{ color: action.color }, ...state];
    default:
      return state;
  }
};

export default colorReducer;
