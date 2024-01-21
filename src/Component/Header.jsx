import React, { useState } from 'react'
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
   const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu); 
  };
  return (
    <>
    <header className=' fixed shadow-sm z-50 bg-white w-full  py-4  flex justify-between lg:px-[5rem] px-4 pb-4'>

<div className='b500 '> 
 <h1>logo</h1>
</div>

 <div>
    

     
    </div>
<nav className=' lg:flex space-x-[2rem] hidden'>
  <a href="" className='block font-medium'>Home</a>
  <a href="" className='block font-medium'>About</a>
  <a href="" className='block font-medium'>Faq</a>
  <a href="" className='block font-medium'>Contact</a>
  
</nav>


<div className='pt-4 lg:hidden'>

<div onClick={handleClick} className='bg-orange-500 p-1 text-slate-100 rounded-[10px] '>
  <CgMenuRight className='text-[2rem] ' /></div>
</div>


  </header>
<div className=' w-full z-50  lg:hidden md:hidden rem]'>


      {openMenu && (
        <div className='bg-slate-900 text-slate-100  mt-[5rem]  pt-4 px-4 w-full z-50 h-[20rem] fixed '>
         <a href="" className='block font-medium my-2'>Home</a>
  <a href="" className='block font-medium  my-2'>About</a>
  <a href="" className='block font-medium  my-2'>Faq</a>
  <a href="" className='block font-medium  my-2'>Contact</a>
        </div>
      )}
</div>
    
     </>
  )
}

export default Header