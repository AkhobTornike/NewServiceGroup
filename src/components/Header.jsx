import React from 'react'
import { useState } from 'react';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#a4c639] p-4 px-8 z-10">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo or Brand */}
            <div className="text-white text-xl font-bold">Logo</div>
    
            {/* Navigation Links - visible on large screens */}
            <div className="hidden md:flex space-x-4">
              <a href="/" className="text-white hover:text-gray-300">Home</a>
              <a href="/services" className="text-white hover:text-gray-300">Services</a>
              <a href="/portfolios" className="text-white hover:text-gray-300">Portfolios</a>
              <a href="#" className="text-white hover:text-gray-300">Contact</a>
              <a href="#" className="text-white hover:text-gray-300">Language</a>
            </div>
    
            {/* Hamburger Menu (visible on small screens) */}
            <div className="md:hidden">
              <button className="text-white" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
    
          {/* Mobile Menu - visible on small screens */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="flex flex-col items-center space-y-4 py-4">
                <a href="/" className="text-white hover:text-gray-300">Home</a>
                <a href="/services" className="text-white hover:text-gray-300">Services</a>
                <a href="/portfolios" className="text-white hover:text-gray-300">Portfolio</a>
                <a href="#" className="text-white hover:text-gray-300">Contact</a>
                <a href="#" className="text-white hover:text-gray-300">Language</a>
              </div>
            </div>
          )}
        </nav>
      );
}

export default Header