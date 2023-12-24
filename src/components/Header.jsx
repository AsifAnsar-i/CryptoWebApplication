import React from 'react'
import {FaSearch} from "react-icons/fa"

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md sticky top-0 z-50'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500 text-2xl'>Bit</span>
            <span className='text-slate-700 text-2xl'>Coins</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder='Explore...' className='bg-transparent focus:outline-none w-24 sm:w-64 '/>
            <FaSearch className='text-slate-600' />
        </form>
      </div>
    </header>
  )
}

export default Header