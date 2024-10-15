import React from 'react'

export default function Card({ img, title, price }) {

    return (
        <div>
            <div className='w-[400px] cursor-pointer'>
                <img src={img} alt={title} />
                <p className='font-light	'>{title}</p>
                <p className='font-light	'>${price}</p>
            </div>
        </div>
    )
}
