import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = (
    <>
      <Link to="/" className="block py-2 px-4" onClick={() => setMenuOpen(false)}>Home</Link>
      <Link to="/about" className="block py-2 px-4" onClick={() => setMenuOpen(false)}>About Me</Link>
      <Link to="/portfolio" className="block py-2 px-4" onClick={() => setMenuOpen(false)}>Portfolio</Link>
      <Link to="/contact" className="block py-2 px-4" onClick={() => setMenuOpen(false)}>Contact</Link>
    </>
  );

  return (
    <nav className={`w-full z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>

        <div className="hidden md:flex items-center gap-6 ml-auto font-medium">
          <div className="flex gap-6">
            {navLinks}
          </div>
          <button
            onClick={toggleTheme}
            className="text-xl hover:scale-110 transition"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4 ml-auto z-50">
          <button
            onClick={toggleTheme}
            className="text-xl hover:scale-110 transition"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
          <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            exit={{ y: -300 }}
            transition={{ type: 'spring', stiffness: 80 }}
            className={`md:hidden fixed top-16 left-0 right-0 px-6 py-6 flex flex-col gap-2 ${
              darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
            } shadow-md rounded-b-lg z-40`}
          >
            {navLinks}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
