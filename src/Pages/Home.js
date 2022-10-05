/////////////////////////////////////////////
//  
//  Author :- Dipu Kumar Singh
//  Project :- Dipu Porfolio
//  Component :- Blog.js
//  Note : -
//  Created Date : - 04 - Oct - 2022
//  Last Modifiled : -     
//
/////////////////////////////////////////////
import React from 'react'
import { FcDownload } from 'react-icons/fc';

function Home() {
  return (
    <>
      <div className=' min-h-screen overflow-x-auto bg-white dark:text-white dark:bg-gray-900'>
        <div className='pt-20'>
          <div className='grid grid-cols-12'>
            <div className='md:col-span-5 col-span-12 ml-20 mt-10'>
              <p className='text-2xl font-semibold'>Hi,  I am<br /> <span className='text-5xl'> Dipu Kumar Singh</span> </p>
              <p className='py-3 font-serif text-2xl'>Frontend Developer</p>
              <div className='py-9'>
                <button className='flex px-5 py-3 font-semibold dark:bg-gray-200 bg-gray-800 text-white dark:text-gray-800 rounded-sm shadow-xl'><FcDownload className='mt-1 mx-2' /> Download CV</button>
              </div>
            </div>
            <div className='md:col-span-7 col-span-12 p-40 -mt-36'>
              <p><img className='' src="https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg" alt="" /></p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home

/*
Exported To -
1. App.js

*/