import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const AvatarBadge = ({ user, size = 'md', showReputation = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className="flex items-center space-x-3">
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
        alt={user.username}
        className={`avatar ${sizeClasses[size]}`}
      />
      <div>
        <p className={`font-semibold text-gray-800 ${textSizes[size]}`}>
          {user.username}
        </p>
        {showReputation && user.reputation && (
          <div className="flex items-center space-x-1 text-gray-500">
            <Award className="w-3 h-3 text-yellow-500" />
            <span className="text-xs">{user.reputation}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarBadge;