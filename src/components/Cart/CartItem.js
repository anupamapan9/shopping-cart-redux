import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeProduct, adjustDecrement, adjustIncrement } from '../../redux/Product/shoppingAction'
const CartItem = ({ cart }) => {
    const dispatch = useDispatch()
    const { image, cartQty, id, quantity } = cart;

    const handelRemoveFromCart = (itemId, qty) => {
        dispatch(removeProduct(itemId, qty))
    }
    const handelDecrement = (itemId, qty) => {
        if (cartQty > 1) {
            dispatch(adjustDecrement(itemId))
        } else {
            dispatch(removeProduct(itemId, qty))
        }

    }
    const handelIncrement = (itemId) => {
        if (quantity > cartQty) {
            dispatch(adjustIncrement(itemId))
        }

    }
    return (
        <div className='flex justify-evenly gap-9 bg-transparent items-center rounded shadow-lg shadow-black my-5 py-2  text-white font-semibold'>
            <div className='w-14 h-14 rounded-lg'>
                <img className='rounded-lg w-14 h-14' src={image} alt="" /></div>
            <div className='flex gap-3'>

                <button onClick={() => handelDecrement(id, cartQty)} className='text-[#7e3fddd4] rounded-full bg-white shadow-2xl p-2 shadow-red-800 '><AiFillMinusCircle /></button>

                <h3 className='text-2xl'>{cartQty}</h3>
                <button onClick={() => handelIncrement(id)} className='text-[#7e3fddd4] rounded-full bg-white shadow-2xl p-2 shadow-red-800 '><BsFillPlusCircleFill /></button>
            </div>
            <button onClick={() => handelRemoveFromCart(id, cartQty)} className='text-[#ff0202] rounded-full text-xl bg-white shadow-2xl p-2 shadow-red-800 '>
                <MdDelete />
            </button>

        </div>
    );
};

export default CartItem;