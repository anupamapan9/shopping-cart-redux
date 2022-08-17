import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const Cart = ({ carts }) => {
    console.log(carts)
    return (
        <div>
            {carts.map(cart => <CartItem cart={cart} key={cart.id} />)}
        </div>
    );
};
const mapStateToProps = (state) => {
    console.log(state)
    return {
        carts: state.shop.cart
    }
}
export default connect(mapStateToProps)(Cart);