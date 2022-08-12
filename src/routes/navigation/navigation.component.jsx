import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navigation= () => {
  return (
    <>
    <div className='flex flex-row justify-between max-w-7xl mx-auto p-2 md:py-8 items-center'>
        
        <Link to='/'>
            <h1 className='text-2xl font-semibold'>
                Jab Market
            </h1>
        </Link>
        <ul className='flex flex-row gap-8 items-center'>
            <li>
                <Link to='/shop'>
                    <h2>Shop</h2>
                </Link>
            </li>
            <li className='ml-8'>
                <Link to='/sign-in'>
                    <button className='py-3 px-6 text-white bg-purple-700 rounded-md'>Sign In</button>
                </Link>
            </li>
        </ul>
    </div>
    <Outlet />
    </>
  )
}

export default Navigation