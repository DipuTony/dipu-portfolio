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
            <div className='dark w-screen h-10 dark:text-white text-black dark:bg-slate-600 bg-sky-200'>
                <nav className='flex justify-center'>
                    <Link className='px-2' to="/">Home</Link>
                    <Link className='px-2' to="/about">About</Link>
                    <Link className='px-2' to="/contact">Contact</Link>
                    <Link className='px-2' to="/projects">Projects</Link>
                    <Link className='px-2' to="/blog">Blog</Link>
                </nav>
                <div className='flex justify-end mr-10 -mt-3'>
                    {theme != 'light' && <TbBrightnessUp size={25} className="cursor-pointer" onClick={handleModeButton} />}
                    {theme == 'light' && <MdDarkMode size={25} className="cursor-pointer" onClick={handleModeButton} />}
                </div>
            </div>
        </>
    )
}

export default Header