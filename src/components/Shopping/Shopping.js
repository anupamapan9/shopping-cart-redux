import React from 'react';
import { connect } from 'react-redux'
import Cart from '../Cart/Cart';
import ProductCard from '../ProductCard/ProductCard';
const Shopping = ({ products }) => {
    console.log(products)
    return (
        <section className='h-[90vh] bg-gradient-to-r from-[#19163A] via-[#19163A] to-[#0A2238]'>
            <div className='max-w-6xl flex gap-5 m-auto'>

                <div className='w-[60%] h-6'>
                    {
                        products.map(product => <ProductCard product={product} key={product.id} />)
                    }

                </div>
                <div className='w-[40%]'>

                    <Cart />
                </div>
            </div>

        </section>
    );
};
const mapStateToProps = (state) => {
    console.log(state)

    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Shopping);