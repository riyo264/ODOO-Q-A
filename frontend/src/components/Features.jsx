
import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: "fa-users",
      title: "Expert Community",
      description: "Connect with industry experts, professionals, and passionate learners who share their knowledge freely and help you grow."
    },
    {
      icon: "fa-check",
      title: "Instant Answers",
      description: "Get quick, accurate answers to your questions from our active community. Most questions receive responses within minutes."
    },
    {
      icon: "fa-shield-alt",
      title: "Quality Content",
      description: "Our moderation system ensures high-quality discussions and reliable information, making learning safe and effective."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make our Q&A community the best place
            to learn and share knowledge
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Features;