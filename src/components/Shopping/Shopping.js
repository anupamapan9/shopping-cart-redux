import React from 'react';
import { connect } from 'react-redux'
import Cart from '../Cart/Cart';
import ProductCard from '../ProductCard/ProductCard';
const Shopping = ({ products }) => {
    return (
        <section className='min:h-[92vh] bg-gradient-to-r from-[#645ead] via-[#2d2b43] to-[#20272e]'>
            <div className='max-w-6xl flex flex-col h-full md:flex-row gap-5 m-auto'>

                <div className='md:w-[60%] mx-2'>
                    {
                        products.map(product => <ProductCard product={product} key={product.id} />)
                    }

                </div>
                <div className='md:w-[40%] mx-2'>

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