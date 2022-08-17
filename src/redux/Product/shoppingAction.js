import { ADD_TO_CART, ADJUST_QUANTITY_INCREMENT, ADJUST_QUANTITY_DECREMENT, REMOVE_PRODUCT } from './shoppingType.js'

export const addToCart = (itemId) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}
export const adjustIncrement = (itemId) => {
    return {
        type: ADJUST_QUANTITY_INCREMENT,
        payload: {
            id: itemId,

        }
    }
}
export const adjustDecrement = (itemId) => {
    return {
        type: ADJUST_QUANTITY_DECREMENT,
        payload: {
            id: itemId,

        }
    }
}
export const removeProduct = (itemId, qty) => {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            id: itemId,
            qty: qty
        }
    }
}