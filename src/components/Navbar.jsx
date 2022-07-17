import React, {useState} from 'react';

const Navbar = () => {
    const {nav, setNav} = useState(false)
    const handleClick = () => setNav(!nav)
  
    return (

    <div onClick={handleClick}className='fixed w-full h-20 flex justify-between items-center px-4 bg-black text-white'>Salvador Banuelos
        <ul className='flex'>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
    </div>

  )
}

export default Navbar