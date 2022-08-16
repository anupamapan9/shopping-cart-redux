import { ADD_TO_CART, ADJUST_QUANTITY, REMOVE_PRODUCT } from './shoppingType.js'
const INITIAL_STATE = {
    // allProducts -----------------
    shop: [
        { id: 1, name: "Dell Optiplex 5090 Core i7 11th Gen Brand PC", price: 92000, quantity: 32, image: null },
        { id: 2, name: "Asus Vivobook X515MA", price: 32000, quantity: 20, image: null },
        { id: 3, name: "Dell E1916HV 18.5 Inch ", price: 9800, quantity: 35, image: null },
        { id: 4, name: "Canon Eos 4000D 18MP", price: 36000, quantity: 40, image: null },
    ],
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            return
        case ADJUST_QUANTITY:
            return
        case REMOVE_PRODUCT:
            return
        default:
            break;
    }
}
export default shopReducer