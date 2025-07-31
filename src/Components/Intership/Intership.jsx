import { motion } from 'framer-motion';
import { INTERNSHIP } from '../../constants'; // INTERNSHIP[0].image and INTERNSHIP[0].description assumed

export default function Internship() {
  const internship = INTERNSHIP[0];

  return (
    <div className="border-b border-neutral-900 pb-10 px-4 md:px-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        Internships
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-neutral-900 text-neutral-200 p-6 rounded-xl shadow-md">
        {/* IMAGE SECTION */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 w-full md:w-1/3"
        >
          <img
            src={internship.image}
            alt="Internship Visual"
            className="rounded-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-2/3"
        >
          <h3 className="text-xl font-semibold mb-2 text-purple-400">
            Frontend Developer & Cross Platform Mobile Development
          </h3>
          <p className="text-sm text-neutral-400 mb-4">
            (Feb 2025 – July 2025)
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            {internship.description
              .split('.')
              .filter((item) => item.trim() !== '')
              .map((item, index) => (
                <motion.li
                  key={index}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.trim()}.
                </motion.li>
              ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
