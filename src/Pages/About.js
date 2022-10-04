import React from 'react'

function About() {
  return (
    <>
      <div className='min-h-screen bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-900'>
        <div className='pt-16 p-10'>

          <div className='grid grid-cols-12 p-10'>
            <div className='md:col-span-4 col-span-12'>
              <img className='h-72 w-72 rounded-md' src="https://avatars.githubusercontent.com/u/9476513?v=4" alt="Dipu Singh" />
            </div>
            <div className='md:col-span-8 col-span-12 px-5'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque consequuntur necessitatibus eligendi reiciendis praesentium a culpa deleniti soluta quasi?</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About