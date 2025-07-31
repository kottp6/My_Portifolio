import { CERTIFICATIONS } from '../../constants';
import { CiShare1 } from "react-icons/ci";
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <div className="border-b border-neutral-800 py-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-white/5 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 w-[300px] h-[400px] shadow-lg hover:shadow-purple-700/30 transition-shadow duration-300 flex flex-col items-center justify-between"
          >
            {/* Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-24 h-24 rounded-lg object-cover mb-4"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold text-white text-center px-2">
              {cert.title}
            </h3>

            {/* Share Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-purple-400 hover:text-purple-300 transition text-2xl"
              title="View Certificate"
            >
              <CiShare1 />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
