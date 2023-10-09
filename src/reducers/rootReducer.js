import { combineReducers } from "redux";
import AdminReducer from "./Admin/AdminReducer";
import CouponReducer from "./CouponReducer";

const rootReducer = combineReducers({
    admin:AdminReducer,
    coupon:CouponReducer
});

export default rootReducer;