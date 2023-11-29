import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';


const Details = ({type, time, place, info}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} 
            className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto
            flex flex-col items-center justify-between md:w-[80%]'
        >
                <LiIcon reference={ref}/>
                <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type: "spring"}}

                >
                    <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                        {type}
                    </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>{info} </p>

                </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education 
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            ' />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                    type="Bachelor Of Business Information Technology" 
                    time="2021-Present"
                    place="Haaga-Helia University of Applied Sciences"
                    info="Studies included Programming Courses (JS, JsReact, Java, SQL), 
                        Digital Courses (HTML, CSS, Figma), and Business IT courses ( BI tools, Agile)" 
                />

                <Details 
                    type="Digital Content Creation study module" 
                    time="Jan 2023- Jul 2023"
                    place="Arcada University of Applied Sciences"
                    info="Creating and developing a digital content for an imaginary company. 
                        Working on creating a user persona, website with WordPress Elementor Pro, creating 
                        promotional material for social media using Adobe Creative Cloud including Photoshop, Illustrator, InDesign, Premiere Pro." 
                />

                <Details 
                    type="Bachelor Of Hotel, Restaurant and Tourism Management" 
                    time="2012-2016"
                    place="LAB University of Applied Sciences"
                    info="Studies majored at managing restaurant and tourism operations, 
                        sales and marketing, revenue management, and hotel development." 
                />

          
            </ul>
        </div>
   
    </div>
  )
}

export default Education