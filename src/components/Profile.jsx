import React, { useEffect, useState } from 'react'
import firo from "../Assets/firo.jpg"
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';

const Profile = () => {
   const [toggle, setToggle] = useState(false)
   const [image, setImage] = useState("")
   const [update,setUpdate] = useState(false)

   const handleToggle = () =>{
       setToggle(!toggle)
   }
   const handleUpdate=()=>{
    setUpdate(!update)

   }

   useEffect(()=> {
    const storedImage = localStorage.getItem('profileImage');
    if(storedImage){
        setImage(storedImage)
    }
   },[])

   const handleImageChange = (event) => {
  
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
       const imageURL =  URL.createObjectURL(file)
        setImage(imageURL);
        setUpdate(false)
        localStorage.setItem('profileImage',imageURL)

    }else{
        setImage(null)
    }
    
  };



  return (
    <div
    className='  w-40 hidden md:flex flex-col bg-cyan-600'>
     <div
     className='flex md:flex-col gap-2 py-10 items-center '>
    
        <img  

         onClick={handleToggle}
         src={  image  || firo  } 
        
        className='bg-white md:w-20 md:h-20 rounded-full cursor-pointer border-4 border-white '/>
        {
        toggle &&(
            <div className='flex flex-col  py-2 rounded-lg gap-2 bg-slate-500 '>
              <button
              onClick={handleUpdate}
              className='font-semi-bold text-white  bg-indigo-500 p-2 rounded-lg'>Change profile pic</button>
              <button className='font-semi-bold text-white  bg-indigo-500 p-2 rounded-lg'>Change user name</button>
            </div>
        )
       }

       {
        update &&(
            <div className='flex flex-col  p-4 py-2 rounded-lg gap-2 bg-slate-500'>
                <InputText 

                type='file'
                accept='/image/*'
                onChange={handleImageChange}
                className='w-28 p-2'
                />
            </div>
        )
       }
       
        <span   onClick={handleToggle}  className='text-white font-extrabold underline text-2xl cursor-pointer   rounded-full'>Firo</span>
        <button className='bg-indigo-600 text-slate-300 font-bold my-6 px-2 py-2 border-none text-sm rounded-lg cursor-pointer' >logout</button>
      </div>
    </div>
  )
}

export default Profile
