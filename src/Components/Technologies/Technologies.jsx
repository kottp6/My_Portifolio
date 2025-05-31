import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { animate, motion } from "framer-motion"

export default function Technologies() {
    const iconVarients = (duration)=>({
        initial : {y : -10},
        animate : {
            y :[10,-10],
            transition : {
                duration : duration,
                ease: "linear",
                repeat : Infinity,
                repeatType : "reverse"
            }
        }
    })
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
         whileInView={{opacity:1, y:0}}
         initial ={{opacity : 0, y:-100}}
         transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div
         whileInView={{opacity:1, x:0}}
         initial ={{opacity : 0, x:-100}}
         transition={{duration:1.5}}
         className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVarients(2.5)}
            initial ="initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-orange-800 p-4">
                <FaHtml5 className='text-7xl text-orange-500'></FaHtml5>
            </motion.div>

            <motion.div
            variants={iconVarients(3)}
            initial ="initial"
            animate = "animate"  
            className="rounded-2xl border-4 border-blue-800 p-4">
                <FaCss3Alt className='text-7xl text-blue-400'></FaCss3Alt>
            </motion.div>

            <motion.div
            variants={iconVarients(2)}
            initial ="initial"
            animate = "animate"  
            className="rounded-2xl border-4 border-yellow-800 p-4">
                <FaJs className='text-7xl text-yellow-400'></FaJs>
            </motion.div>

            <motion.div
            variants={iconVarients(3.5)}
            initial ="initial"
            animate = "animate"  
            className="rounded-2xl border-4 border-sky-800 p-4">
                <SiTypescript className='text-7xl text-sky-400'></SiTypescript>
            </motion.div>
            
            <motion.div
            variants={iconVarients(4)}
            initial ="initial"
            animate = "animate" 
             className="rounded-2xl border-4 border-purple-800 p-4">
                <FaBootstrap className='text-7xl text-purple-400'></FaBootstrap>
            </motion.div>

            <motion.div 
            variants={iconVarients(4.5)}
            initial ="initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-cyan-400'></RiTailwindCssFill>
            </motion.div>

            <motion.div
            variants={iconVarients(2.5)}
            initial ="initial"
            animate = "animate"  
            className="rounded-2xl border-4 border-pink-800 p-4">
                <FaSass className='text-7xl text-pink-400'></FaSass>
            </motion.div>

            <motion.div 
            variants={iconVarients(4.5)}
            initial ="initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-blue-800 p-4">
                <DiJqueryLogo className='text-7xl text-blue-900'></DiJqueryLogo>
            </motion.div>

            <motion.div 
            variants={iconVarients(5)}
            initial ="initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'></RiReactjsLine>
            </motion.div>

            <motion.div 
            variants={iconVarients(3)}
            initial ="initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl text-cyan-400'></TbBrandNextjs>
            </motion.div>

            <motion.div
            variants={iconVarients(2)}
            initial ="initial"
            animate = "animate"  
            className="rounded-2xl border-4 border-indigo-800 p-4">
                <FaPhp className='text-7xl text-indigo-400'></FaPhp>
            </motion.div>

            <motion.div
            variants={iconVarients(4)}
            initial ="initial"
            animate = "animate" 
             className="rounded-2xl border-4 border-gray-800 p-4">
                <TbSql className='text-7xl text-gray-400'></TbSql>
            </motion.div>

            <motion.div
            variants={iconVarients(3)}
            initial ="initial"
            animate = "animate" 
             className="rounded-2xl border-4 border-amber-800 p-4">
                <DiMysql className='text-7xl text-amber-400'></DiMysql>
            </motion.div>
        </motion.div>
    </div>
  )
}
