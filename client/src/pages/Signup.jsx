import React from 'react'
import {Link}from 'react-router-dom'
export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7 '>Sign Up</h1>

      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id="username" className='bg-slate-100 p-3 rounded-lg'/>

        <input type="text" placeholder='Email' id="email" className='bg-slate-100 p-3 rounded-lg'/>

        <input type="text" placeholder='Password' id="password" className='bg-slate-100 p-3 rounded-lg'/>

        <button className='bg-slate-500 p-3 rounded-lg text-white uppercase hover:opacity-65'>Sign up </button>
      </form>
      <div className='mt-3'>
        <p>Have an Account 
            <Link to="\signin">
            <span className='text-blue-500'> Sign in</span> </Link> </p>
      </div>
    </div>
  )
}
