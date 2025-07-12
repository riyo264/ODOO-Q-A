import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, MessageCircle, Eye, Clock, Award } from 'lucide-react';

const QuestionCard = ({ question, index }) => {
  const [votes, setVotes] = useState(question.votes);
  const [userVote, setUserVote] = useState(null);

  const handleVote = (type) => {
    if (userVote === type) {
      setVotes(votes - (type === 'up' ? 1 : -1));
      setUserVote(null);
    } else {
      const adjustment = userVote ? (type === 'up' ? 2 : -2) : (type === 'up' ? 1 : -1);
      setVotes(votes + adjustment);
      setUserVote(type);
    }
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6 group"
    >
      <div className="flex space-x-4">
        {/* Vote Controls */}
        <div className="flex flex-col items-center space-y-2 flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleVote('up')}
            className={`vote-btn ${userVote === 'up' ? 'active' : ''}`}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
          
          <motion.span 
            key={votes}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="font-bold text-lg text-gray-700"
          >
            {votes}
          </motion.span>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleVote('down')}
            className={`vote-btn ${userVote === 'down' ? 'active' : ''}`}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Question Content */}
        <div className="flex-1 min-w-0">
          {/* User Info */}
          <div className="flex items-center space-x-3 mb-3">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={question.author.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${question.author.username}`}
              alt={question.author.username}
              className="avatar w-10 h-10"
            />
            <div>
              <p className="font-semibold text-gray-800">{question.author.username}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{question.timestamp}</span>
                {question.author.reputation && (
                  <>
                    <Award className="w-3 h-3 text-yellow-500" />
                    <span>{question.author.reputation}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <Link to={`/questions/${question.id}`} className="block group-hover:text-blue-600 transition-colors">
            <motion.h2 
              className="text-xl font-bold text-gray-900 mb-3 line-clamp-2"
              whileHover={{ x: 5 }}
            >
              {question.title}
            </motion.h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {truncateText(question.description)}
            </p>
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {question.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                whileHover={{ scale: 1.05 }}
                className="tag"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Metadata */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>{question.answers} answers</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{question.views} views</span>
              </div>
            </div>
            
            {question.hasAcceptedAnswer && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center space-x-1 text-green-600"
              >
                <Award className="w-4 h-4" />
                <span className="text-xs font-medium">Solved</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionCard;