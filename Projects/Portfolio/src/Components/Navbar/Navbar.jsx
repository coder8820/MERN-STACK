import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20'>
        <span>proCoder</span>
        <ul className='flex gap-10 text-sm md:text-base'>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contacts</li>
        </ul>
    </nav>
  )
}

export default Navbar
