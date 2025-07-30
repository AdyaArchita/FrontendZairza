import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from './Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-100 transition duration-500">
      <Navbar toggleDarkMode={toggleDarkMode} />

      <main className="flex flex-col items-center justify-center text-center p-8 min-h-[80vh]">
        <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">
          Hello, World!
        </h1>
        <p className="text-lg mb-6 max-w-xl text-center" data-aos="fade-up">
          This is a beautiful React app with Tailwind CSS, Dark Mode, AOS animations, and a responsive navbar!
        </p>

        <ul
          className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-2xl shadow-2xl space-y-2 w-full max-w-md"
          data-aos="zoom-in"
        >
          <li>🔥 JSX with Tailwind styling</li>
          <li>🌙 Toggle Dark Mode</li>
          <li>🎉 AOS Scroll Animations</li>
          <li>📱 Responsive Design</li>
        </ul>
      </main>
    </div>
  );
}

export default App;

