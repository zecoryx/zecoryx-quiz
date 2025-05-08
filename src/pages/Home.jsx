"use client";

import { Link } from "react-router-dom";
import { FiCode, FiFileText, FiCoffee } from "react-icons/fi";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { GrSwift } from "react-icons/gr";

function Home() {
  const subjects = [
    { id: "html", name: "HTML", icon: <FiCode className="" />, color: "from-orange-400 to-orange-600" },
    { id: "css", name: "CSS", icon: <FiFileText className="" />, color: "from-green-400 to-green-600" },
    {
      id: "javascript",
      name: "Javascript",
      icon: <FiCoffee className="" />,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: "react",
      name: "React",
      icon: <FaReact className="" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: <SiTypescript className="" />,
      color: "from-blue-600 to-blue-800",
    },
    {
      id: "nodejs",
      name: "Node.js",
      icon: <FaNodeJs className="" />,
      color: "from-green-600 to-green-800",
    },
    {
      id: "expressjs",
      name: "Express js",
      icon: <SiExpress className="" />,
      color: "from-green-800 to-green-600",
    },
    {
      id: "pyhton",
      name: "Python",
      icon: <FaPython className="" />,
      color: "from-white to-blue-800",
    },
    {
      id: "swift",
      name: "Swift",
      icon: <GrSwift className="" />,
      color: "from-orange-600 to-orange-800",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">FullStack Viktorina!</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-xl">Boshlash uchun mavzuni tanlang.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {subjects.map((subject, index) => (
          <motion.div key={subject.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Link to={`/quiz/${subject.id}`} className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 option-card">
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${subject.color} text-white`}>{subject.icon}</div>
              <span className="font-medium text-lg">{subject.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-12 text-center text-gray-500 dark:text-gray-400">
        <p>Frontend dasturlash bo'yicha bilimlaringizni sinab ko'ring!</p>
      </motion.div>
    </div>
  );
}

export default Home;