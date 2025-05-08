"use client"

import { useParams, Link, useLocation } from "react-router-dom"
import { FiCode, FiFileText, FiCoffee, FiEye, FiAward, FiHome, FiList } from "react-icons/fi"
import { FaReact } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState } from "react"
import Confetti from "../components/Confetti"
import quizData from "../shared/quizData/quizData"

function Result() {
  const { subject, score } = useParams()
  const location = useLocation()
  const [showAnswers, setShowAnswers] = useState(false)

  // Get answered questions data from location state
  const answeredQuestions = location.state?.answeredQuestions || []
  const questions = location.state?.questions || quizData[subject] || []

  const scoreNum = Number.parseInt(score, 10)
  const totalQuestions = questions.length
  const percentage = Math.round((scoreNum / totalQuestions) * 100)
  const isPerfect = scoreNum === totalQuestions
  const isGood = percentage >= 70 && !isPerfect
  const isFail = percentage < 50

  const getSubjectIcon = () => {
    switch (subject) {
      case "html":
        return <FiCode/>
      case "css":
        return <FiFileText  />
      case "javascript":
        return <FiCoffee />
      case "accessibility":
        return <FiEye  />
      case "react":
        return <FaReact/>
      default:
        return <FiCode />
    }
  }

  const getSubjectColor = () => {
    switch (subject) {
      case "html":
        return "from-orange-400 to-orange-600"
      case "css":
        return "from-green-400 to-green-600"
      case "javascript":
        return "from-blue-400 to-blue-600"
      case "accessibility":
        return "from-purple-400 to-purple-600"
      case "react":
        return "from-cyan-400 to-cyan-600"
      default:
        return "from-purple-400 to-purple-600"
    }
  }

  const getMessage = () => {
    if (isPerfect) return "Ajoyib! Siz ustasiz!"
    if (isGood) return "Juda yaxshi! Siz ko'p narsani bilasiz!"
    if (percentage >= 50) return "Yaxshi harakat! O'rganishda davom eting!"
    return "Mashq qilishda davom eting! Siz yaxshilanasiz!"
  }

  return (
    <>
      {isPerfect && <Confetti />}

      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-black">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${getSubjectColor()} text-white`}
            >
              {getSubjectIcon()}
            </div>
            <span className="font-medium capitalize text-lg">{subject}</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-black mb-2">Viktorina yakunlandi</h2>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-black">Siz to'pladingiz...</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8 w-full max-w-md"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${getSubjectColor()} text-white`}
            >
              {getSubjectIcon()}
            </div>
            <span className="font-medium capitalize text-xl">{subject}</span>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="5" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke={isPerfect ? "#8B5CF6" : isGood ? "#10B981" : isFail ? "#EF4444" : "#F59E0B"}
                  strokeWidth="5"
                  strokeDasharray={`${percentage * 2.83} 283`}
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center py-10">
              <div className="text-8xl font-bold text-gray-900 dark:text-white mb-2">{score}</div>
              <div className="text-gray-500 dark:text-gray-400 text-xl">jami {totalQuestions} dan</div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p
              className={`text-lg font-medium ${
                isPerfect
                  ? "text-purple-600 dark:text-purple-400"
                  : isGood
                    ? "text-green-600 dark:text-green-400"
                    : isFail
                      ? "text-red-600 dark:text-red-400"
                      : "text-yellow-600 dark:text-yellow-400"
              }`}
            >
              {getMessage()}
            </p>
          </div>
        </motion.div>

        <div className="flex gap-4 w-full max-w-md mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-1/3 cursor-pointer"
          >
            <Link
              to="/"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-xl text-center transition-colors"
            >
              <FiHome />
              <span>Bosh sahifa</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-1/3"
          >
            <Link
              to={`/quiz/${subject}`}
              className="flex items-center justify-center gap-2 w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl text-center transition-colors"
            >
              <FiAward />
              <span>Qayta o'ynash</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-1/3 cursor-pointer"
          >
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className="flex items-center cursor-pointer  justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-center transition-colors"
            >
              <FiList />
              <span>{showAnswers ? "Yashirish" : "Javoblar"}</span>
            </button>
          </motion.div>
        </div>

        {showAnswers && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">To'g'ri javoblar</h3>

            <div className="space-y-4">
              {questions.map((question, index) => {
                const answer = answeredQuestions[index] || { isCorrect: false, selectedAnswer: null }

                return (
                  <div
                    key={index}
                    className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm ${
                      answer.isCorrect ? "border-l-4 border-green-500" : "border-l-4 border-red-500"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                        {index + 1}. {question.question}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          answer.isCorrect
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}
                      >
                        {answer.isCorrect ? "To'g'ri" : "Noto'g'ri"}
                      </span>
                    </div>

                    <div className="mt-3 space-y-2">
                      {question.options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          className={`p-3 rounded-lg ${
                            optIndex === question.correctAnswer
                              ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                              : optIndex === answer.selectedAnswer && optIndex !== question.correctAnswer
                                ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                                : "bg-gray-50 dark:bg-gray-700/30"
                          }`}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-6 h-6 flex items-center justify-center rounded-full mr-2 text-xs ${
                                optIndex === question.correctAnswer
                                  ? "bg-green-500 text-white"
                                  : optIndex === answer.selectedAnswer && optIndex !== question.correctAnswer
                                    ? "bg-red-500 text-white"
                                    : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
                              }`}
                            >
                              {String.fromCharCode(65 + optIndex)}
                            </div>
                            <span
                              className={`${
                                optIndex === question.correctAnswer
                                  ? "text-green-800 dark:text-green-200"
                                  : optIndex === answer.selectedAnswer && optIndex !== question.correctAnswer
                                    ? "text-red-800 dark:text-red-200"
                                    : "text-gray-700 dark:text-gray-300"
                              }`}
                            >
                              {option}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default Result