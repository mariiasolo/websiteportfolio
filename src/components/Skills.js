import React from 'react';
import {motion} from 'framer-motion';

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
            xs:text-dark xs:dark:text-light xs:font-bold
            '
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x: x, y: y, transition:{duration: 1.5} }}
            viewport={{once:true}}
            >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center 
        md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        '>

            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
            lg:p-6 md:p-4 xs:text-xs xs:p-2'
            whileHover={{scale:1.05}}
            >
                Web
            </motion.div>

            <Skill name="Bootstrap" x="-23vw" y="-6vw" />
            <Skill name="Canva" x="35vw" y="0vw" />
            <Skill name="HTML,CSS" x="-5vw" y="-9vw" />
            <Skill name="Javascript" x="17vw" y="3vw" />
            <Skill name="React Native" x="20vw" y="-6vw" />
            <Skill name="ReactJS" x="1vw" y="11vw" />
            <Skill name="WordPress" x="-20vw" y="-19vw" />
            <Skill name="Tailwind CSS" x="7vw" y="-15vw" />
            <Skill name="Figma" x="27vw" y="-17vw" />
            <Skill name="SAP, Tableau, Power BI" x="36vw" y="11vw" />
            <Skill name="InDesign" x="1vw" y="-20vw" />
            <Skill name="Adobe Photoshop" x="-25vw" y="18vw" />
            <Skill name="Adobe Illustrator" x="18vw" y="21vw" />
            <Skill name="Adobe Primiere Pro" x="-32vw" y="2vw" />
            <Skill name="SQL" x="-15vw" y="9vw" />
        </div>
    </>
  )
}

export default Skills