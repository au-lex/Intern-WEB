import React, { useState } from 'react'
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
   const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu); 
  };

  const handleNavLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <>
    <header className=' fixed  shadow-sm z-50 bg-orange-800 w-full h-[5rem]    flex justify-between lg:px-[5rem] px-4 pb-4'>


 
  <div className=' w-[160px] h-[80px]'>

    <img className='w-full' src="https://res.cloudinary.com/durbee4ln/image/upload/c_crop,w_750,h_280/v1705467968/FOOD_APP/20240117_060344_ve0ewz.png" alt="logo" />
 {/* <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1705467986/FOOD_APP/20240117_060344_ulxa12.png"
  className='w-full'
  alt="logo" /> */}
  </div>
 
  {/* <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1705467968/FOOD_APP/20240117_060344_ve0ewz.png"
  className='w-full'
  alt="logo" /> */}



 <div>
    

     
    </div>
<nav className='text-white lg:flex space-x-[2rem] hidden pt-6'>
  <a href="#home" className='block font-medium'>Home</a>
  <a href="#about" className='block font-medium'>About</a>
  <a href="#faq" className='block font-medium'>Faq</a>
 
  
</nav>


<div className='pt-4 lg:hidden'>

<div onClick={handleClick} className='bg-white p-1 text-orange-500 rounded-[10px] '>
  <CgMenuRight className='text-[2rem] ' /></div>
</div>


  </header>
  
<div className=' w-full z-50 px-[4rem] flex justify-center  lg:hidden md:hidden rem]'>


      {openMenu && (
        <div          data-aos="fade-up"
        data-aos-duration="400"  className={`bg-slate-100  ${openMenu ? 'open' : ''}   menubar text-slate-900  mt-[5rem]  pt-2 px-4 w-full z-50
         h-[10rem] fixed `}>
         <a href="#home" onClick={handleNavLinkClick}  className='block font-medium my-8'>Home</a>
  <a href="#about" onClick={handleNavLinkClick}  className='block font-medium  my-8'>About</a>
  <a href="#faq" onClick={handleNavLinkClick} className='block font-medium  my-2'>Faq</a>
  {/* <a href="" className='block font-medium  my-2'>Contact</a> */}
        </div>
      )}
</div>
    
     </>
  )
}

export default Header