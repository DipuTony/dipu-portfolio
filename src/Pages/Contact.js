import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (

    <>
      <section className=" bg-white dark:bg-gray-900">
        <div className="px-10 py-10 ">
          <div className="lg:flex lg:items-center lg:-mx-10">
            <div className="lg:w-1/2 lg:mx-10">
              <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-5xl">Let’s talk</h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Ask us everything and we would loveto hear from you
              </p>

              <form className="mt-8">
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                    <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                  <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-32 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
            </div>

            <div className="mt-5 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <img className="object-cover mx-auto rounded-full lg:block shrink-0 w-44 h-44" src="https://avatars.githubusercontent.com/u/9476513?v=4" alt="Dipu Singh" />

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <MdLocationPin fill='blue' size={25} />

                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    Lalpur, Ranchi, Jharkhand - 01
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <IoIosCall fill='blue' size={25} />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+91 840 - 480 - 1234</span>
                </p>

                <p className="flex items-start -mx-2">
                  <MdEmail fill='blue' size={25} />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">dsingh197@gmail.com</span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact