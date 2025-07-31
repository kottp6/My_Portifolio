import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaSass, FaPhp, FaMobileAlt } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiJqueryLogo, DiMysql } from 'react-icons/di';
import { SiTypescript, SiFirebase } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { motion } from 'framer-motion';

const techStack = [
  { icon: <FaHtml5 className='text-7xl text-orange-500' />, name: 'HTML5', border: 'border-orange-800' },
  { icon: <FaCss3Alt className='text-7xl text-blue-400' />, name: 'CSS3', border: 'border-blue-800' },
  { icon: <FaJs className='text-7xl text-yellow-400' />, name: 'JavaScript', border: 'border-yellow-800' },
  { icon: <SiTypescript className='text-7xl text-sky-400' />, name: 'TypeScript', border: 'border-sky-800' },
  { icon: <FaBootstrap className='text-7xl text-purple-400' />, name: 'Bootstrap', border: 'border-purple-800' },
  { icon: <RiTailwindCssFill className='text-7xl text-cyan-400' />, name: 'Tailwind', border: 'border-neutral-800' },
  { icon: <FaSass className='text-7xl text-pink-400' />, name: 'Sass', border: 'border-pink-800' },
  { icon: <DiJqueryLogo className='text-7xl text-blue-900' />, name: 'jQuery', border: 'border-blue-800' },
  { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, name: 'React', border: 'border-neutral-800' },
  { icon: <TbBrandNextjs className='text-7xl text-cyan-400' />, name: 'Next.js', border: 'border-neutral-800' },
  { icon: <FaPhp className='text-7xl text-indigo-400' />, name: 'PHP', border: 'border-indigo-800' },
  { icon: <TbSql className='text-7xl text-gray-400' />, name: 'SQL', border: 'border-gray-800' },
  { icon: <DiMysql className='text-7xl text-amber-400' />, name: 'MySQL', border: 'border-amber-800' },
  { icon: <SiFirebase className='text-7xl text-yellow-500' />, name: 'Firebase', border: 'border-yellow-700' },
  { icon: <FaMobileAlt className='text-7xl text-cyan-400' />, name: 'React Native', border: 'border-cyan-700' },
];

export default function Technologies() {
  const iconVarients = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  });

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVarients(2 + (index % 4))}
            initial='initial'
            animate='animate'
            className={`group relative flex h-28 w-28 items-center justify-center rounded-2xl border-4 ${tech.border} p-4 text-center`}
          >
        <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0'>
            {tech.icon}
            </div>
            <div className='absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100'>
            <span className='text-sm font-semibold text-white'>{tech.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
