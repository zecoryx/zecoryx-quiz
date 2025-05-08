"use client";

import { Link } from "react-router-dom";
import { FiArrowLeft, FiClock, FiBell } from "react-icons/fi";
import { motion } from "framer-motion";

function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
            <FiClock className="w-10 h-10" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">Tez kunda...</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mt-4 text-xl max-w-lg mx-auto">Biz yangi ajoyib funksiyalar ustida ishlamoqdamiz. Tez orada qaytib keling!</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <Link to="/" className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-xl text-center transition-colors">
          <FiArrowLeft />
          <span>Bosh sahifaga qaytish</span>
        </Link>
      </motion.div>
    </div>
  );
}

export default ComingSoon;
