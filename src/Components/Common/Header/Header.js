import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TbBrightnessUp } from 'react-icons/tb';
import { MdDarkMode } from 'react-icons/md';

function Header() {

    const [theme, setTheme] = useState()

    useEffect(() => {
        if (localStorage.getItem('mode') == 'dark') {
            setTheme("dark")
        } else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    const handleModeButton = () => {
        if (localStorage.getItem('mode') == 'dark') {
            localStorage.setItem('mode', 'light')
            setTheme("light")
        } else {
            localStorage.setItem('mode', 'dark')
            setTheme('dark')
        }

    }

    return (
        <>
            <div className='fixed opacity-80 w-screen h-12 dark:text-white text-black dark:bg-slate-900 bg-sky-200'>
                <nav className='flex opacity-100 justify-center pt-3 font-semibold'>
                    <Link className='px-2' to="/">Home</Link>
                    <Link className='px-2' to="/about">About</Link>
                    <Link className='px-2' to="/contact">Contact</Link>
                    <Link className='px-2' to="/projects">Projects</Link>
                    <Link className='px-2' to="/blog">Blog</Link>
                </nav>
                <div className='flex justify-end md:mr-12 mr-5 mt-4'>
                    {theme != 'light' && <TbBrightnessUp size={30} className="cursor-pointer bg-gray-500  " onClick={handleModeButton} />}
                    {theme == 'light' && <MdDarkMode size={30} className="cursor-pointer" onClick={handleModeButton} />}
                </div>
            </div>
        </>
    )
}

export default Header