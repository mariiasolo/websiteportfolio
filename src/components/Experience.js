import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto
            flex flex-col items-center justify-between md:w-[80%]'>
                <LiIcon reference={ref}/>
                <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type: "spring"}}

                >
                    <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                        {position}&nbsp; 
                        <a href={companyLink} target='_blank'
                        className='text-primary capitalize dark:text-primaryDark'
                        >
                        @{company}
                        </a>
                    </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75
                xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>{work} </p>

                </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl 
        xs:text-4xl  md:mb-16'>
            Experience 
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            ' />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                    position="Project Work" 
                    company="Larken Oy"
                    companyLink="http://www.larken.fi/"
                    time="2024" 
                    address="Vantaa"
                    work="Project work to finalise my studies at Haaga-Helia UAS  
                    that involves creating a website using the WordPress website builder. 
                    The Elementor Pro plugin was used to customize the site, 
                    along with CSS and JavaScript coding to add specific features and functionalities, 
                    thus avoiding the need to pay for extra plugins "
                
                />
                
                <Details 
                    position="UX/UI Designer" 
                    company="Open Potentials e.u ClearKarma"
                    companyLink="http://www.clearkarma.com/"
                    time="2023-Present" 
                    address="Vienna, Austria"
                    work="Internship that is aimed to improve my UX/UI design skills. 
                    Among responsibilities are creating wireframes and prototypes based on the given business case,
                    working on data analysis, creating use case diagrams, defining future system user roles, 
                        helping with frontend development of the future app."
                
                />
                
                <Details 
                    position="Sales Assistant" 
                    company="Sale VBO"
                    companyLink="https://vbo.fi/"
                    time="2021-Present" 
                    address="Askola"
                    work="Part-time job to support my studies at Haaga-Heliaa AMK. 
                    Among responsibilities are delivery handling, restocking and merchandising, 
                    operating cash register, balancing cash registers, checking store's inventory, 
                    handling customers' requests and complaints. "
                
                />

                <Details 
                    position="Sales Assistant" 
                    company="Extraajat Oy"
                    companyLink="https://www.extraajat.fi/"
                    time="2020-2021" 
                    address="Helsinki"
                    work="Part-time job to support my studies at Haaga-Heliaa AMK. 
                    Being a part of rent-an-employee company, there was a possibility to chose the next shift and 
                    place of work in any grocery store both in S-group and K-group work facilities. 
                    Have done shifts at the cash register, stacking the shelves, being responsible for Posti services."
                
                />

                <Details 
                    position="Package Officer" 
                    company="Porvoon Lakritsi Oy"
                    companyLink="https://www.porvoonlakritsi.fi/"
                    time="2019-2020" 
                    address="Loviisa"
                    work="Worked as package officer at the candy factory, 
                    making sure that the automotive process goes smoothly without having defective goods stacked into candy packages."
                
                />

                <Details 
                    position="Cafeteria worker, sales assistant" 
                    company="Laplandia Market"
                    companyLink="https://fi.laplandia.fi/"
                    time="2013-2019" 
                    address="Imatra, Lappeenranta"
                    work="Worked in a cafeteria department as well as store department handling cash register, 
                        stacking the shelves and display areas. "
                
                />

                <Details 
                    position="Bartender" company="Imatran Golf"
                    companyLink="https://imatrangolf.fi/"
                    time="Summer 2012" address="Imatra"
                    work="Worked as a bartender and waitress in a Golf Club Restaurant. "
                
                />
            </ul>
        </div>
   
    </div>
  )
}

export default Experience
