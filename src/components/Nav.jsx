import React, { useState } from 'react'

import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'

import { navLinks } from '../constants'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='padding-x py-8 absolute z-10 w-full' >
        <nav className='flex items-center justify-between max-container'>
            <a href="/">
                <img src={headerLogo} alt="Nikelogo" srcset="" width={130} height={30} />
            </a>
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <a href={link.href}
                        className='font-mono leading-normal text-lg text-slate-400'
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="menu icon" width={25} height={25}  className="cursor-pointer" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </div>
            {isMenuOpen && (
            <ul className="absolute top-full left-0 w-full bg-slate-100 p-4 flex flex-col items-start gap-3 lg:hidden">
                {navLinks.map((link) => (
                <li key={link.label}>
                    <a 
                    href={link.href} 
                    className="text-base text-gray-800 font-mono"
                    onClick={() => setIsMenuOpen(false)} 
                    >
                    {link.label}
                    </a>
                </li>
                ))}
            </ul>
            )}
        </nav>
    </header>
  )
}

export default Nav
