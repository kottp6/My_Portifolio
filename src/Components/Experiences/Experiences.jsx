import { EXPERIENCES } from '../../constants';
import { motion } from 'framer-motion';

export default function Experiences() {
  return (
    <div className="border-b border-neutral-900 pb-10 px-4 md:px-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Experiences
      </motion.h2>

      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mb-2"
            >
              <p className="text-sm text-neutral-400">{exp.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h5 className="mb-2 font-semibold">
                {exp.role} - <span className="text-sm text-purple-100">{exp.company}</span>
              </h5>
              <p className="mb-4 text-neutral-400">{exp.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap mb-4">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mb-2 rounded bg-neutral-800 px-2 py-1 text-sm text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Projects */}
              {exp.projects && (
                <div className="space-y-1">
                  <p className="font-medium text-neutral-300">Some Projects:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-neutral-400">
                    {exp.projects.map((project, i) => (
                      <li key={i}>
                        {project.name}
                        {project.links?.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-purple-400 underline"
                          >
                            [GitHub]
                          </a>
                        )}
                        {project.links?.video && (
                          <a
                            href={project.links.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-blue-400 underline"
                          >
                            [Video]
                          </a>
                        )}
                        {project.links?.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-green-400 underline"
                          >
                            [Live]
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
