import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo-ac.png'

const Navbar = () => {
  
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav) ;

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo image" style={{width:'60px'}}/>
      </div>
      
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes /> }
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Works</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social icons */}
      <div className='flex flex-col fixed top-[35%] left-0'>
        <ul>
          <li>
            <a href="">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default Navbar