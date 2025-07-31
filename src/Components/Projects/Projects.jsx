import { useState } from 'react';
import { PROJECTS } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
const ITEMS_PER_PAGE = 3;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPage = (page) => {
    if (page !== currentPage) setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = PROJECTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="border-b border-neutral-900 pb-16 px-4 md:px-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold my-16"
      >
        Projects
      </motion.h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage} // triggers re-animation on page change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project, index) => (
  <motion.div
    key={index}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-neutral-900 p-5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-60 object-cover rounded-md mb-4"
    />
    <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
    <p className="text-sm text-neutral-400 mb-4">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech, i) => (
        <span
          key={i}
          className="bg-purple-800 text-white px-2 py-1 text-xs rounded"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Live Demo Button */}
    {project.liveDemo && (
  <a
    href={project.liveDemo}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-auto flex items-center justify-center px-4 py-2 bg-white text-purple-700 text-sm rounded transition"
  >
    Live Demo
  </a>
)}

  </motion.div>
))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-neutral-800 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? 'bg-purple-700 text-white'
                : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-neutral-800 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
