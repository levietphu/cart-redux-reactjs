import { combineReducers } from "redux";
import product from './product';
import message from './message';
import cart from './cart';

const myReducer = combineReducers({
    product,
    cart,
    message
});

export default myReducer;