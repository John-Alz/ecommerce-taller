import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Footer from '../components/Footer';


export default function Contacto() {
    return (
        <>
            <div className='w-[90%] m-auto text-center mt-12'>
                <h1 className='text-6xl font-bold mb-12'>Contact Us</h1>
                <div className='flex'>
                    <div className='w-[50%] '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1163.8490818697012!2d-74.08680112367965!3d4.618346003923231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9958568929bd%3A0x2f55e6997bd02efe!2sMallplaza%20NQS!5e0!3m2!1ses-419!2sco!4v1728957923917!5m2!1ses-419!2sco" width="100%" height="250" ></iframe>
                        <div className='flex flex-col items-start gap-1 mt-4'>
                            <h2 className='font-bold'>Store</h2>
                            <ul className='flex flex-col items-start'>
                                <li>Calle 123 #45-67, Barrio El Sol, Bogotá, Colombia.</li>
                                <li>(1) 234-5678</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start gap-3 mt-4'>
                            <h2 className='font-bold'>Follow us</h2>
                            <div className='flex gap-2'>
                                <FaInstagram />
                                <FaFacebookF />
                                <FaTwitter />
                                <FaTiktok />
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] flex'>
                        <form className='w-full flex flex-col gap-3'>
                            <div className='flex justify-end'>
                                <input className='w-10/12 p-2 bg-transparent border border-black placeholder-black' type="text" required placeholder="Escribe aca" />
                            </div>
                            <div className='flex justify-end'>
                                <input className='w-10/12 p-2 bg-transparent border border-black placeholder-black' type="text" required placeholder="Escribe aca" />
                            </div>
                            <div className='flex justify-end'>
                                <input className='w-10/12 p-2 bg-transparent border border-black placeholder-black' type="text" required placeholder="Escribe aca" />
                            </div>
                            <div className='flex justify-end'>
                                <input className='w-10/12 p-2 bg-transparent border border-black placeholder-black' type="text" required placeholder="Escribe aca" />
                            </div>
                            <div className='flex justify-end'>
                                <textarea className='w-10/12 p-2 bg-transparent border border-black placeholder-black' required name="textarea" rows="5" cols="69">Write something here</textarea>
                            </div>
                            <div className='w-[67%] m-auto flex items-start'>
                                <button className='bg-black text-white px-8 py-2 hover:border border-black hover:bg-transparent hover:text-black ease-linear duration-300'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
