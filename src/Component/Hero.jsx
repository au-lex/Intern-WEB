// Hero.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQAccordion from './Faq';
import Banner from './Banner';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <main id='home' data-aos="fade-up" className='px-4 pt-[7rem] flex flex-wrap' >

        <section className="hero lg:flex justify-center">

          <div className='lg:w-[50%]'>

            <h1 className='text-[1.6rem] lg:text-[2.6rem] w-full textcenter lg:text-left mb-[rem] text-slate-800 font-bold'
             data-aos="fade-up" data-aos-duration="1000">
              Welcome to <span className='text-orange-900'>TAACODEEP TECHNOLOGIES</span> Internship Program!
            </h1>

            <p className="text-lg text-gray-600 my-4 lg:w-[90%]" data-aos="fade-up" data-aos-duration="1400">
            
Are you passionate about building a career in tech? Our internship program offers hands-on experience in software development, app creation, and web solutions. Join our experienced teams to explore modern development methodologies, and collaborate with industry experts.
            </p>

            <div className="lg:flex space-x-4 w-full mb-[3rem] hidden lg:mt-[2rem]" data-aos="fade-up" data-aos-duration="1800">
              <button  className='w-[40%] py-3 border text-slate-800 border-orange-500 rounded-full
               font-semibold text-lg hover:bg-orange-500 hover:text-white transition duration-300'>
                 <a   href="#read"> Read More</a>
               </button>
              <button className='w-[40%] py-3 border bg-orange-500 rounded-full text-white font-semibold text-lg
               hover:bg-white hover:text-orange-500   hover:border-orange-500 transition duration-300'>
                
                <a  target='blank' href="https://docs.google.com/forms/d/e/1FAIpQLSeaqI-rEOpaQDZcYi4RvGRA7e1JJwMAWDuUfJmc5cbSC6oJxg/viewform">Register</a>
                </button>
            </div>

          </div>

          <div className='my-[2rem] lg:w-[45%]' data-aos="fade-up" data-aos-duration="2600">
            <img
              src="https://i.pinimg.com/564x/16/75/2c/16752cfbbf3cf83c3a040e1b036692fa.jpg"
              className='rounded-[15px] w-full object-cover lg:h-[450px]'
              alt=""
            />
          </div>

          <div className="flex space-x-4 w-full mb-[3rem] lg:hidden" data-aos="fade-up" data-aos-duration="1400">
            <button className='w-[60%] py-3 border text-slate-800 border-orange-500 rounded-full font-semibold text-lg hover:bg-blue-700 
            
            transition duration-300'> <a   href="#read"> Read More</a></button>
            <button className='w-[60%] py-3 bg-orange-500 rounded-full text-white font-semibold text-lg
             hover:bg-green-600 transition duration-300'> <a  target='blank' href="https://docs.google.com/forms/d/e/1FAIpQLSeaqI-rEOpaQDZcYi4RvGRA7e1JJwMAWDuUfJmc5cbSC6oJxg/viewform">Register</a></button>
          </div>

        </section>

        <Banner  data-aos="fade-up" data-aos-duration="1400" />

        <div id='about'  className="about w-full lg:mt-[4rem]  lg:flex lg:justify-around"
         data-aos="fade-up" data-aos-duration="1800">

          <section  className="abtdesc b border-2 px-1 rounded-[10px] lg:w-[40%]">
            <h2 className='text-2xl font-semibold text-slate-800 lg:w-[60%] border-b-2
             border-orange-600 mb-4 pb-4' data-aos="fade-up"
              data-aos-duration="1000">About the Program:</h2>
            {/* <h3 className='font-bold text-slate-800 mt-2' data-aos="fade-up" data-aos-duration="1200">About the program</h3> */}
            <p className='my-4 text-lg text-slate-800' data-aos="fade-up" data-aos-duration="1400">
             This internship will empower you with practical skills, industry exposure, and a supportive community, laying the foundation for a successful career. Explore advanced tech stacks, collaborate within our dynamic environment, and engage in skill development programs. Foster connections through networking opportunities, embraced by our inclusive and supportive culture. Receive career development guidance for a comprehensive learning journey. Don't miss the chance to be part of a transformative experience at Taacodeep Technologies.

            </p>
          </section>

          <section className='lg:w-[50%] lg:-order-1' data-aos="fade-up" data-aos-duration="1600">
            <div className='my-[1rem] w-full '>
              <img
                src="https://media.istockphoto.com/id/809917556/photo/this-team-is-number-one.jpg?s=612x612&w=0&k=20&c=ux3t2w5SF8D77dR2wwNRtN_U1Giriwo2jPPJN_Ot16Y="
                className='rounded-[15px] w-full object-cover h-[230px] lg:h-[400px]'
                alt=""
              />
            </div>
          </section>

        </div>

        <div id='read' className="citeria lg:my-[9rem] my-4 w-full flex lg:px-[2rem]" data-aos="fade-up" data-aos-duration="1800">

          <div class="mb-8 bg-slate-900 rounded-lg w-full p-6 text-gray-100">
            <h2 class="text-3xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Key Requirements 🚀</h2>
            <ul class="list-disc pl-6">
              <li class="mb-2" data-aos="fade-up" data-aos-duration="1200">🎨 Proficiency in the art of coding with HTML, CSS, and JavaScript.</li>
              <li class="mb-2" data-aos="fade-up" data-aos-duration="1400">💡 Strong problem-solving skills to tackle coding exercises and technical challenges.</li>
              <li class="mb-2" data-aos="fade-up" data-aos-duration="1600">📝 Effective communication skills, both written and verbal.</li>
              <li class="mb-2" data-aos="fade-up" data-aos-duration="1800">📘 Ability to craft beautiful code, write engaging technical documentation, and join vibrant team discussions.</li>
              <li class="mb-2" data-aos="fade-up" data-aos-duration="2000">🚀 Eagerness to soar to new heights by learning and adapting to cutting-edge technologies and methodologies.</li>
              <li class="mb-2" data-aos="fade-up" data-aos-duration="2200">❓ Willingness to boldly ask questions, embrace challenges, and seek guidance when navigating the coding cosmos.</li>
              <li class="mb-2" data-aos="fade-up" data-aos-duration="2400">🤝 Ability to harmonize with a stellar team, collaborating with other coding artists, designers, and stakeholders.</li>
              <li class="mb-2" data-aos="fade-up" data-aos-duration="2600">🔗 Understanding of the version control universe (e.g., Git) and the cosmic dance of collaborative development practices.</li>
            </ul>

            <div className="mt-[1rem]" data-aos="fade-up" data-aos-duration="2800">
              <button className=' lg:w-[20%] w-[100%] py-2 bg-orange-500 rounded-full text-white font-semibold text-lg hover:bg-green-600 
              transition duration-300'>  <a  target='blank'  href="https://docs.google.com/forms/d/e/1FAIpQLSeaqI-rEOpaQDZcYi4RvGRA7e1JJwMAWDuUfJmc5cbSC6oJxg/viewform">Apply Now</a></button>
            </div>
          </div>

        </div>

        <FAQAccordion data-aos="fade-up" data-aos-duration="3000" />

      </main>

      <footer className="bg-slate-900 text-white py-4 w-full" data-aos="fade-up" data-aos-duration="3200">
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
    </>
  );
};

export default Hero;
