import { ADD_TO_CART, ADJUST_QUANTITY, REMOVE_PRODUCT } from './shoppingType.js'

export const addToCart = (itemId) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}
export const adjustQuantity = (itemId) => {
    return {
        type: ADJUST_QUANTITY,
        payload: {
            id: itemId
        }
    }
}
export const removeProduct = (itemId) => {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            id: itemId
        }
    }
}