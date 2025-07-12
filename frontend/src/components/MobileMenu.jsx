import React from 'react';

const MobileMenu = () => {
  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-purple-100 shadow-lg">
      <div className="px-4 py-4 space-y-4">
        <a href="#" className="block text-gray-700 hover:text-purple-600 cursor-pointer">
          Home
        </a>
        <a href="#" className="block text-gray-700 hover:text-purple-600 cursor-pointer">
          Questions
        </a>
        <a href="#" className="block text-gray-700 hover:text-purple-600 cursor-pointer">
          Topics
        </a>
        <a href="#" className="block text-gray-700 hover:text-purple-600 cursor-pointer">
          About
        </a>
        <div className="pt-4 border-t border-purple-100 space-y-3">
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full px-4 py-2 pl-10 text-sm border-2 border-purple-200 rounded-full focus:outline-none focus:border-purple-500"
          />
          <div className="flex space-x-3">
            <button className="flex-1 px-4 py-2 text-purple-600 border border-purple-600 rounded-full hover:bg-purple-50 !rounded-button whitespace-nowrap cursor-pointer">
              Login
            </button>
            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 !rounded-button whitespace-nowrap cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;