import { combineReducers } from "redux";
import AdminReducer from "./Admin/AdminReducer";
import CouponReducer from "./CouponReducer";
import AttributeReducer from "./AttributeReducer";
import GiftBoxReducer from "./GiftBoxReducer";
import GiftCardReducer from "./GiftCardReducer";
import DashboardReducer from "./DashboardReducer";

const rootReducer = combineReducers({
    admin:AdminReducer,
    coupon:CouponReducer,
    attribute:AttributeReducer,
    giftbox:GiftBoxReducer,
    giftcard:GiftCardReducer,
    dashboard:DashboardReducer,
});

export default rootReducer;