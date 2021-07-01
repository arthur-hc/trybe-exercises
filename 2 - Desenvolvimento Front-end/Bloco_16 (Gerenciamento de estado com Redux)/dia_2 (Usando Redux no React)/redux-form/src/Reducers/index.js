import { combineReducers } from "redux";
import candidatesReducer from "./candidatesReducer";

const rootReducer = combineReducers({candidatesReducer})

export default rootReducer;