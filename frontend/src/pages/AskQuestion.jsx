import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Tag, HelpCircle, Send } from 'lucide-react';

const AskQuestion = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    category: 'general'
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { value: 'general', label: 'General Programming' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Development' },
    { value: 'database', label: 'Database' },
    { value: 'devops', label: 'DevOps' },
    { value: 'ai', label: 'AI/Machine Learning' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you'd create the question and get its ID
      const questionId = Math.floor(Math.random() * 1000) + 100;
      navigate(`/questions/${questionId}`);
      setIsLoading(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
          >
            <HelpCircle className="w-6 h-6 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold gradient-text">Ask a Question</h1>
        </div>
        <p className="text-gray-600 text-lg">
          Share your knowledge and help the community grow
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="card p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title */}
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-3">
              Question Title
            </label>
            <p className="text-gray-600 text-sm mb-4">
              Be specific and imagine you're asking a question to another person
            </p>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., How do I implement authentication in React?"
              className="form-input w-full py-4 text-lg"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-3">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-input w-full py-4"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-3">
              Question Details
            </label>
            <p className="text-gray-600 text-sm mb-4">
              Include all the information someone would need to answer your question
            </p>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide more details about your question. Include what you've tried, what you expected to happen, and what actually happened..."
              rows="12"
              className="form-input w-full resize-none"
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-3">
              Tags
            </label>
            <p className="text-gray-600 text-sm mb-4">
              Add up to 5 tags to describe what your question is about (separated by commas)
            </p>
            <div className="relative">
              <Tag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="e.g., react, javascript, authentication, hooks"
                className="form-input w-full pl-12 py-4"
              />
            </div>
          </div>

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-6"
          >
            <h3 className="font-semibold text-blue-800 mb-3">Writing a good question</h3>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Make sure your question hasn't been asked before</li>
              <li>• Keep your question title clear and specific</li>
              <li>• Provide context and what you've already tried</li>
              <li>• Include relevant code, error messages, or examples</li>
              <li>• Use proper grammar and formatting</li>
            </ul>
          </motion.div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-6">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/')}
              className="btn-secondary px-8 py-3 rounded-xl font-medium"
            >
              Cancel
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="btn-primary px-8 py-3 rounded-xl font-medium flex items-center space-x-2"
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Post Question</span>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AskQuestion;