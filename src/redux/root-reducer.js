import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";
import productReducer from "./product/reducer";


const rootReducer = combineReducers({userReducer, cartReducer, productReducer});


export default rootReducer;