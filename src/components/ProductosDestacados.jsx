import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function ProductosDestacados() {

    const products = useSelector(state => state.products.data)
    console.log(products);


    let productosDestacados = products.slice(3, 6)
    console.log(productosDestacados);


    return (
        <div className='w-[90%] m-auto mt-9 '>
            <div className='mb-5'>
                <p className='bg-black w-24 text-white text-md text-center py-1 '>Best Selling</p>
            </div>
            <div className='grid grid-cols-3'>
                {productosDestacados.map((product, i) => {
                    return (
                        <div>
                            <Link to={`/product/${product.id}`}>
                                <Card img={product.images} title={product.title} price={product.price} />
                            </Link>
                        </div>
                    )
                })
                }
            </div>
        </div>

    )
}
