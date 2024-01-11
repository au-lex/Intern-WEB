import React from 'react'

const Hero = () => {
  return (
    <>
    <main className='px-4 pt-[5rem] flex flex-wrap'>

    <div >

    <h1 className='text-[1.8rem]  text-slate-800 font-bold text-balance  leading-[33px]'>

    
    Welcome to <span className='text-orange-900'>
    TAACODEEP TECHNOLOGIES
      </span>  triad Internship Program! 
 
    </h1>
    <p className='my-4 text-balance text-[16px] text-slate-800'>
   
Are you ready to kickstart your career with a transformative internship experience?
 At <span className='font-bold'>
 TAACODEEP TECHNOLOGIES,
  </span> we offer a dynamic and enriching program designed to empower aspiring professionals. Dive into real-world projects using cutting-edge technologies and develop your skills in HTML, CSS, and JavaScript. 
Explore the possibilities, gain hands-on experience, and unlock doors to a bright future. Your journey begins here!
    </p>
    <div className="flex space-x-4">
            <button className='w-[60%] py-3 border text-slate-800 border-orange-500 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300'>Read More</button>
            <button className='w-[60%] py-3 bg-orange-500 rounded-full text-white font-semibold text-lg hover:bg-green-600 transition duration-300'>Register</button>
          </div>
    </div>

    <div className='my-[3rem]'>
      <img src="https://i.pinimg.com/564x/16/75/2c/16752cfbbf3cf83c3a040e1b036692fa.jpg" 
      className='  rounded-[15px]' alt="" />
    </div>


    <div className="about w-full">
      <section className="abtdesc">

    <h2 className='text-[2rem] font-semibold text-slate-800 w-[50%] border-b-2  border-orange-600'>About us:</h2>
    <h3 className='font-bold text-slate-800 mt-2'>Discover Our Culture, Values, and Mission</h3>

<p className=' text-slate-800 text-[16px]  '>At  <span className='font-bold'>
 TAACODEEP TECHNOLOGIES,
  </span>, we believe in fostering a workplace that thrives on innovation,
   collaboration, and inclusivity. 
   Our values drive our decisions, and our mission is to 
   empower individuals to reach their full potential. 
   Immerse yourself in an environment that encourages 
   learning and growth, particularly in HTML, CSS, and JavaScript. 
   Learn more about the vibrant culture that sets us apart and fuels our
   commitment to excellence.</p>

      </section>
<section>
<div className='my-[1rem] '>
<img src="https://media.istockphoto.com/id/809917556/photo/this-team-is-number-one.jpg?s=612x612&w=0&k=20&c=ux3t2w5SF8D77dR2wwNRtN_U1Giriwo2jPPJN_Ot16Y="
 className='  rounded-[15px] w-full object-cover h-[230px]'
alt="" /> 
      
    </div>

  
</section>

    </div>

    <div className="citeria mt-[1rem]">
      <section>
      <h2 className='text-[2rem] font-semibold text-slate-800 w-[50%] border-b-2
        border-orange-600'> Eligibility:</h2>
           <h3 className='font-bold text-slate-800 mt-2'>Are You Ready to Take the Leap? Check Your Eligibility!</h3>

<p className=' text-slate-800 text-[16px]  '>At  <span className='font-bold'>
 TAACODEEP TECHNOLOGIES,
  </span>Our internship program is designed for ambitious individuals ready to make an impact using HTML, CSS, and JavaScript. Explore the eligibility criteria to ensure you meet the requirements for an enriching experience. Don't miss out on this opportunity to grow, learn, and shape your career trajectory in web development.</p>
     

     <div className='mt-[1rem]'>
      <img src="https://media.istockphoto.com/id/1170935904/photo/close-up-programmer-student-man-hand-typing-on-keyboard-at-computer-desktop-to-input-code.jpg?s=612x612&w=0&k=20&c=JhuZPOTVYOYpx84UETXZNUtvJs9x74mcjYpmOTTtKE8="
      className='  rounded-[15px] w-full object-cover h-[230px]'
      alt="" />
     </div>

  <div className="mt-[1rem]">
          
            <button className='w-[60%] py-3 bg-orange-500 rounded-full text-white font-semibold text-lg
             hover:bg-green-600 transition duration-300'>Apply Now</button>
          </div>

      </section>
    </div>

  <div className="contact mt-[2rem]">
    <div>
    <h2 className='text-[2rem] font-semibold text-slate-800 w-[50%] border-b-2
        border-orange-600'> Contact:</h2>
           <h3 className='font-bold text-slate-800 mt-2'>    
Connect with Us - We're Here to Help</h3>

<p className=' text-slate-800 text-[16px]  '>Have questions or need more information 
about our HTML, CSS, and JavaScript-focused internship?
 Our team is here to assist you. Find our contact details here and reach out for any inquiries
 regarding the internship program. We look forward to connecting with you!</p>
     








    </div>
  </div>
    
    </main>
    </>
  )
}

export default Hero