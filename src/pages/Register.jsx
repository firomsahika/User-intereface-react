import React from 'react'
import bg from "../Assets/profile.jpg"
import chooseImg from "../Assets/add.png"
import { useState } from "react"
import { Link } from 'react-router-dom'


const Register = () => {
  const [isnameFocused, setIsNameFocused] = useState(false);
  const [isemailFocused, setIsEmailFocused] = useState(false);
  const [ispasswordFocused, setIsPasswordFocused]= useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleNameFocus = () => {
    setIsNameFocused(true);
  };

  const handleNameBlur = () => {
    setIsNameFocused(false);
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };
  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };



  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange  = (event) =>{
    setEmail(event.target.value);
  }
  const handlePasswordChange  = (event) =>{
    setPassword(event.target.value);
  }


  return (
    <div className='w-full h-screen my-20 md:my-0 flex flex-col md:flex-row items-center justify-center'>

      <div  className='flex flex-col  items-center justify-center h-screen md:w-1/3 text-white bg-cyan-600 border-2 border-opacity-50 w-full py-8 md:py-0'>
        <p className='text-4xl pt-10 font-bold '>Welcome back!</p>
        <p className='py-6 text-gray-200'>Do you have an account? Sign in</p>
        <Link to="/login">
        <button className='px-20  py-4  rounded-full bg-sky-500 text-white font-bold hover:scale-105 duration-200'>SIGN IN </button>
        </Link>
      </div>

      <div className='flex flex-col items-center justify-center md:w-1/3 text-black px-10  py-4 rounded-lg'>
        <span 
        className='text-4xl text-cyan-600 font-bold'
        >Create Account</span>
        <img src={bg}  className='h-20 w-20 my-4 border-cyan-600 border-4 rounded-full'/>
        <form className='flex flex-col gap-4 ml-20 w-full'>
            <label className='relative'>
            <input 
            className=' px-6 py-4  text-gray-400 bg-gray-200 md:w-full rounded-lg  outline-none border-2 border-white  focus:border-cyan-600 focus:text-black focus:bg-white transition duration-200'
            type='text'
            

            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            onChange={handleNameChange}
            value={name}
            
            />
            <span className={` text-cyan-400 text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 name-text
             ${isnameFocused || name ? 'text-md text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : 'text-base bg-gray-200 text-gray-500'}
             ${ isnameFocused ? 'text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : ''}
             `}
             >Name
             </span>
            </label>
            
            <label className='relative'>
            <input
            className='bg-gray-200 px-6 py-4 text-xl rounded-lg  outline-none md:w-full border-2 border-white focus:border-cyan-600 focus:text-black focus:bg-white'
            type='email'
            
            
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
            value={email}
            
            />
            <span className={` text-cyan-400 text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 email-text

            ${isemailFocused || email ? 'text-md text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : 'text-base bg-gray-200 text-gray-500'}
            ${ isemailFocused ? 'text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : ''}
            
            `}>Email</span>
            </label>
            

          <label className='relative'>
            <input
            className='px-6 py-4 rounded-lg text-xl bg-gray-200 capitalize outline-none  border-2 border-white md:w-full focus:border-cyan-600 focus:text-black focus:bg-white'
            type='password'
            
            
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange}
            value={password}
            
            />
            <span className={` text-cyan-400 text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 password-text
            
            
            ${ispasswordFocused || email ? 'text-md text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : 'text-base bg-gray-200 text-gray-500'}
            ${ ispasswordFocused ? 'text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : ''}

            `}
            
            >Password</span>
          </label>

            <input
            className='hidden md:hidden lg:hidden'
             type='file' placeholder='An avatar'/>
            <label htmlFor="file" className='flex items-center '>
                <img src={chooseImg} className='w-14 h-14 rounded-full'/>
                <span className='px-2 text-gray-400 '>An avatar</span>
            </label>
            <button
            className='bg-cyan-600 w-40 md:w-60 ml-10 md:ml-6 px-6 py-4 my-2 hover:scale-105 duration-200 text-white rounded-full font-bold '
            >SIGN UP</button>
        </form>
        <p>
            Do you have an account?
            <Link to="/login">
            <span className='text-cyan-600 font-semibold'>Login</span>
            </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
