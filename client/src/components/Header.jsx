import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-200'>
        <div className=' flex justify-between items-center max-w-6xl m-auto p-3'>

            <Link to="/">
            <h1 className='font-bold'> Auth App</h1>
            </Link>
            
            <ul className='flex gap-5'>

                
            <Link to="/about">
            <li>About</li>
            </Link>

            
            <Link to="/signin">
            <li>Sign in</li>
            </Link>

            
            <Link to="/signup">
            <li>Sign up</li>
            </Link>
                
                
                
            </ul>
        </div>

    </div>
  )
}
