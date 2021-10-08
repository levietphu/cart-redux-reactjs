import * as types from '../constants/ActionType';

export const listProduct = () => {
    return {
        type: types.LIST_PRODUCT
    }
}
export const addToCart = (product,quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
    
}

export const msgAddSuccess  = (message) => {
    return {
        type: types.MSG_ADD_SUCCESS,
        message
    }
}

export const deleteCartItem = (product) => {
    return {
        type: types.DELETE_CART_ITEM,
        product
    }
}

export const msgDeleteSuccess = (message) => {
    return {
        type : types.MSG_DELETE_SUCCESS,
        message
    }
}

export const UpdateCartItem = (product, quantity) => {
    return {
        type : types.UPDATE_CART_ITEM,
        product,
        quantity
    }
}

export const msgUpdateSuccess = (message) =>{
    return {
        type: types.MSG_UPDATE_SUCCESS,
        message
    }
}
