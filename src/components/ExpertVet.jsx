import React from 'react';
import img1 from '../assets/doctor1.jpg'
import img2 from '../assets/doctor2.jpg'
import img3 from '../assets/doctor3.jpg'
const ExpertVet = () => {
    return (
       < >
        <div> 
           <h1 className='text-2xl md:text-4xl text-blue-700 text-center font-semibold my-10'> Meet Our Expert Vets</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 w-full md:w-7xl md:mx-auto gap-10'>
            <div className='shadow-2xl  py-5 rounded-2xl mb-5'>
                <img className='w-[300px] rounded-2xl h-[300px] mx-auto' src={img1} alt="" />
              <div className='text-center '>
              <h3 className='text-xl my-3 font-semibold text-blue-700'>Dr. Alexander de Lahunta</h3>
              <p className='font-semibold'>Veterinary Neurology</p>
              </div>
            </div>
            <div className='shadow-2xl  py-5 rounded-2xl mb-5'>
                <img className='w-[300px] mx-auto rounded-2xl h-[300px]' src={img2} alt="" />
                <div className='text-center '>
                <h3 className='text-xl my-3 font-semibold text-blue-700'>Dr. C. Wayne McIlwraith</h3>
                <p className='font-semibold'>Equine Orthopaedic Surgery</p>
                </div>
            </div>
            <div className=' shadow-2xl  py-5 rounded-2xl mb-5'>
                <img className='w-[300px] rounded-2xl h-[300px] mx-auto' src={img3} alt="" />
                <div className='text-center '>
                <h3 className='text-xl my-3 font-semibold text-blue-700'>Prof. FrankJ. M. Verstraete</h3>
                <p className='font-semibold'>Veterinary Dentistry & Oral Surgery</p>
                </div>
            </div>
        </div>
       </>
    );
};

export default ExpertVet;