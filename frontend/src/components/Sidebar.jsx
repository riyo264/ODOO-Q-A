import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Award, Users, Tag, Star } from 'lucide-react';

const Sidebar = () => {
  const trendingTags = [
    { name: 'React', count: 1234, color: 'bg-blue-100 text-blue-800' },
    { name: 'JavaScript', count: 2341, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Python', count: 1876, color: 'bg-green-100 text-green-800' },
    { name: 'CSS', count: 987, color: 'bg-purple-100 text-purple-800' },
    { name: 'Node.js', count: 654, color: 'bg-emerald-100 text-emerald-800' }
  ];

  const topUsers = [
    { username: 'codeMaster', reputation: 15420, avatar: null },
    { username: 'reactGuru', reputation: 12890, avatar: null },
    { username: 'pythonista', reputation: 11234, avatar: null },
    { username: 'webDev', reputation: 9876, avatar: null }
  ];

  return (
    <div className="space-y-6">
      {/* Trending Tags */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-lg text-gray-800">Trending Tags</h3>
        </div>
        <div className="space-y-3">
          {trendingTags.map((tag, index) => (
            <motion.div
              key={tag.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <Tag className="w-4 h-4 text-gray-400" />
                <span className="font-medium text-gray-700">{tag.name}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${tag.color}`}>
                {tag.count}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Top Contributors */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="card p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-purple-600" />
          <h3 className="font-bold text-lg text-gray-800">Top Contributors</h3>
        </div>
        <div className="space-y-3">
          {topUsers.map((user, index) => (
            <motion.div
              key={user.username}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-1 text-yellow-500">
                <span className="font-bold text-sm">#{index + 1}</span>
                <Star className="w-3 h-3" />
              </div>
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
                alt={user.username}
                className="avatar w-8 h-8"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">{user.username}</p>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Award className="w-3 h-3 text-yellow-500" />
                  <span>{user.reputation.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="card p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Clock className="w-5 h-5 text-green-600" />
          <h3 className="font-bold text-lg text-gray-800">Recent Activity</h3>
        </div>
        <div className="space-y-3 text-sm">
          <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-400">
            <p className="text-gray-700">New question about React hooks</p>
            <p className="text-gray-500 text-xs mt-1">2 minutes ago</p>
          </div>
          <div className="p-3 rounded-lg bg-green-50 border-l-4 border-green-400">
            <p className="text-gray-700">Answer accepted for Python question</p>
            <p className="text-gray-500 text-xs mt-1">5 minutes ago</p>
          </div>
          <div className="p-3 rounded-lg bg-purple-50 border-l-4 border-purple-400">
            <p className="text-gray-700">New user joined the community</p>
            <p className="text-gray-500 text-xs mt-1">10 minutes ago</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;