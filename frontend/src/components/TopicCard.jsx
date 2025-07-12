import React from 'react';

const TopicCard = ({ name, icon, questions }) => {
  return (
    <div className="flex-shrink-0 w-64 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-200 snap-start cursor-pointer">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className={`fas ${icon} text-white text-xl`}></i>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-purple-600 font-semibold">{questions} questions</p>
      </div>
    </div>
  );
};

export default TopicCard;