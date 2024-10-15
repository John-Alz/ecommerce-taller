import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className='w-[90%] h-[68px] m-auto flex justify-between items-center'>
                <div>
                    <h1 className='font-bold text-4xl'><Link to={"/"}>Store</Link></h1>
                </div>
                <div className='flex gap-14'>
                    <ul className='flex gap-14 font-medium items-center'>
                        <li className='hover:font-bold'><NavLink className={({ isActive }) => (isActive ? "font-bold" : null)} to="/">Home</NavLink></li>
                        <li className='hover:font-bold'><NavLink className={({ isActive }) => (isActive ? "font-bold" : null)} to={'/products'}>products</NavLink></li>
                        <li className='hover:font-bold'><NavLink className={({ isActive }) => (isActive ? "font-bold" : null)} to={"/contact"}>Contact</NavLink></li>
                    </ul>
                    <div>
                        <button className='px-2 py-1 bg-black text-white font-semibold border border-black hover:bg-white hover:text-black'>Login</button>
                    </div>
                </div>

            </nav>
        </div>
    )
}
