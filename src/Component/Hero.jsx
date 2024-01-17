import React from 'react'
import FAQAccordion from './Faq'

const Hero = () => {
  return (
    <>
    <main className='px-4 pt-[7rem] flex flex-wrap'>

    <div className='w-full' >

    <h1 className='text-[1.6rem] w-full text-center  mb-[rem] text-slate-800 font-bold  '>

    
    Welcome to <span className='text-orange-900'>
    TAACODEEP TECHNOLOGIES </span> Internship Program! 
 
    </h1>
   
    </div>

    <div className='my-[2rem]'>
      <img src="https://i.pinimg.com/564x/16/75/2c/16752cfbbf3cf83c3a040e1b036692fa.jpg" 
      className='  rounded-[15px]' alt="" />
    </div>
    
    <div className="flex space-x-4 w-full mb-[3rem] ">
            <button className='w-[60%] py-3 border text-slate-800 border-orange-500 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300'>Read More</button>
            <button className='w-[60%] py-3 bg-orange-500 rounded-full text-white font-semibold text-lg hover:bg-green-600 transition duration-300'>Register</button>
          </div>


    <div className="about w-full">
      <section className="abtdesc">

    <h2 className='text-[2rem] font-semibold text-slate-800 w-[50%] border-b-2  border-orange-600'>About us:</h2>
    <h3 className='font-bold text-slate-800 mt-2'>About the program</h3>

    <p className='my-4 text-balance text-[16px] text-slate-800'>
   
   The Taacodeep Technologies internship program is a comprehensive 
   and hands-on learning opportunity that aims to equip interns with
    practical skills and knowledge. This program covers various aspects
     of software development, app creation, and web solutions, exposing
      interns to our tech stack, development methodologies, and collaborative
       work environment. Within our dynamic and supportive atmosphere, interns 
       will have the chance to work on real-world projects, learn from industry
        experts, and make valuable contributions to our innovative initiatives.
         As an intern, you can expect to grow and develop your skills in a stimulating
          and encouraging environment.
   </p>

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
        border-orange-600 mb-4'> Eligibility:</h2>
           {/* <h3 className='font-bold text-slate-800 mt-2'>To be eligible for the internship, you should possess:</h3> */}

           <div class="mb-8 bg-slate-900 rounded-lg p-6 text-gray-100">
    <h2 class="text-3xl font-bold mb-4">Key Requirements 🚀</h2>
    <ul class="list-disc pl-6">
        <li class="mb-2">🎨 Proficiency in the art of coding with HTML, CSS, and JavaScript.</li>
        <li class="mb-2">💡 Strong problem-solving skills to tackle coding exercises and technical challenges.</li>
        <li class="mb-2">📝 Effective communication skills, both written and verbal.</li>
        <li class="mb-2">📘 Ability to craft beautiful code, write engaging technical documentation, and join vibrant team discussions.</li>
        <li class="mb-2">🚀 Eagerness to soar to new heights by learning and adapting to cutting-edge technologies and methodologies.</li>
        <li class="mb-2">❓ Willingness to boldly ask questions, embrace challenges, and seek guidance when navigating the coding cosmos.</li>
        <li class="mb-2">🤝 Ability to harmonize with a stellar team, collaborating with other coding artists, designers, and stakeholders.</li>
        <li class="mb-2">🔗 Understanding of the version control universe (e.g., Git) and the cosmic dance of collaborative development practices.</li>
    </ul>
</div>



<p className=' text-slate-800 text-[16px]  '>
  
 </p>
     

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

    <FAQAccordion />

  
  <footer className="bg-slate-900 text-white py-4 w-full">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold">Stay Connected</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-300 transition duration-300">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            LinkedIn
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            Instagram
          </a>
        </div>
        <p className="mt-4">&copy; 2024 Your Company. All rights reserved.</p>
       
      </div>
    </footer>
    
    </main>
    </>
  )
}

export default Hero