import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className='bg-slate-200  w-50 md:w-1/4 '>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar
