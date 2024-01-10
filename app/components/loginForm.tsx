import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import { FaGoogle } from "react-icons/fa";

function LoginForm(props: any) {






  return (
    <div className="w-full h-full grid grid-col-1 sm:grid-col-1 md:grid-col-1 lg:grid-cols-1 xl:grid-cols-2">
      <div className=" p-10 flex flex-col bg-gray-800 justify-center items-center ">
        <div className="p-2 md:p-20 lg:p-20 xl:p-20 flex flex-col justify-center w-full h-full">
          <div className="p-2 grid g-2 grid-row-5 ">
            <h1 className="text-4xl font-bold text-white">Login</h1>
            <p className="mt-2 text-white text-xs">See your growth and get consulting support!</p>
          </div>
          <div className="p-2">
            <div className="mt-4 grid grid-col-1">
              <p className="text-xs">Email*</p>
              <input className="mt-2 rounded-3xl text-sm border p-2 bg-gray-800" title='email' name='email'
                value={props.Email} onChange={(e) => props.setEmail(e.target.value)} type='email'
                required placeholder='Type your email' />
            </div>
            <div className="mt-4 grid grid-col-1">
              <p className="text-xs">Password*</p>
              <input className="mt-2 rounded-3xl p-2 text-sm border bg-gray-800" title='password' name='password'
                value={props.Password} onChange={(e) => props.setPassword(e.target.value)} maxLength={6} type='password'
                required placeholder='Enter Password' />
            </div>
            <div className="mt-10 hover:bg-indigo-800 transition duration-150 ease-out
             hover:ease-in transition-color bg-indigo-500 w-full rounded-3xl"><button onClick={() => props.loginUser()}
                className="w-full p-2 "><p className="text-xs">Login</p></button></div>
          </div>
          <div className="w-full grid grid-col-1 bottom-0 left-0 p-2 mt-2">
            <p className="mb-4 text-xs">Not a member? <span className="bg-purple-600 transition 
            duration-150 ease-out hover:ease-in hover:bg-purple-800 text-xs rounded-3xl p-2"> <button><Link
                href='/createAccount'>Create account</Link></button></span></p>
            <p className="text-xs">@ 2023 Mark.Magorimbo all rights reserved </p>
          </div>
        </div>
      </div>
      <div className=" relative flex hidden xl:grid">
        <Image alt='cover' src='/5.png' fill={true} style={{ objectFit: "cover" }} />
      </div>
    </div>

  )
}

export { LoginForm }