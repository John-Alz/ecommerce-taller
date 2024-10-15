import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { setdataSingleProduct } from '../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Footer from './Footer';

export default function DetailProduct() {

    const product = useSelector(state => state.products.dataSingleProduct)

    const params = useParams()
    console.log(params.id);
    const dispatch = useDispatch()


    async function getDataProduct() {
        try {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
            dispatch(setdataSingleProduct(response.data))
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect(() => {
        getDataProduct();
    }, [params.id]);

    console.log(product);



    return (
        <>
            <div className=' h-screen flex'>
                <div className='w-[90%] m-auto flex gap-5 '>
                    <div className='w-[60%] flex'>
                        <div className='grid grid-cols-2 gap-4'>
                            {
                                product && product.images && product.images.slice(0, 2).map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <img className='cursor-pointer' src={item} alt={product.title} />
                                        </div>
                                    )
                                })
                            }
                        </div>


                    </div>
                    <div className='w-[40%] flex flex-col gap-3'>
                        <h2 className='text-3xl font-medium'>{product.title}</h2>
                        <p className='text-gray-400'>{product?.category?.name || 'No category'}</p>
                        <p>${product.price}</p>
                        <button className='bg-black text-white text-xl py-3 px-32 cursoro-pointer hover:bg-transparent border border-black hover:text-black ease-in duration-300'>+ Add To Cart</button>
                        <p>{product.description}</p>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}
