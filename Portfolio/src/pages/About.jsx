// pages/About.jsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen bg-cover bg-center p-12 ${
        darkMode ? 'text-white' : 'text-black'
      }`}
      style={{ backgroundImage: "url('/assets/images/about-bg.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 border-b-4 inline-block border-orange-500 pb-2">
          About Me
        </h2>
        <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
          A software engineer, the modern-day architect of digital realms, navigates the ethereal
          landscapes of code, sculpting intangible structures that shape our technological world.
        </p>
        <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          As a full stack developer, I’m skilled in both frontend and backend technologies, including React,
          Tailwind CSS, Node.js, Express, and MongoDB. My experience allows me to bridge design and development,
          delivering seamless web applications from concept to deployment with clean architecture and efficient code.
        </p>
        <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          With basic idea in UI/UX principles and a passion for building clean, efficient
          interfaces, I bring creative vision and technical expertise to every project I touch. I strive
          to create intuitive and meaningful user experiences that balance aesthetics and functionality.
        </p>
      </motion.div>
    </section>
  );
}
