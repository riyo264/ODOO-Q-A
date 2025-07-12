import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../App";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [activeTab, setActiveTab] = useState("questions");

  // Placeholder: Fetch user's questions and answers (replace with real API calls)
  useEffect(() => {
    if (user) {
      // Simulated data
      setQuestions([
        { id: 1, title: "How to use React useState hook?", date: "2024-05-01" },
        {
          id: 2,
          title: "Best practices for component design",
          date: "2024-06-10",
        },
      ]);

      setAnswers([
        {
          id: 1,
          questionId: 1,
          questionTitle: "What is the difference between React and Angular?",
          snippet:
            "React is a library focused on UI while Angular is a full framework...",
          date: "2024-06-20",
        },
      ]);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold">
          Please log in to view your profile.
        </h2>
        <Link to="/login" className="text-blue-500 underline mt-4 inline-block">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Profile Overview */}
      <div className="card p-6 flex items-center space-x-6">
        <img
          src={
            user.avatar ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`
          }
          alt={user.username}
          className="w-20 h-20 rounded-full shadow"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <p className="text-gray-600">{user.email || "No email provided"}</p>
          <p className="text-sm text-purple-700 mt-1">
            Role: {user.role || "User"}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b pb-2">
        <button
          onClick={() => setActiveTab("questions")}
          className={`px-4 py-2 font-semibold rounded-2xl ${
            activeTab === "questions"
              ? "bg-white shadow text-purple-600"
              : "text-gray-500"
          }`}
        >
          My Questions
        </button>
        <button
          onClick={() => setActiveTab("answers")}
          className={`px-4 py-2 font-semibold rounded-2xl ${
            activeTab === "answers"
              ? "bg-white shadow text-purple-600"
              : "text-gray-500"
          }`}
        >
          My Answers
        </button>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={activeTab}
        className="space-y-4"
      >
        {activeTab === "questions" ? (
          <>
            {questions.length > 0 ? (
              questions.map((q) => (
                <Link
                  to={`/questions/${q.id}`}
                  key={q.id}
                  className="block card p-4 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold">{q.title}</h3>
                  <p className="text-sm text-gray-500">Posted on {q.date}</p>
                </Link>
              ))
            ) : (
              <p className="text-gray-600">
                You haven't asked any questions yet.
              </p>
            )}
          </>
        ) : (
          <>
            {answers.length > 0 ? (
              answers.map((a) => (
                <Link
                  to={`/questions/${a.questionId}`}
                  key={a.id}
                  className="block card p-4 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold">{a.questionTitle}</h3>
                  <p className="text-sm text-gray-500">Answered on {a.date}</p>
                  <p className="mt-2 text-gray-700 line-clamp-2">{a.snippet}</p>
                </Link>
              ))
            ) : (
              <p className="text-gray-600">
                You haven't answered any questions yet.
              </p>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ProfilePage;
