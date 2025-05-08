"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { FiCode, FiFileText, FiCoffee, FiArrowLeft } from "react-icons/fi"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { motion } from "framer-motion"
import quizData from "../shared/quizData/quizData"

function Quiz() {
  const { subject } = useParams()
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [timeLeft, setTimeLeft] = useState(30)
  const [isAnswered, setIsAnswered] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [optionsOrder, setOptionsOrder] = useState([])

  useEffect(() => {
    // Get questions for the selected subject
    const subjectQuestions = quizData[subject] || []
    if (subjectQuestions.length === 0) {
      toast.error("Mavzu topilmadi!")
      navigate("/coming-soon")
      return
    }

    // Shuffle the questions array and take only 10
    const shuffledQuestions = [...subjectQuestions].sort(() => Math.random() - 0.5).slice(0, 10)

    setQuestions(shuffledQuestions)
    setLoading(false)
    setTimeLeft(30)

    // Initialize answered questions array
    setAnsweredQuestions(Array(shuffledQuestions.length).fill(null))
  }, [subject, navigate])

  // Randomize options order for each question
  useEffect(() => {
    if (questions.length > 0) {
      const currentQ = questions[currentQuestion]
      if (currentQ) {
        // Create array of indices and shuffle them
        const indices = currentQ.options.map((_, index) => index)
        const shuffledIndices = [...indices].sort(() => Math.random() - 0.5)
        setOptionsOrder(shuffledIndices)
      }
    }
  }, [currentQuestion, questions])

  useEffect(() => {
    if (loading || isAnswered) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentQuestion, loading, isAnswered])

  const handleTimeUp = () => {
    if (!isAnswered) {
      toast.error("Vaqt tugadi!")

      // Save the unanswered question
      const newAnsweredQuestions = [...answeredQuestions]
      newAnsweredQuestions[currentQuestion] = {
        questionIndex: currentQuestion,
        selectedAnswer: null,
        correctAnswer: questions[currentQuestion].correctAnswer,
        isCorrect: false,
      }
      setAnsweredQuestions(newAnsweredQuestions)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setTimeLeft(30)
        setIsAnswered(false)
      } else {
        // Quiz completed, navigate to result page with answered questions data
        navigate(`/result/${subject}/${score}`, {
          state: { answeredQuestions: newAnsweredQuestions, questions },
        })
      }
    }
  }

  const getSubjectIcon = () => {
    switch (subject) {
      case "html":
        return <FiCode />
      case "css":
        return <FiFileText />
      case "javascript":
        return <FiCoffee />
      case "react":
        return <FaReact />
      case "typescript":
        return <SiTypescript />
      case "nodejs":
        return <FaNodeJs />
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
        return "from-yellow-400 to-yellow-600"
      case "react":
        return "from-blue-400 to-blue-600"
      case "typescript":
        return "from-blue-600 to-blue-800"
      case "nodejs":
        return "from-green-600 to-green-800"
      default:
        return "from-purple-400 to-purple-600"
    }
  }

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      toast.error("Iltimos, javobni tanlang")
      return
    }

    setIsAnswered(true)

    // Get the actual option index from the shuffled order
    const selectedOptionIndex = optionsOrder[selectedAnswer]

    // Check if answer is correct
    const isCorrect = selectedOptionIndex === questions[currentQuestion].correctAnswer

    // Don't show toast for correct/incorrect answer
    if (isCorrect) {
      setScore(score + 1)
    }

    // Save the answered question
    const newAnsweredQuestions = [...answeredQuestions]
    newAnsweredQuestions[currentQuestion] = {
      questionIndex: currentQuestion,
      selectedAnswer: selectedOptionIndex,
      correctAnswer: questions[currentQuestion].correctAnswer,
      isCorrect,
    }
    setAnsweredQuestions(newAnsweredQuestions)

    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setTimeLeft(30)
        setIsAnswered(false)
      } else {
        // Quiz completed, navigate to result page with answered questions data
        navigate(`/result/${subject}/${score + (isCorrect ? 1 : 0)}`, {
          state: { answeredQuestions: newAnsweredQuestions, questions },
        })
      }
    }, 800)
  }

  const handleGoBack = () => {
    navigate("/")
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      {/* <button
        onClick={handleGoBack}
        className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        <FiArrowLeft />
        <span>Orqaga</span>
      </button> */}

      <div className="w-full max-w-3xl mt-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${getSubjectColor()} text-white`}
            >
              {getSubjectIcon()}
            </div>
            <span className="font-medium capitalize text-black">{subject}</span>
          </div>

          <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow">
            <span className={`font-medium ${timeLeft < 10 ? "text-red-500" : "text-gray-700 dark:text-gray-200"}`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mb-8">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8"
        >
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Savol {currentQuestion + 1} / {questions.length}
          </div>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            {questions[currentQuestion].question}
          </h2>
        </motion.div>

        <div className="space-y-4 w-full">
          {optionsOrder.map((originalIndex, displayIndex) => (
            <motion.button
              key={displayIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: displayIndex * 0.1 }}
              onClick={() => !isAnswered && handleAnswerSelect(displayIndex)}
              disabled={isAnswered}
              className={`flex items-center gap-4 p-4 w-full text-left bg-white cursor-pointer dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 option-card ${
                selectedAnswer === displayIndex ? "ring-2 ring-purple-500" : ""
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 font-medium`}
              >
                {String.fromCharCode(65 + displayIndex)}
              </div>
              <span className="font-medium">{questions[currentQuestion].options[originalIndex]}</span>
            </motion.button>
          ))}

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleSubmit}
            disabled={selectedAnswer === null || isAnswered}
            className={`w-full py-4 mt-6 bg-purple-600 cursor-pointer hover:bg-purple-700 text-white font-medium rounded-xl transition-colors ${
              selectedAnswer === null || isAnswered ? "opacity-50 cursor-not-allowed" : "pulse"
            }`}
          >
            Javobni yuborish
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Quiz