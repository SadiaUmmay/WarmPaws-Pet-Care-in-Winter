import React from 'react';
import img1 from '../assets/pet3.jpg'
import img2 from '../assets/pet1.jpg'
import img3 from '../assets/pet2.png'
import img4 from '../assets/pet4.jpg'

const WinterCare = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl md:text-4xl text-blue-700 text-center font-semibold my-10'> Winter Care Tips For Vets</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 w-full md:w-7xl md:mx-auto gap-10 mb-10'>
            <div className='shadow-2xl  p-5 rounded-xl border mb-5'>
                <img className='w-20 rounded-2xl h-20 ' src={img1} alt="" />
              <div className='  '>
              <h3 className='text-xl my-3 font-semibold text-blue-700'>use pet-safe salt </h3>
              <p className='font-semibold'>“Avoid icy areas; use pet-safe salt and keep them active indoors.”</p>
              </div>
            </div>
            <div className='shadow-2xl  p-5 rounded-xl border mb-5'>
                <img className='w-20 rounded-2xl h-20' src={img2} alt="" />
                <div className='  '>
                <h3 className='text-xl my-3 font-semibold text-blue-700'>limit outdoor time</h3>
                <p className='font-semibold'>“Protect pets from frostbite; limit outdoor time and provide cozy bedding.”</p>
                </div>
            </div>
            <div className=' shadow-2xl  p-5 rounded-xl border mb-5'>
                <img className='w-20 rounded-2xl h-20' src={img3} alt="" />
                <div className='  '>
                <h3 className='text-xl my-3 font-semibold text-blue-700'>ensure they stay warm</h3>
                <p className='font-semibold'>“Check pets’ water daily; ensure they stay warm and eat nutritious food.”</p>
                </div>
            </div>
            <div className=' shadow-2xl  p-5 rounded-xl border mb-5'>
                <img className='w-20 rounded-2xl h-20 ' src={img4} alt="" />
                <div className=' '>
                <h3 className='text-xl my-3 font-semibold text-blue-700'>dry pets after walks</h3>
                <p className='font-semibold'>“Trim nails, clean paws, and dry pets after walks in snow or ice.”</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default WinterCare;