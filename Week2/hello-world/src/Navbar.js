import React from 'react';

function Navbar({ toggleDarkMode }) {
  return (
<nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
  <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center w-full">
    My React App
  </h1>
  <button
    onClick={toggleDarkMode}
    className="absolute right-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
  >
    Toggle Theme
  </button>
</nav>
  );
}

export default Navbar;
