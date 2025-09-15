import React from 'react'

const Main = () => {
return (
    <div className='mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-12 gap-4'>
        <div className='order-1 md:order-2 col-span-1 md:col-start-7 md:col-span-4 flex justify-center items-center h-64 md:h-screen border-b-2 md:border-b-0 md:border-l-2 border-gray-300'>
            <img src="./assets/developer.svg" alt="developer" className='w-3/4'/>
        </div>
        <div className='order-2 md:order-1 col-span-1 md:col-start-2 md:col-span-3 flex flex-col justify-center h-64 md:h-screen'>
            <p className='text-2xl'>Hi I'm Ankit</p>
            <p className='text-4xl font-extrabold'>I'm a Web Developer</p>
            <p className='mt-2'>Any fool can write code that a computer understands. Good Developers write code that humans understand.</p>
            <a><span className='underline text-xl font-medium '>View My Projects</span></a>
        </div>
    </div>
)
}

export default Main
