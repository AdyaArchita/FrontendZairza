// components/ProjectCard.jsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ProjectCard({ title, category, image }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-80 rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={`p-4 ${darkMode ? 'bg-black bg-opacity-50 text-white' : 'bg-gray-100 text-black'}`}>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{category}</p>
      </div>
    </div>
  );
}
