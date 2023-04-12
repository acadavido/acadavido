import React from 'react'
import Platzi from '../assets/logoPlatzi.png';
import UdeA from '../assets/UdeATexto.png';
import Henry from '../assets/henry.png';

const Courses = () => {
  return (
    <div name='courses' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-green-500'>Courses</p>
                <p className='py-4'>These are the certificates I've got so far</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='pt-3 w-20 mx-auto' src={Platzi} alt="HTML icon" />
                    <p className='my-4'>Git and GitHub</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='pt-3 w-20 mx-auto' src={Platzi} alt="HTML icon" />
                    <p className='my-4'>Practical JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='pt-3 w-20 mx-auto' src={Platzi} alt="HTML icon" />
                    <p className='my-4'>Practical Frontend Developer</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='pt-3 w-20 mx-auto' src={Platzi} alt="HTML icon" />
                    <p className='my-4'>REST API with JavaScript</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='pt-3 w-20 mx-auto' src={Platzi} alt="HTML icon" />
                    <p className='my-4'>Data Analysis</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='pt-7 w-20 mx-auto' src={Henry} alt="HTML icon" />
                    <p className='my-4'>Bootcamp Full Stack Developer</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Courses