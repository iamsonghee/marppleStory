const initialState = {
  font: "Arial",
  text: "",
  size: 50,
  txtcolor: "FFFFFF",
};
const fontReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FONT":
      return {
        font: action.font,
        text: state.text,
        size: state.size,
        txtColor: state.color,
      };
    case "SET_TEXT":
      return {
        font: state.font,
        text: action.text,
        size: state.size,
        txtColor: state.color,
      };
    case "SET_TXTCOLOR":
      return {
        font: state.font,
        text: state.text,
        size: state.size,
        txtColor: action.color,
      };

    default:
      return state;
  }
};

export default fontReducer;
