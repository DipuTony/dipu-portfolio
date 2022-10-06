import axios from 'axios'
import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errorMsg, setErrorMsg] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)

    const handleLoginBtn=()=>{
        console.log("Email and Password", email, password, process.env.REACT_APP_API_URL)

        const body ={
            "email" : "test2@gmail.com",
            "password": "test2"
        }

        axios.post(`${process.env.REACT_APP_API_URL}/user/signin`, body)
        .then((res)=>{
            // console.log("Response is ", res.data.token)
            setSuccessMsg(res.data.message)
            setErrorMsg(null)

            localStorage.setItem("myToken", res.data.token)
        })
        .catch((error)=>{
            setErrorMsg(error.response.data.message)
            setSuccessMsg(null)
            // console.log("Error Occurs", error.response.data.message)
        })
    }

    return (
        <div className="bg-white dark:bg-gray-900 flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="md:w-full m-5 border p-6 md:m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-700 capitalize">Log in</h1>
                <div className="mt-6">
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800" >Password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <a href="#" className="text-xs text-blue-600 hover:underline" >Forget Password? </a>
                    <div className=' relative py-2'>
                        {errorMsg && <p className='text-red-500 font-medium absolute'>{errorMsg }</p> }
                        {successMsg && <p className='text-green-500 font-medium absolute'>{successMsg}</p> }
                    </div>
                    <div className="mt-8">
                        <button onClick={handleLoginBtn} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Login
                        </button>
                    </div>
                </div>

                <p className="mt-8 text-lg font-normal text-center text-gray-900">
                    Don't have an account?
                    <a href="#" className="font-medium text-blue-600 hover:underline" > Register </a>
                </p>
            </div>
        </div>
    );
}

export default Login