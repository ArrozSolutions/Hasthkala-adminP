import { combineReducers } from "redux";
import AdminReducer from "./Admin/AdminReducer";

const rootReducer = combineReducers({
    admin:AdminReducer,
});

export default rootReducer;