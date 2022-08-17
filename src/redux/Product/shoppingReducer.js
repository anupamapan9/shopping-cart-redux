import { ADD_TO_CART, ADJUST_QUANTITY_INCREMENT, REMOVE_PRODUCT, ADJUST_QUANTITY_DECREMENT } from './shoppingType.js'
const INITIAL_STATE = {
    // allProducts -----------------
    products: [
        { id: 1, name: "Dell Optiplex 5090 ", price: 92000, quantity: 32, image: "https://i.ibb.co/XJ2tCQ1/dell-optiplex-5090-i7-11th-gen-brand-pc-500x500.jpg" },
        { id: 2, name: "Asus Vivobook X515MA", price: 32000, quantity: 20, image: "https://i.ibb.co/CtM1WN1/vivobook-x515ma-01-500x500.jpg" },
        { id: 3, name: "Dell E1916HV 18.5 Inch ", price: 9800, quantity: 35, image: "https://i.ibb.co/6DqypNC/e1916h-1-500x500.jpg" },
        { id: 4, name: "Canon Eos 4000D 18MP", price: 36000, quantity: 40, image: "https://i.ibb.co/V3NWHQ4/4000d-1-500x500.jpg" },
    ],
    cart: []
}



const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Great Item data from products array
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            console.log('hello')
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, cartQty: item.cartQty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, cartQty: 1 }],
                products: state.products.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1 } : item
                )
            };
        case ADJUST_QUANTITY_DECREMENT:

            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, cartQty: item.cartQty + 1 }
                        : item
                ),
                products: state.products.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1 } : item
                )
            };
        case ADJUST_QUANTITY_INCREMENT:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, cartQty: item.cartQty - 1 }
                        : item
                ),
                products: state.products.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        case REMOVE_PRODUCT:

            return {

                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
                products: state.products.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + action.payload.qty } : item)
            };
        default:
            return state
    }
}
export default shopReducer