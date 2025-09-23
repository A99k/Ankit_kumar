import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="p-6 md:p-12">
      <div className='mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-12 gap-4'>
        <div className='order-1 md:order-2 col-span-1 md:col-start-7 md:col-span-4 flex justify-center items-center h-64 md:h-screen border-b-2 md:border-b-0 md:border-l-2 border-gray-300'>
          <img src="./assets/developer.svg" alt="developer" className='w-3/4'/>
        </div>
        
        <div className='order-2 md:order-1 col-span-1 md:col-start-2 md:col-span-5 flex flex-col justify-around h-64 md:h-screen md:mb-0'>
          <div className=''>
            <p className='text-4xl font-extrabold'>About Me</p>
            <p className='mt-2'>Hi, I’m Ankit, a passionate web developer who loves crafting modern, responsive, and user-friendly websites. I specialize in front-end development using HTML, CSS, JavaScript, and React, and I’m also experienced in Node.js and MongoDB for back-end solutions. My goal is to create digital experiences that are both functional and visually appealing. When I’m not coding, I explore new technologies, improve my design skills, and work on open-source projects. Check out my work and let’s build something amazing together!</p>
          </div>
          <Link to="/projects" className="underline text-lg sm:text-xl font-medium">View My Projects</Link>
                         
                 
        </div>
      </div>
    </div>
  )
}

export default About
