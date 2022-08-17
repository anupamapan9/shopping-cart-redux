import React from 'react';
import { MdAddShoppingCart } from "react-icons/md"
const ProductCard = ({ product }) => {
    const { name, price, quantity, image } = product
    return (
        <div className='flex justify-evenly gap-9 bg-transparent items-center rounded shadow-lg shadow-black my-10 py-5  text-white font-semibold'>
            <div className='w-14 h-14 rounded-lg'><img className='rounded-lg w-14 h-14' src={image} alt="" /></div>
            <div><h1>{name}</h1></div>
            <div><h1>$ {price} </h1></div>
            <div><h1>{quantity} pic</h1></div>
            <button className='text-[#7e3fddd4] rounded-full bg-white shadow-2xl p-2 shadow-red-800 '><MdAddShoppingCart /></button>
        </div>
    );
};

export default ProductCard;