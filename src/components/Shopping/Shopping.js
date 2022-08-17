import React from 'react';
import { connect } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard';
const Shopping = ({ products }) => {
    console.log(products)
    return (
        <section className='h-[90vh] bg-gradient-to-r from-[#19163A] via-[#19163A] to-[#0A2238]'>
            <div className='max-w-6xl flex gap-5 m-auto'>

                <div className='w-[75%] h-6'>
                    {
                        products.map(product => <ProductCard product={product} key={product.id} />)
                    }

                </div>
                <div className='w-[25%] bg-blue-500 h-6'></div>
            </div>

        </section>
    );
};
const mapStateToProps = (state) => {

    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Shopping);