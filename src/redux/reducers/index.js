import { combineReducers } from "redux";
import formReducer from "./form";

const allreducers = combineReducers({
  mydata: formReducer,
});

export default allreducers;
