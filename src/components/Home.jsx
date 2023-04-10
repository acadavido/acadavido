import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-500'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Andrea Cadavid</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam optio vero, mollitia iste doloremque enim eligendi aspernatur necessitatibus. Sit fuga similique commodi aperiam ut tempore exercitationem ducimus eligendi? Tempore.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-500 hover:border-green-500'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Home