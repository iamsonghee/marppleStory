import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import btnReducer from "./btnReducer";
import fontReducer from "./fontReducer";
import modalReducer from "./modalReducer";
import finalCoverReducer from "./finalCoverReducer";
import bImageReducer from "./bImageReducer";
export default combineReducers({
  colorReducer,
  btnReducer,
  fontReducer,
  modalReducer,
  finalCoverReducer,
  bImageReducer,
});
