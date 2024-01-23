// Banner.js
import React from 'react';

const Banner = () => {
  return (
    <section 
      data-aos="fade-up"
      data-aos-duration="1400"
      className="banner lg:px-[1rem] mb-[2rem] lg:my-[4rem] w-full relative"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-code-pattern opacity-30 rounded-[20px]"></div>
      <div className="relative bg-gradient-to-r from-teal-500 to-indigo-500 w-full rounded-[20px] p-8 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          🚀 Elevate Your Skills with
          <br />
          12 REAL-WORLD PROJECTS
        </h1>
        <p className="text-xl mb-8">Boost Your Portfolio 📈</p>
        <p className="text-lg mb-8">
          Hurry now, register, and start your career journey!
        </p>
        <a
          target='blank'  href="https://docs.google.com/forms/d/e/1FAIpQLSeaqI-rEOpaQDZcYi4RvGRA7e1JJwMAWDuUfJmc5cbSC6oJxg/viewform"
          className="bg-yellow-500 hover:bg-yellow-600 text-indigo-900 font-bold py-2 px-4 rounded-full inline-block transition duration-300"
        >
          
          Register Now!
        </a>
      </div>
    </section>
  );
};

export default Banner;
