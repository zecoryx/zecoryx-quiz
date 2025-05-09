"use client";

import { Link, Outlet, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiArrowLeft } from "react-icons/fi";
import AnimatedBackground from "../hooks/AnimatedBackground";
import { useEffect } from "react";
import VantaGlobe from "../hooks/Globe";

function Layout() {
  const location = useLocation();

  const hiddenRoutes = ["/quiz/css", "/quiz/html", "/quiz/javascript", "/quiz/react", "/quiz/typescript", "/quiz/nodejs", "/quiz/python", "/quiz/expressjs", "/Contact"];

  const show = !hiddenRoutes.includes(location.pathname);

  return (
    <div className=" quiz-gradient text-white transition-colors duration-200">
      <AnimatedBackground />

      <div className="flex items-start justify-start m-3">
        {!show && (
          <Link to="/">
            <button className="absolute cursor-pointer top-6 z-40 left-6 flex items-center gap-2 px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors shadow-md">
              <FiArrowLeft />
              <span>Orqaga</span>
            </button>
          </Link>
        )}
      </div>

      <div className="flex items-end justify-end m-3">
        {show && (
          <Link to="/Contact" style={{ cursor: "pointer" }}>
            <div className="md:absolute top-6 right-6 flex items-center gap-2">
              <button className="relative inline-flex h-10 w-40 items-center rounded-full text-white bg-purple-600 pl-3 cursor-pointer">createdBy: zecoryx</button>
            </div>
          </Link>
        )}
      </div>

      <div className="content-container container mx-auto max-w-4xl px-4 py-12 flex justify-center items-center">
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;