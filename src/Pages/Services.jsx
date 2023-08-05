import React from 'react'

const Services = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-center mt-8 p-4">
        <div className='conatiner flex items-start bg-white border border-black w-full m-4 h-40'>
            <div className='container bg-[#fff9e6] w-1/3 h-full flex items-center justify-center'>
                <h1 className='text-2xl font-bold text-center'> Catering </h1>
            </div>
            <div className='container w-2/3 h-2/3 ml-4'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div>
            <button className="absolute right-8 top-48 px-4 py-2 bg-[#ffd700] text-white rounded">Button</button>
        </div>
        <div className='conatiner flex items-start bg-white border border-black w-full m-4 h-40'>
            <div className='container bg-[#fff9e6] w-1/3 h-full flex items-center justify-center'>
                <h1 className='text-2xl font-bold text-center'> Event Management </h1>
            </div>
            <div className='container w-2/3 h-2/3 ml-4'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div>
            <button className="absolute right-8 top-96 px-4 py-2 bg-[#ffd700] text-white rounded">Button</button>
        </div>
        <div className='conatiner flex items-start bg-white border border-black w-full m-4 h-40'>
            <div className='container bg-[#fff9e6] w-1/3 h-full flex items-center justify-center'>
                <h1 className='text-2xl font-bold text-center'> Rent </h1>
            </div>
            <div className='container w-2/3 h-2/3 ml-4'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div>
            <button className="absolute right-8 bottom-6 px-4 py-2 bg-[#ffd700] text-white rounded">Button</button>
        </div>
    </div>
  )
}

export default Services