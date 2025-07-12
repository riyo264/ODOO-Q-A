import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, SortAsc, Plus, TrendingUp } from 'lucide-react';
import QuestionCard from '../components/QuestionCard';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../App';
import Footer from '../components/Footer';

const LandingPage = () => {
  const { isAuthenticated } = useAuth();
  const [sortBy, setSortBy] = useState('newest');
  const [filterBy, setFilterBy] = useState('all');

  const [questions] = useState([
    {
      id: 1,
      title: "How to implement advanced React hooks with TypeScript for better performance?",
      description: "I'm working on a complex React application and I want to optimize performance using custom hooks with TypeScript. I've tried various approaches but I'm struggling with proper type definitions and memoization strategies. What are the best practices for creating reusable, type-safe hooks that don't cause unnecessary re-renders?",
      votes: 42,
      answers: 8,
      views: 1234,
      author: {
        username: "reactMaster",
        avatar: null,
        reputation: 15420
      },
      timestamp: "2 hours ago",
      tags: ["react", "typescript", "hooks", "performance"],
      hasAcceptedAnswer: true
    },
    {
      id: 2,
      title: "Best practices for handling async operations in modern JavaScript",
      description: "I'm building a web application that makes multiple API calls and handles real-time data. I want to understand the most efficient ways to handle async operations, error handling, and state management. Should I use async/await, Promises, or a combination? How do I handle race conditions and cancellation?",
      votes: 28,
      answers: 12,
      views: 2567,
      author: {
        username: "asyncDev",
        avatar: null,
        reputation: 8930
      },
      timestamp: "4 hours ago",
      tags: ["javascript", "async", "promises", "api"],
      hasAcceptedAnswer: false
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to use which layout system?",
      description: "I'm designing responsive layouts and I'm confused about when to use CSS Grid versus Flexbox. Both seem to solve similar problems but I want to understand the specific use cases where one is better than the other. Can someone explain with practical examples?",
      votes: 35,
      answers: 6,
      views: 891,
      author: {
        username: "cssGuru",
        avatar: null,
        reputation: 12450
      },
      timestamp: "6 hours ago",
      tags: ["css", "grid", "flexbox", "layout"],
      hasAcceptedAnswer: true
    },
    {
      id: 4,
      title: "Database design patterns for scalable web applications",
      description: "I'm architecting a new web application that needs to handle millions of users and complex relationships between data. What are the best database design patterns and practices for ensuring scalability, performance, and maintainability? Should I use SQL or NoSQL?",
      votes: 19,
      answers: 15,
      views: 3245,
      author: {
        username: "dbArchitect",
        avatar: null,
        reputation: 18750
      },
      timestamp: "1 day ago",
      tags: ["database", "architecture", "scalability", "design-patterns"],
      hasAcceptedAnswer: false
    },
    {
      id: 5,
      title: "Implementing secure authentication with JWT and refresh tokens",
      description: "I need to implement a robust authentication system for my application. I understand the basics of JWT but I'm confused about refresh token implementation, token storage, and security best practices. How do I handle token expiration and renewal securely?",
      votes: 67,
      answers: 9,
      views: 4567,
      author: {
        username: "securityExpert",
        avatar: null,
        reputation: 22100
      },
      timestamp: "1 day ago",
      tags: ["authentication", "jwt", "security", "tokens"],
      hasAcceptedAnswer: true
    },
    {
      id: 6,
      title: "Advanced Git workflows for team collaboration",
      description: "Our development team is growing and we need to establish better Git workflows. We're currently using basic branching but we're running into merge conflicts and deployment issues. What are the best Git strategies for large teams working on multiple features simultaneously?",
      votes: 44,
      answers: 7,
      views: 1876,
      author: {
        username: "gitMaster",
        avatar: null,
        reputation: 9870
      },
      timestamp: "2 days ago",
      tags: ["git", "workflow", "collaboration", "branching"],
      hasAcceptedAnswer: false
    }
  ]);

  const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'votes', label: 'Most Voted' },
    { value: 'answers', label: 'Most Answered' },
    { value: 'views', label: 'Most Viewed' }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Questions' },
    { value: 'unanswered', label: 'Unanswered' },
    { value: 'solved', label: 'Solved' },
    { value: 'recent', label: 'Recent Activity' }
  ];

  return (
    <div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Header Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8"
          >
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">
                Discover Knowledge
              </h1>
              <p className="text-gray-600 text-lg">
                {questions.length} questions from our amazing community
              </p>
            </div>

            {isAuthenticated && (
              <motion.a
                href="/ask"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-6 py-3 rounded-xl flex items-center space-x-2 mt-4 sm:mt-0 shadow-lg"
              >
                <Plus className="w-5 h-5" />
                <span>Ask Question</span>
              </motion.a>
            )}
          </motion.div>

          {/* Filters and Sorting */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="card p-6 mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                    className="form-input py-2 px-3 text-sm"
                  >
                    {filterOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <SortAsc className="w-4 h-4 text-gray-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="form-input py-2 px-3 text-sm"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <TrendingUp className="w-4 h-4" />
                <span>Updated 2 minutes ago</span>
              </div>
            </div>
          </motion.div>

          {/* Questions Grid */}
          <div className="space-y-6">
            {questions.map((question, index) => (
              <QuestionCard key={question.id} question={question} index={index} />
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-3 rounded-xl font-medium shadow-lg"
            >
              Load More Questions
            </motion.button>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </motion.div>
    <Footer />
    </div>
  );
};

export default LandingPage;
