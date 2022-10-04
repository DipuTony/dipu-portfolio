import React from 'react';
import { ImFacebook2 } from 'react-icons/im';
import { FaWhatsappSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <>
            <div className='bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-400 pb-5'>
                <p className=''></p>
                <h1 className='text-center'>Find me on social platforms</h1>
                <div className='flex justify-center'>
                    <a href='https://www.facebook.com/diputony1' target="_blank"> <ImFacebook2 className='m-2 cursor-pointer hover:bg-blue-300 transition duration-500 hover:scale-105' size={30} /></a>
                    <a href='https://www.linkedin.com/' target="_blank"><BsLinkedin className='m-2 cursor-pointer hover:bg-blue-300 transition duration-500 hover:scale-105' size={30} /></a>
                    <a href='https://www.linkedin.com/in/diputony/' target="_blank"><FaWhatsappSquare className='m-2 cursor-pointer hover:bg-blue-300 transition duration-500 hover:scale-105' size={33} /></a>
                    <a href='https://www.github.com/diputony' target="_blank"><FaGithubSquare className='m-2 cursor-pointer hover:bg-blue-300 transition duration-500 hover:scale-105' size={33} /></a>
                </div>
                <div className='flex justify-center'>
                    <p>Made With ❤️ by <span className='font-semibold'>Dipu </span> </p>
                </div>

            </div>
        </>
    )
}

export default Footer;