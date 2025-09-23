import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
return (
    <div className="mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-12 gap-4 mt-8 md:mt-0">
        <div className="order-1 md:order-2 col-span-1 md:col-start-7 md:col-span-4 flex justify-center items-center h-48 sm:h-64 md:h-screen border-b-2 md:border-b-0 md:border-l-2 border-gray-300">
            <img
                src="./assets/developer.svg"
                alt="developer"
                className="w-2/3 sm:w-3/4 max-w-xs md:max-w-full object-contain"
            />
        </div>
        <div className="order-2 md:order-1 col-span-1 md:col-start-2 md:col-span-3 flex flex-col justify-center h-48 sm:h-64 md:h-screen">
            <p className="text-xl sm:text-2xl">Hi I'm Ankit</p>
            <p className="text-2xl sm:text-4xl font-extrabold">I'm a Web Developer</p>
            <p className="mt-2 text-sm sm:text-base">
                Any fool can write code that a computer understands. Good Developers write code that humans understand.
            </p>
            <Link to="/projects" className="underline text-lg sm:text-xl font-medium">View My Projects</Link>
                
        </div>
    </div>
)
}

export default Main
