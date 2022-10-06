/////////////////////////////////////////////
//  
//  Author :- Dipu Kumar Singh
//  Project :- Dipu Porfolio
//  Component :- Blog.js
//  Created Date : - 04 - Oct - 2022
//  Last Modifiled : - 05 - Oct - 2022     
//
/////////////////////////////////////////////
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import imgNotFound from '../Assets/images/imgNotFound.jpg'

function Blog() {
    let nospaces;  // This variable used for store filterdata Remove Sapace and Add (-)

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/blog`)
            .then((res) => {
                // console.log("Blog Data", res.data)
                setData(res.data);
            })
            .catch((error) => {
                console.log("Error in Getting post ", error)
            })

    }, [])

    const fakeData = [
        {
            'id': 1,
            'category': 'video',
            'title': 'How to write Hello World!',
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, animi..',
            'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plutchik-wheel.svg/135px-Plutchik-wheel.svg.png',
        }
    ]

    return (

        <>

            <div className="w-full bg-white dark:bg-gray-900 p-3">
                <div className="header flex items-end justify-between mb-5">
                    <div className="title mt-10">
                        <p className="md:text-3xl text-2xl font-bold text-gray-800 dark:text-gray-300">
                            Latest Blog Posts
                        </p>
                    </div>
                    {/* <div className="text-end">
                        <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            <div className=" relative ">
                                <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title" />
                            </div>
                            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                Search
                            </button>
                        </form>
                    </div> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-2 gap-8">


                    {
                        data?.map((e, i) => (
                            <div key={i}></div>,
                            <div className="overflow-hidden border dark:border-gray-700 shadow-lg rounded-lg h-90 w-80 md:w-80 cursor-pointer m-auto">
                                <p className='hidden'>{nospaces = e.title.replace(/ /g, '-')}  </p>{/* Here it will remove spasce and add ( - ) */}
                                <Link to={`/blog/${e._id}/${nospaces}`} className="w-full block h-full">
                                    <img alt="blog photo" src={e.img || imgNotFound} className="max-h-40 w-full object-cover" />
                                    <div className="bg-white dark:bg-gray-800 w-full p-4">
                                        <p className="text-indigo-500 text-md font-medium">{e.category || 'Article'}</p>
                                        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">{e.title}</p>
                                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">{e.description}</p>
                                        <div className="flex items-center mt-4">
                                            <a href="#" className="block relative">
                                                <img alt="profil" src="https://avatars.githubusercontent.com/u/9476513?v=4" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                            </a>
                                            <div className="flex flex-col justify-between ml-4 text-sm">
                                                <p className="text-gray-800 dark:text-white">Dipu Singh</p>
                                                <p className="text-gray-400 dark:text-gray-300">04 Oct 2022 - 6 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }

                    {
                        fakeData.map((e, i) => (
                            <div key={i}></div>,
                            <div className="overflow-hidden border dark:border-gray-700 shadow-lg rounded-lg h-90 w-80 md:w-80 cursor-pointer m-auto">
                                <p className='hidden'>{nospaces = e.title.replace(/ /g, '-')}  </p>{/* Here it will remove spasce and add ( - ) */}
                                <Link to={`/blog/${e.id}/${nospaces}`} className="w-full block h-full">
                                    <img alt="blog photo" src={e.img} className="max-h-40 w-full object-cover" />
                                    <div className="bg-white dark:bg-gray-800 w-full p-4">
                                        <p className="text-indigo-500 text-md font-medium">{e.category}</p>
                                        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">{e.title}</p>
                                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">{e.desc}</p>
                                        <div className="flex items-center mt-4">
                                            <a href="#" className="block relative">
                                                <img alt="profil" src="https://avatars.githubusercontent.com/u/9476513?v=4" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                            </a>
                                            <div className="flex flex-col justify-between ml-4 text-sm">
                                                <p className="text-gray-800 dark:text-white">Dipu Singh</p>
                                                <p className="text-gray-400 dark:text-gray-300">04 Oct 2022 - 6 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </div>


        </>
    )
}

export default Blog

/*
Exported To -
1. App.js

*/