import React from 'react'
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  return (
    <>
    <header className=' fixed shadow-sm z-50 bg-white w-full flex justify-between px-4 pb-4'>

<div className='b500 '> 
 <h1>logo</h1>
</div>
<div className='pt-4'>

<div className='bg-orange-500 p-1 text-slate-100 rounded-[10px] '>
  <CgMenuRight className='text-[2rem]' /></div>
</div>


  </header>

    
     </>
  )
}

export default Header