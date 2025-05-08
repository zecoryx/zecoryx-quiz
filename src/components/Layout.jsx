"use client";

import { Link, Outlet } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import AnimatedBackground from "./AnimatedBackground";

function Layout() {
  return (
    <div className="min-h-screen quiz-gradient dark:bg-gray-900 dark:text-white transition-colors duration-200">
      <AnimatedBackground />

      <Link to="/" style={{cursor:"pointer"}}>
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <button className="relative inline-flex h-10 w-40 items-center rounded-full bg-purple-600 pl-3 cursor-pointer">createdBy: zecoryx</button>
        </div>
      </Link>

      <div className="content-container container mx-auto max-w-4xl px-4 py-12 flex justify-center items-center min-h-screen">
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
