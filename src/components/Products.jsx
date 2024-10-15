import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setProducts } from '../redux/productsSlice';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';

export default function Products() {

    const products = useSelector(state => state.products.data)
    const page = useSelector(state => state.products.page)

    const dispatch = useDispatch();

    let numberPorpage = 9;
    let ultimoReg = page * numberPorpage;
    let primerReg = ultimoReg - ultimoReg;

    let newData = products.slice(primerReg, ultimoReg);


    async function getData() {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products")
            dispatch(setProducts(response.data))
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(products);

    const paginar = (np) => {
        dispatch(setPage(np))
    }



    return (
        <>
            <div className='w-[90%] m-auto mt-5 grid grid-cols-3 gap-8'>
                {
                    newData.map((product, i) => {
                        return (
                            <div key={i}>
                                <Link to={`/product/${product.id}`}>
                                    <Card img={product.images} title={product.title} price={product.price} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

            <div className='w-[90%] m-auto flex justify-center mt-12'>
                {/* <button onClick={() => paginar(Math.max(page - 1, 1))}>Prev</button> */}
                <button className='bg-black text-white px-6 py-2 ' onClick={() => paginar(Math.min(page + 1, Math.ceil(products.length / numberPorpage)))}>Load more...</button>
            </div>

        </>
    )
}
