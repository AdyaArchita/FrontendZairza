import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

export default function Home() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen bg-cover bg-center pt-24 pb-12 px-6 sm:px-12 flex items-center ${
        darkMode ? 'text-white' : 'text-black'
      }`}
      style={{ backgroundImage: "url('/assets/images/home-bg.jpg')" }}
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 w-full md:max-w-2xl items-center md:items-start text-center md:text-left"
        >
          <div className="pb-2 sm:pb-4">
            <p className={`text-base sm:text-lg font-semibold font-lato ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Hi! I am
            </p>
            <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-2 font-k2d ${darkMode ? 'text-gray-100' : 'text-black'}`}>
              Adya Archita Pattnaik
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-k2d bg-gradient-to-r from-orange-800 via-orange-500 to-orange-600 bg-clip-text text-transparent leading-tight break-words w-full pb-1">
              Full-Stack Developer
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-lg text-white font-bold font-lato hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </button>

            <button
              className={`px-6 py-3 rounded-lg font-bold font-lato border-2 flex items-center gap-2 ${
                darkMode ? 'text-gray-300 border-gray-400' : 'text-gray-700 border-gray-500'
              } hover:scale-105 transition-transform duration-300`}
            >
              <FaDownload className="text-sm" />
              Download CV
            </button>
          </div>

          {/* Stats */}
          <div className={`flex flex-col sm:flex-row gap-6 p-4 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}>
            <div className="flex justify-between sm:flex-col sm:pr-6 sm:border-r border-gray-400 w-full sm:w-auto">
              <p className="text-orange-500 text-xl sm:text-2xl font-extrabold font-k2d">10+</p>
              <p className={`font-bold font-lato ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Projects Done</p>
            </div>
            <div className="flex justify-between sm:flex-col w-full sm:w-auto">
              <p className="text-orange-500 text-xl sm:text-2xl font-extrabold font-k2d">5+</p>
              <p className={`font-bold font-lato ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Skills Acquired</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
