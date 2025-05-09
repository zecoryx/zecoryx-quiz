"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FiArrowLeft, FiSend, FiUser, FiMail, FiMessageSquare, FiPhone, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import VantaGlobe from "../hooks/Globe";
import { FaGithub, FaKickstarter } from "react-icons/fa";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Xabaringiz muvaffaqiyatli yuborildi!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="flex flex-col items-center relative  text-white p-4 overflow-hidden">
      <VantaGlobe />

      <div className="w-full max-w-4xl mt-2 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Biz bilan bog'laning</h1>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-700">Savollaringiz yoki takliflaringiz bo'lsa, bizga xabar yuboring</p>
        </motion.div>

        {/* Top 4 cards in a grid (2x2) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Card 1 */}
          <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-900 text-purple-300">
                <FiUser className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Yaratuvchi</h3>
                <p className="text-gray-400">Lazizbek Abdullayev</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-900 text-purple-300">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="text-gray-400">lazizbekabdullayev118@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-900 text-purple-300">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Telefon</h3>
                <p className="text-gray-400">+998 12 345 67 89</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-900 text-purple-300">
                <FiGlobe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Veb-sayt</h3>
                <p className="text-gray-400">www.zecoryx.uz</p>
              </div>
            </div>
          </div>

          <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-900 text-purple-300">
                <FaGithub className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Github</h3>
                <p className="text-gray-400">https://github.com/zecoryx</p>
              </div>
            </div>
          </div>

          <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-900 text-purple-300">
                <FaKickstarter className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Kwork</h3>
                <p className="text-gray-400">https://kwork.ru/user/zecoryx</p>
              </div>
            </div>
          </div>
        </div>
        <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-purple-500 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-900 text-purple-300">
              <FaKickstarter className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Tirikchilik.uz</h3>
              <p className="text-gray-400">coming-soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
