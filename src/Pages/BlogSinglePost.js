/////////////////////////////////////////////
//  
//  Author :- Dipu Kumar Singh
//  Project :- Dipu Porfolio
//  Component :- BlogSinglePost.js
//  Created Date : - 04 - Oct - 2022
//  Last Modifiled : - 05 - Oct - 2022     
//
/////////////////////////////////////////////

import React from 'react'
import { useParams } from 'react-router-dom'

function BlogSinglePost() {

    let { id } = useParams();

    let newId = parseInt(id)

    console.log("gggggggggggg", typeof newId)

    const fakeData = [
        {
            'id': 1,
            'category': 'video',
            'title': 'How to write Hello World!',
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, animi..',
            'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plutchik-wheel.svg/135px-Plutchik-wheel.svg.png',
        },
        {
            'id': 2,
            'category': 'News',
            'title': 'How to a Good Atricle!',
            'desc': 'Good Article sit amet consectetur adipisicing elit. Facilis, animi..',
            'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plutchik-wheel.svg/135px-Plutchik-wheel.svg.png',
        },
        {
            'id': 3,
            'category': 'News',
            'title': 'How to a Good Atricle!',
            'desc': 'Good Article sit amet consectetur adipisicing elit. Facilis, animi..',
            'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plutchik-wheel.svg/135px-Plutchik-wheel.svg.png',
        }
    ]

    console.log("New ids is ", newId)
    return (
        <>
            <div className='pt-20 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-5'>

                    </div>

                </div>
                {
                    fakeData.filter(data => data.id === newId).map(e => (
                        <div>
                            <p>Category {e.category}</p>
                            <p>Titile {e.title}</p>
                            <p>Desc {e.desc}</p>
                            <img src={e.img} alt="" />
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default BlogSinglePost

/*
Exported To -
1. App.js

*/