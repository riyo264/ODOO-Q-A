import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Eye, Clock, Award, Share, Bookmark } from 'lucide-react';
import VoteButton from '../components/VoteButton';
import AvatarBadge from '../components/AvatarBadge';
import { useAuth } from '../App';

const QuestionDetail = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  
  const [question] = useState({
    id: parseInt(id),
    title: "How to implement advanced React hooks with TypeScript for better performance?",
    description: `I'm working on a complex React application and I want to optimize performance using custom hooks with TypeScript. I've tried various approaches but I'm struggling with proper type definitions and memoization strategies.

Here's what I've tried so far:

\`\`\`typescript
const useOptimizedData = <T>(data: T[], dependencies: any[]) => {
  const [processedData, setProcessedData] = useState<T[]>([]);
  
  useEffect(() => {
    const processed = data.map(item => ({
      ...item,
      processed: true
    }));
    setProcessedData(processed);
  }, dependencies);
  
  return processedData;
};
\`\`\`

But I'm getting TypeScript errors and I'm not sure if this is the most efficient approach. What are the best practices for creating reusable, type-safe hooks that don't cause unnecessary re-renders?

I've also tried using \`useMemo\` and \`useCallback\` but I'm not sure I'm using them correctly. Any guidance would be appreciated!`,
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
  });

  const [answers] = useState([
    {
      id: 1,
      content: `Great question! You're on the right track with custom hooks, but there are several improvements you can make for better TypeScript integration and performance.

Here's an optimized version of your hook:

\`\`\`typescript
import { useState, useEffect, useMemo, useCallback } from 'react';

interface ProcessedItem<T> extends T {
  processed: boolean;
}

const useOptimizedData = <T extends Record<string, any>>(
  data: T[], 
  processor?: (item: T) => Partial<T>
) => {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const processedData = useMemo<ProcessedItem<T>[]>(() => {
    setIsProcessing(true);
    
    const result = data.map(item => ({
      ...item,
      ...(processor ? processor(item) : {}),
      processed: true
    }));
    
    setIsProcessing(false);
    return result;
  }, [data, processor]);
  
  const refreshData = useCallback(() => {
    // Force re-computation if needed
  }, []);
  
  return { processedData, isProcessing, refreshData };
};
\`\`\`

Key improvements:
1. **Generic constraints**: \`T extends Record<string, any>\` ensures T is an object
2. **Proper memoization**: \`useMemo\` prevents unnecessary recalculations
3. **Callback stability**: \`useCallback\` for stable function references
4. **Loading states**: Track processing state for better UX
5. **Flexible processing**: Optional processor function for customization

For even better performance, consider using \`React.memo\` for your components and splitting your hooks into smaller, focused ones.`,
      votes: 28,
      author: {
        username: "tsExpert",
        avatar: null,
        reputation: 22100
      },
      timestamp: "1 hour ago",
      isAccepted: true
    },
    {
      id: 2,
      content: `I'd also recommend looking into React's \`useDeferredValue\` and \`useTransition\` hooks for handling expensive computations:

\`\`\`typescript
import { useDeferredValue, useTransition, useMemo } from 'react';

const useOptimizedDataWithTransition = <T>(data: T[]) => {
  const [isPending, startTransition] = useTransition();
  const deferredData = useDeferredValue(data);
  
  const processedData = useMemo(() => {
    return deferredData.map(item => ({
      ...item,
      processed: true
    }));
  }, [deferredData]);
  
  return { processedData, isPending };
};
\`\`\`

This approach helps with keeping your UI responsive during heavy computations.`,
      votes: 15,
      author: {
        username: "performanceGuru",
        avatar: null,
        reputation: 18750
      },
      timestamp: "45 minutes ago",
      isAccepted: false
    }
  ]);

  const [questionVotes, setQuestionVotes] = useState(question.votes);
  const [questionUserVote, setQuestionUserVote] = useState(null);
  const [newAnswer, setNewAnswer] = useState('');

  const handleQuestionVote = (type) => {
    if (!isAuthenticated) return;
    
    if (questionUserVote === type) {
      setQuestionVotes(questionVotes - (type === 'up' ? 1 : -1));
      setQuestionUserVote(null);
    } else {
      const adjustment = questionUserVote ? (type === 'up' ? 2 : -2) : (type === 'up' ? 1 : -1);
      setQuestionVotes(questionVotes + adjustment);
      setQuestionUserVote(type);
    }
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (!newAnswer.trim()) return;
    
    // In a real app, you'd submit to an API
    console.log('Submitting answer:', newAnswer);
    setNewAnswer('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Back Navigation */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="mb-6"
      >
        <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Questions</span>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Question Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="card p-8 mb-8"
          >
            <div className="flex space-x-6">
              {/* Vote Controls */}
              <div className="flex flex-col items-center space-y-3 flex-shrink-0">
                <VoteButton
                  type="up"
                  isActive={questionUserVote === 'up'}
                  onClick={() => handleQuestionVote('up')}
                  disabled={!isAuthenticated}
                />
                <motion.span 
                  key={questionVotes}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="font-bold text-2xl text-gray-700"
                >
                  {questionVotes}
                </motion.span>
                <VoteButton
                  type="down"
                  isActive={questionUserVote === 'down'}
                  onClick={() => handleQuestionVote('down')}
                  disabled={!isAuthenticated}
                />
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="vote-btn mt-2"
                >
                  <Bookmark className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Question Content */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{question.title}</h1>
                
                {/* Question Meta */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Asked {question.timestamp}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{question.views} views</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary px-4 py-2 rounded-lg flex items-center space-x-2"
                  >
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </motion.button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {question.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="tag"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Question Description */}
                <div className="prose max-w-none mb-8">
                  <div className="whitespace-pre-wrap text-gray-700 leading-relaxed text-lg">
                    {question.description}
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    <span>Asked by</span>
                  </div>
                  <AvatarBadge user={question.author} size="md" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Answers Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">{answers.length} Answers</h2>
            </div>

            {answers.map((answer, index) => (
              <AnswerCard key={answer.id} answer={answer} index={index} />
            ))}

            {/* Add Answer Section */}
            {isAuthenticated && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="card p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Answer</h3>
                <form onSubmit={handleAnswerSubmit}>
                  <textarea
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Write your answer here... Be specific and provide examples if possible."
                    rows="8"
                    className="form-input w-full resize-none mb-4"
                  />
                  <div className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="btn-primary px-6 py-3 rounded-xl font-medium"
                    >
                      Post Your Answer
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Question Stats */}
            <div className="card p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Question Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Views</span>
                  <span className="font-semibold">{question.views}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Votes</span>
                  <span className="font-semibold">{questionVotes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Answers</span>
                  <span className="font-semibold">{answers.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className={`font-semibold ${question.hasAcceptedAnswer ? 'text-green-600' : 'text-yellow-600'}`}>
                    {question.hasAcceptedAnswer ? 'Solved' : 'Open'}
                  </span>
                </div>
              </div>
            </div>

            {/* Related Questions */}
            <div className="card p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Related Questions</h3>
              <div className="space-y-3">
                {[
                  "React performance optimization tips",
                  "TypeScript generic constraints",
                  "Custom hooks best practices",
                  "useMemo vs useCallback"
                ].map((title, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ x: 5 }}
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    {title}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const AnswerCard = ({ answer, index }) => {
  const { isAuthenticated } = useAuth();
  const [votes, setVotes] = useState(answer.votes);
  const [userVote, setUserVote] = useState(null);

  const handleVote = (type) => {
    if (!isAuthenticated) return;
    
    if (userVote === type) {
      setVotes(votes - (type === 'up' ? 1 : -1));
      setUserVote(null);
    } else {
      const adjustment = userVote ? (type === 'up' ? 2 : -2) : (type === 'up' ? 1 : -1);
      setVotes(votes + adjustment);
      setUserVote(type);
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 + index * 0.1 }}
      className={`card p-8 ${answer.isAccepted ? 'border-2 border-green-200 bg-green-50' : ''}`}
    >
      {answer.isAccepted && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center space-x-2 mb-6 text-green-700"
        >
          <Award className="w-5 h-5" />
          <span className="font-semibold">Accepted Answer</span>
        </motion.div>
      )}
      
      <div className="flex space-x-6">
        {/* Vote Controls */}
        <div className="flex flex-col items-center space-y-2 flex-shrink-0">
          <VoteButton
            type="up"
            isActive={userVote === 'up'}
            onClick={() => handleVote('up')}
            disabled={!isAuthenticated}
          />
          <motion.span 
            key={votes}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="font-bold text-lg text-gray-700"
          >
            {votes}
          </motion.span>
          <VoteButton
            type="down"
            isActive={userVote === 'down'}
            onClick={() => handleVote('down')}
            disabled={!isAuthenticated}
          />
        </div>

        {/* Answer Content */}
        <div className="flex-1">
          <div className="prose max-w-none mb-6">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {answer.content}
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-500">
              <span>Answered {answer.timestamp}</span>
            </div>
            <AvatarBadge user={answer.author} size="md" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionDetail;