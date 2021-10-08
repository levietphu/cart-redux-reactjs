import * as types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var inititalState = data ? data : [];

var findIndexToCart = (cart,product) => {
    var index = -1;
    if (cart.length > 0) {
        cart.forEach((value,key) => {
            if (value.product.id === product.id) {
                return index=key;
            }
        });
    }
    return index;
}

const myReducer = (state=inititalState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            var index = findIndexToCart(state,action.product);
            if (index!==-1) {
                state[index].quantity+=action.quantity;
            }else{
                state.push(action);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_CART_ITEM:
            var index = findIndexToCart(state,action.product);
            if (index!==-1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.UPDATE_CART_ITEM:
            var index = findIndexToCart(state,action.product);
            if (index!==-1) {
                state[index].quantity=action.quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        default:
            return [...state];
    }
}

export default myReducer;