import React from 'react'
import { EDUCATION } from '../../constants'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
          <motion.h2 
          whileInView={{opacity:1, y:0}}
          initial ={{opacity : 0, y:-100}}
          transition={{duration:1.5}}
          className="my-20 text-center text-4xl">Education</motion.h2>
          <div>
              <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/4">
                  <img className='mb-6 rounded-lg' src={EDUCATION.image} alt={EDUCATION.Name} width={250} height={250}/>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className="w-full mt-10 max-w-xl lg:w-3/4">
                    <h3 className='mb-2 font-semibold'>{EDUCATION.Name}</h3>
                    <p className='mb-4 text-neutral-400'>{EDUCATION.GPA}</p>
                    <p className='mb-4 text-neutral-400'>{EDUCATION.GradPro}</p>
                </motion.div>
              </div>
           
          </div>
        </div>
  )
}
