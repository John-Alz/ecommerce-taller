import React from 'react'
import modelOne from "../assets/img/img1.jpg"
import modelTwo from "../assets/img/img2.avif"


export default function Models() {
    return (
        <div className='w-[90%] m-auto flex gap-8'>
            <div className='w-[50%]'>
                <img src={modelOne} alt='modelUno' />
            </div>
            <div className='w-[50%]'>
                <img src={modelTwo} alt='modelUno' />
            </div>
        </div>
    )
}
