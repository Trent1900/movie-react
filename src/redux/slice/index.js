import { combineReducers } from "@reduxjs/toolkit";
import navReducer from "./nav/navSlice";

const reducer = combineReducers({ nav: navReducer });

export default reducer;
