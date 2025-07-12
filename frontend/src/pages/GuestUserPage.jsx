import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../App';

const GuestUserPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 pt-24">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center space-x-6">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=guest"
            alt="Guest Avatar"
            className="w-24 h-24 rounded-full shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Guest User</h2>
            <p className="text-gray-500">You are currently browsing as a guest.</p>
          </div>
        </div>

        <hr className="my-8" />

        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Want to ask or answer questions?</h3>
            <p className="text-gray-600 mb-4">Login or create an account to participate in the community.</p>
            <div className="flex justify-center space-x-4">
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-6 py-2 rounded-lg"
                >
                  Login
                </motion.button>
              </Link>
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-6 py-2 rounded-lg"
                >
                  Sign Up
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>Explore questions, discover answers, and engage with the community once you're signed in!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestUserPage;
