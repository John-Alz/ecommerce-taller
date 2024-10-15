import React from 'react'

export default function Hero() {
    return (
        <div>
            <div className="bg-hero w-[90%] h-screen m-auto bg-cover bg-no-repeat flex">
                <div className=' flex flex-col w-[50%] h-[25%] m-auto items-center justify-between'>
                    <h1 className='text-5xl font-bold'>Shop Smart, Easy</h1>
                    <button className='px-4 py-2 bg-black text-white text-xl'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}
