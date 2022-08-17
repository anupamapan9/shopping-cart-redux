import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const Cart = ({ carts }) => {
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        let totalCart = 0;
        let cartPrice = 0;
        carts.forEach((item) => {
            totalCart += item.cartQty
            console.log(item.price)
            cartPrice += item.cartQty * item.price
            console.log(cartPrice)
        })
        setPrice(cartPrice)
        setCount(totalCart)

    }, [carts])

    return (
        <div> {
            carts.length > 0 &&
            <><div>
                <h2 className='text-center shadow-lg my-5 shadow-black py-3 text-white font-bold text-xl'>Total Selected Item: {count}</h2>
                <div className='shadow-lg my-5 shadow-black py-14'>
                    <h2 className='text-center  text-white font-bold text-xl'>Total Price</h2>
                    <h1 className='text-center  text-white font-bold text-3xl'> {price}</h1>
                </div>
            </div>
                <div>
                    <h2 className='text-center text-white font-semibold text-xl'>Cart</h2>

                    {carts.map(cart => <CartItem cart={cart} key={cart.id} />)}
                </div></>
        }
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