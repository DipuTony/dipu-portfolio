/////////////////////////////////////////////
//  
//  Author :- Dipu Kumar Singh
//  Project :- Dipu Porfolio
//  Component :- Projects.js
//  Created Date : - 03 - Oct - 2022
//  Last Modifiled : -     
//
/////////////////////////////////////////////
import React from 'react'
import codingImg from '../Assets/images/coding.jpg'

function Projects() {

  const fakeData = [
    {
      'id': 1,
      'title': 'My First Project',
      'subtitle': 'This is the sub titile.'
    },
    {
      'id': 2,
      'title': 'My Secound Project',
      'subtitle': 'This secound sub titile.'
    },
    {
      'id': 3,
      'title': 'My Third Project',
      'subtitle': 'This Third sub titile.'
    }
  ]

  return (

    <>
      <div className='pt-20 min-h-screen bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300'>

        <p className='text-center '>Project Portfolio</p>

        <div className='flex justify-between md:mx-20 mx-5 border-b py-4 dark:border-gray-700 border-gray-400'>
          <input placeholder='Search...' type="text" className='bg-white md:w-60 w-40 border border-black dark:bg-gray-700 px-4 py-2 rounded-md' />
          <select name="category" className='bg-white md:w-60 w-40 border border-black dark:bg-gray-700 px-4 py-2 rounded-md'>
            <option value="all">All Projects</option>
            <option value="php">PHP Projects</option>
            <option value="payment">Payment Gateway</option>
          </select>
        </div>

        <div className='flex justify-center'>
          <div className='m-5 md:m-14 grid md:grid-cols-3 grid-cols-1 gap-10'>
            {
              fakeData.map((e, i) => (
                <div key={i}></div>,
                <div className='dark:bg-gray-600 shadow-xl  bg-white w-80 h-96 rounded-2xl'>
                  <img src={codingImg} alt="Project Image" className='h-64 rounded-t-2xl' />
                  <div className='p-5 text-center'>
                    <h1 className='text-2xl'>{e.title}</h1>
                    <h3 className='text-xl'>{e.subtitle}</h3>
                  </div>
                </div>
              ))

            }
          </div>

        </div>


      </div>
    </>
  )
}

export default Projects

/*
Exported To -
1. App.js

*/