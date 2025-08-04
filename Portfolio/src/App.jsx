import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function AppContent() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen bg-cover bg-center transition-all duration-500 ${
        darkMode ? 'dark-theme-bg' : 'light-theme-bg'
      }`}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
