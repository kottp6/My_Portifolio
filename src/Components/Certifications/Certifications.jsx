import React from 'react'
import { CERTIFICATIONS } from '../../constants'
import { CiShare1 } from "react-icons/ci";
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
        <div className='border-b border-neutral-900 pb-4'>
          <motion.h2
          whileInView={{opacity:1, y:0}}
          initial ={{opacity : 0, y:-100}}
          transition={{duration:0.5}} 
          className="my-20 text-center text-4xl">Certifications</motion.h2>
          <div>
            {CERTIFICATIONS.map((cert, index)=>(
              <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                 whileInView={{opacity:1, x:0}}
                 initial ={{opacity : 0, x:-100}}
                 transition={{duration:1}}
                 className="w-full lg:w-1/4">
                  <img className='mb-6 rounded-lg' src={cert.image} alt={cert.title} width={150} height={150}/>
                </motion.div>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial ={{opacity : 0, x:100}}
                transition={{duration:1}} 
                className="w-full max-w-xl lg:w-3/4 flex gap-3">
                    <h3 className='mb-2 mt-16 font-semibold '>{cert.title}</h3>
                    <a href={cert.link} target='_blank' className='mt-16 text-2xl'><CiShare1></CiShare1></a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
  )
}
