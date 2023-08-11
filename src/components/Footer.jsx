import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-800 py-6 text-white'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
            <div className='flex space-x-4 ml-8'>
                <a href='/' className='text-white hover:text-gray-300'>Home</a>
                <a href='/services' className='text-white hover:text-gray-300'>Service</a>
                <a href='/portfolio' className='text-white hover:text-gray-300'>Portfolio</a>
            </div>

            <div className='my-4 md:my-0 md:w-1/2 text-center'>
                <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
                <p>
                    Made with{' '}
                    <span role="img" aria-label="Heart">
                        ❤️
                    </span>{' '}
                    by <a href="https://your-website.com" className="text-blue-500 hover:underline">Your Name</a>
                </p>
            </div>

            <div className='flex space-x-4 mr-8'>
                <a href='#' className='text-white hover:text-gray-300'>Contacts</a>
                <a href='#' className='text-white hover:text-gray-300'>Language</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
