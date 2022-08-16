import { combineReducers } from "redux";
import shopReducer from "./Product/shoppingReducer";


const rootReducer = combineReducers({
    shop: shopReducer
})
export default rootReducer