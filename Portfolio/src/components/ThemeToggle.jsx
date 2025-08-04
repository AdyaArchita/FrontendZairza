import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="fixed top-4 right-4 z-50">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="sr-only"
        />
        <div className="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full p-1 flex items-center">
          <div
            className={`w-4 h-4 rounded-full bg-white shadow-md transform duration-300 ${
              darkMode ? 'translate-x-5' : ''
            }`}
          />
        </div>
        <span className="text-sm text-black dark:text-white">
          {darkMode ? 'Dark' : 'Light'}
        </span>
      </label>
    </div>
  );
}
