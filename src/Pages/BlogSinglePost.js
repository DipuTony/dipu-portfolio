import React from 'react'
import { useParams } from 'react-router-dom'

function BlogSinglePost() {

    let { id } = useParams();

    return (
        <>
            <div className='pt-20 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300'>
                BlogSinglePost is {id}
            </div>

        </>
    )
}

export default BlogSinglePost