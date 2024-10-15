import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";






export default function Footer() {
    return (
        <div className='bg-black p-12 mt-24'>
            <div className='flex justify-between text-white font-light'>
                <div className='leading-8'>
                    <p className='font-bold text-lg mb-3'>customer service</p>
                    <ul>
                        <li>FAQ</li>
                        <li>Shipping</li>
                    </ul>
                </div>
                <div className='leading-8'>
                    <p className='font-bold text-lg mb-3'>company</p>
                    <ul>
                        <li>Disclaimer</li>
                        <li>Cookie Polity</li>
                        <li>Cookie Statement</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div className='leading-8'>
                    <p className='font-bold text-lg mb-3'>account</p>
                    <ul>
                        <li>Resgister</li>
                        <li>Login</li>
                        <li>My Orders</li>
                    </ul>
                </div>
                <div className='leading-5'>
                    <h2 className='font-bold text-lg mb-3'>newsletter</h2>
                    <p>Subscribe to our newsletter and stay update <br /> on the latest collections and special offers</p>
                    <form className='mt-6'>
                        <input className='border border-gray-400 bg-transparent p-2' type='text' placeholder='Join our mailing list' />
                        <button className='border border-gray-400  bg-transparent p-2 font-bold'>subscribe</button>
                    </form>
                </div>
            </div>
            <div className='flex gap-5'>
                <FaInstagram color='white' />
                <FaFacebookF color='white' />
                <FaTwitter color='white' />
                <FaTiktok color='white' />
                <FaYoutube color='white' />
            </div>
        </div>
    )
}
