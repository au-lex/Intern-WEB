import { useState, useEffect } from 'react'

import './App.css'
import Header from './Component/Header'
import Hero from './Component/Hero'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles



function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []); 

  return (
    <>
  

     <Header />
     <Hero />
    
    </>
  )
}

export default App
