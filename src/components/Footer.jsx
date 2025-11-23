import { Facebook, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-indigo-950 md:px-20 px-3 '>
            <footer className="flex flex-col md:flex-row justify-between py-5">

                <nav className='text-white'>
                    <h6 className="footer-title">Quick Links</h6>
                     
                    <a className="link link-hover">About</a>
                    <br />
                    <a className="link link-hover">Contact</a>
                    <br />
                    <a className="link link-hover">Privacy Policy</a>

                </nav>

                <div>
                <h1 className='text-white font-bold  mb-4'>Social Links</h1>
                <div className='flex gap-2 items-center text-white'>
                    <Twitter></Twitter>
                    <Linkedin></Linkedin>
                    <Facebook></Facebook>
                </div>
                </div>
           
            </footer>
            <div>
               
               <hr className='border-1/2 border-gray-700' />
               <p className='text-center text-white py-5'>Copyright © 2025 -PetPao All right reserved</p>
           </div>
        </div>
    );
};

export default Footer;