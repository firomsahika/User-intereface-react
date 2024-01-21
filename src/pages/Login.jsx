import React from 'react'
import bg from "../Assets/profile.jpg"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [isemailFocused, setIsEmailFocused] = useState(false);
  const [ispasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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


  const handleEmailChange  = (event) =>{
    setEmail(event.target.value);
  }
  const handlePasswordChange  = (event) =>{
    setPassword(event.target.value);
  }


  return (
    <div className='h-screen w-full my-20 md:my-0 flex flex-col md:flex-row items-center justify-center bg-slate-50 gap-10 '>
        <div className='flex flex-col items-center justify-center w-full md:w-1/3 text-black px-10 py-4 h-screen'>
        <span 
        className='text-4xl text-cyan-600 font-bold'
        >Sign in to Let's chat</span>
        <img src={bg}  className='h-20 w-20 my-4 border-cyan-600 border-4 rounded-full'/>
        <form className='flex flex-col gap-4 md:ml-10 '>
            
            <label className='relative '>
            <input
            className='bg-gray-200 px-6 py-4 w-80 text-xl rounded-lg  outline-none  border-2 border-white focus:border-cyan-600 focus:text-black focus:bg-white'
            type='email' 
          
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
            value={email}
            
            />
            <span className={`text-xl text-gray-400 text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 email-text
            
            ${isemailFocused || email ? 'text-md text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : 'text-base bg-gray-200 text-gray-500'}
            ${ isemailFocused ? 'text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : ''} 
            
            `}
            
            >Email</span>
            </label>
            

          <label className='relative'>
            <input
            className='px-6 py-4 rounded-lg text-xl w-80 bg-gray-200  outline-none  border-2 border-white focus:border-cyan-600 focus:text-black focus:bg-white'
            type='password'
            
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange}
            value={password}
            
            />
            <span className={`text-xl text-gray-400 text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 password-text 
            
            ${ispasswordFocused || password ? 'text-md text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : 'text-base bg-gray-200 text-gray-500'}
            ${ ispasswordFocused ? 'text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : ''}
            
            `}>Password</span>
          </label>

           

           <Link to="/Forgotpassword">
           <button className='text-xl flex items-center place-items-center ml-8 border-gray-300  text-cyan-500'>
            forgot your password?
            </button>
           </Link>
           
            <button
            className='bg-cyan-600 px-4  py-4 my-2 text-white mx-14 w-40 rounded-full font-bold hover:scale-105 duration-200 '
            >SIGN IN</button>
        </form>
        
      </div>


      <div className='flex flex-col items-center justify-center py-4 h-screen w-full md:w-1/3 text-white bg-cyan-600'>
        <p className=' text-xl md:text-5xl font-bold '>Hello friend!</p>
        <p className='py-6 text-gray-200'>Don't have an account?</p>
        <Link to="/register">
        <button className='px-6 py-4 md:px-20 md:py-4  rounded-full hover:scale-110 duration-200 bg-sky-500 text-white font-bold'>SIGN UP</button>
        </Link>
      </div>


    </div>
  )
}

export default Login
