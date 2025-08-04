import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ProjectModal({ show, onClose, title, image, description }) {
  const { darkMode } = useContext(ThemeContext);
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className={`p-6 rounded-lg max-w-lg w-full relative ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <button onClick={onClose}  className={`absolute top-4 right-4 text-2xl hover:scale-110 transition ${  darkMode ? 'text-white' : 'text-black'  }`}
        >  ✖ </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <img src={image} alt={title} className="w-full rounded" />
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
}
