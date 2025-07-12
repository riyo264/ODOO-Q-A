
import React from 'react';
import TopicCard from './TopicCard';

const Topics = () => {
  const topics = [
    { name: "Technology", icon: "fa-laptop-code", questions: "12.5k" },
    { name: "Science", icon: "fa-flask", questions: "8.3k" },
    { name: "Business", icon: "fa-briefcase", questions: "9.7k" },
    { name: "Health", icon: "fa-heartbeat", questions: "6.2k" },
    { name: "Education", icon: "fa-graduation-cap", questions: "11.1k" },
    { name: "Arts", icon: "fa-palette", questions: "4.8k" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Popular Topics
          </h2>
          <p className="text-xl text-gray-600">
            Explore trending discussions and find answers in your areas of interest
          </p>
        </div>
        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
          {topics.map((topic, index) => (
            <TopicCard 
              key={index}
              name={topic.name}
              icon={topic.icon}
              questions={topic.questions}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Topics;