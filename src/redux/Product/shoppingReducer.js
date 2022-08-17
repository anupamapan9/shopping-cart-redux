import { ADD_TO_CART, ADJUST_QUANTITY, REMOVE_PRODUCT } from './shoppingType.js'
const INITIAL_STATE = {
    // allProducts -----------------
    products: [
        { id: 1, name: "Dell Optiplex 5090 ", price: 92000, quantity: 32, image: "https://i.ibb.co/XJ2tCQ1/dell-optiplex-5090-i7-11th-gen-brand-pc-500x500.jpg" },
        { id: 2, name: "Asus Vivobook X515MA", price: 32000, quantity: 20, image: "https://i.ibb.co/CtM1WN1/vivobook-x515ma-01-500x500.jpg" },
        { id: 3, name: "Dell E1916HV 18.5 Inch ", price: 9800, quantity: 35, image: "https://i.ibb.co/6DqypNC/e1916h-1-500x500.jpg" },
        { id: 4, name: "Canon Eos 4000D 18MP", price: 36000, quantity: 40, image: "https://i.ibb.co/V3NWHQ4/4000d-1-500x500.jpg" },
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
            return state
    }
}
export default shopReducer