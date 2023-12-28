"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {MdDarkMode, MdDeveloperMode, MdLightMode} from "react-icons/md";
import { motion } from "framer-motion";
import {CiDark} from "react-icons/ci";

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="">
      {/* The current theme is: {theme} */}
      <motion.button
        id="theme-btn"
        aria-label="Toggle Dark Mode"
        className="flex justify-center items-center"
        whileTap={{
          scale: 0.7,
          rotate: 360,
          transition: { duration: 0.2 },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <MdDarkMode className="text-3xl text-white" />
        ) : (
          <MdLightMode  className="text-3xl text-black" />
        )}
      </motion.button>
    </div>
  );
};
export default Switcher;
