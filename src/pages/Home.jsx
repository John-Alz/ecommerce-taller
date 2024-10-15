import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProductosDestacados from '../components/ProductosDestacados'
import Models from '../components/Models'

export default function Home() {
    return (
        <div>
            <Hero />
            <ProductosDestacados />
            <div className='bg-black w-[90%] m-auto my-12 flex justify-center'>
                <h2 className='text-white text-2xl p-8 text-center font-bold'>Free delivery in the Bogota, <br /> Medellin & Santa Marta.</h2>
            </div>
            <Models />
            <Footer />
        </div>
    )
}
