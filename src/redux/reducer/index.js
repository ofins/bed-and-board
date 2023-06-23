import { combineReducers } from "redux";
import user from "./user";
import isLoggedIn from "./isLoggedIn";

const allReducers = combineReducers({
    user,
    isLoggedIn
})

export default allReducers;