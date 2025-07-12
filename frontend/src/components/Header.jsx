import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-purple-100 z-50 h-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              QuoraClone
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
              Questions
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
              Topics
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
              About
            </a>
          </div>
          
          {/* Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions..."
                className="w-64 px-4 py-2 pl-10 text-sm border-2 border-purple-200 rounded-full focus:outline-none focus:border-purple-500 transition-colors"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm"></i>
            </div>
            <button className="px-6 py-2 text-purple-600 border border-purple-600 rounded-full hover:bg-purple-50 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all !rounded-button whitespace-nowrap cursor-pointer">
              Sign Up
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-purple-600 cursor-pointer"
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && <MobileMenu />}
      </div>
    </nav>
  );
};

export default Header;