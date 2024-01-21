import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from "../components/Chat"
import Sidebaricons from '../components/Sidebaricons'
import Profile from "../components/Profile"


const Home = () => {
  return (
    <div className='bg-customBlue h-screen flex   items-center justify-center border-4 border-gray-50  overflow-hidden  md:overflow-hidden '>
        <div className='flex  w-full h-screen  oveflow-hidden rounded-lg '>
            <Sidebaricons />
            <Sidebar />
            <Chat />
            <Profile />
        </div>
    </div>
  )
}

export default Home
