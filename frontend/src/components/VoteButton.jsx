import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const VoteButton = ({ type, isActive, onClick, disabled = false }) => {
  const Icon = type === 'up' ? ChevronUp : ChevronDown;
  
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.1 } : {}}
      whileTap={!disabled ? { scale: 0.9 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`vote-btn ${isActive ? 'active' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <Icon className="w-5 h-5" />
    </motion.button>
  );
};

export default VoteButton;