import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    category: 'Web Layout',
    image: '/p1.png',
    description: 'A responsive web layout project of Spotify using HTML, CSS, and Tailwind.',
  },
  {
    title: 'Project Two',
    category: 'Landing Page',
    image: '/p2.png',
    description: 'A responsive portolio built using React+Vite.',
  },
  {
    title: 'Project Three',
    category: 'Web Game',
    image: '/p3.png',
    description: 'A simple guess the number game built using Javascript.',
  },
];

export default function Portfolio() {
  const { darkMode } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      className={`min-h-screen bg-cover bg-center px-4 sm:px-6 md:px-12 lg:px-24 py-16 ${
        darkMode ? 'text-white' : 'text-black'
      }`}
      style={{ backgroundImage: "url('/assets/images/portfolio-bg.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 border-b-4 inline-block border-orange-500 pb-2 text-center sm:text-left">
          Portfolio
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              onClick={() => openModal(project)}
              className="cursor-pointer w-full max-w-sm px-2 sm:px-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <ProjectCard {...project} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <ProjectModal
        show={!!selectedProject}
        onClose={closeModal}
        title={selectedProject?.title}
        image={selectedProject?.image}
        description={selectedProject?.description}
      />
    </section>
  );
}
