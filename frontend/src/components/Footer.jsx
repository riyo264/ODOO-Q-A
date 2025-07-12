
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              QuestionFlow
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Building the world's largest knowledge-sharing community where
              curious minds connect and learn together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Browse Questions', 'Ask Question', 'Topics', 'About Us'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Community</h3>
            <ul className="space-y-3">
              {['Community Guidelines', 'Code of Conduct', 'Moderation Policy', 'Report Content', 'Help Center'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {['Contact Us', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Careers'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 QuestionFlow. All rights reserved. Built with ❤️ for the
            curious minds.
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;