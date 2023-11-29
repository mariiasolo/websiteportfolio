import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '../../public/images/projects/arcada.jpg';
import project2 from '../../public/images/projects/ytkCase.jpg';
import project3 from '../../public/images/projects/personalTrainer.jpg';
import project4 from '../../public/images/projects/indiana.jpg';
import project5 from '../../public/images/projects/ux.jpg';
import {motion} from 'framer-motion';


const FramerImage = motion (Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
        dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light 
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
        ' />
            <Link  href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                            sizes='(max-width:768) 100vw,
                            (max-width: 1200px) 50vw,
                            50vw'
                />
            </Link>

           

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2 '>
                    
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm '>{title}</h2>
                
                </Link>

                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'> {" "}
                <GithubIcon /> {" "} 
                </Link>
                <Link href={link} target='_blank'
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                dark:bg-light dark:text-dark
                sm:px-4 sm:text-base'
                > Visit Project </Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative
        dark:bg-dark dark:border-light xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
                        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            ' />
            <Link  href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4 '>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base '>{type}</span>
                <Link 
                    href={link} 
                    target='_blank' 
                    className='hover:underline underline-offset-2  '>
                    
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank'
                className='text-lg font-semibold underline md:text-base' 
                > Visit 
                </Link>

                <Link href={github} target='_blank' className='w-8 md:w-6'>
                {" "}
                <GithubIcon /> {" "}
                </Link>
            
                </div>
            </div>
        </article>
    )
}


const projects = () => {
  return (
    <>
        <Head>
            <title> Mariia Solo | Projects </title>
            <meta name='description' content='any description' />
        </Head>

        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="The more you practice, the better you get!" 
                    className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
                '

                />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 

                            title="Digital Content Creation Project"
                            img={project1}
                            summary="A company's online presence has been built with the graphic profile, document design, website development, 
                            audiovisual and videovisual material. The following tools have been used: WordPress, Adobe CC 
                            (Photoshop, Illustrator, inDesign, Premiere Pro). The client (Arcada AMK) owns the copyright on the web code 
                            and other media production materials (audio, flyers, video ads). Some website mockups and other digital deliveries
                            are available at the presentation material."
                            link="https://ux-ui-projects.my.canva.site/destinationxplor"
                            
                            github="https://ux-ui-projects.my.canva.site/destinationxplor"
                            type="Featured Project"

                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 

                            title="YTK project"
                            img={project2}
                            summary="A website using Bootstrap framework. The project follows the agenda YTK company has. 
                            Make user sign-up including the authentication process easier and quicker, 
                            and thus attract more users to join YTK services."
                            link="https://mariiasolo.github.io/creativecorner"
                            github="https://github.com/mariiasolo/creativecorner"
                            type="Featured Project"

                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 

                            title="Personal Trainer Application"
                            img={project3}
                            summary="The app is done with React, React Router, Ag grid Component as a part of the Frontend course at Haaga-Helia AMK. 
                                It shows  a personal trainer application that allows to register new customers, training time slots, calendars 
                                and statistics."
                            link="https://mariiasolo.github.io/personaltrainerapp/"
                            github="https://github.com/mariiasolo/personaltrainerapp"
                            type="Featured Project"

                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 

                        title="UX & UI projects"
                        img={project5}
                        summary="list of projects"
                        link="https://ux-ui-projects.my.canva.site/ui-prototypes"
                        github="https://ux-ui-projects.my.canva.site/ui-prototypes"
                        type="Featured Project"

                    />
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject 

                        title="Indiana University (USA) & Haaga-Helia AMK (Finland) Collaboration Project"
                        img={project4}
                        summary="The idea was to create a website about given topic using pure HTML, CSS and JS.
                        The website should be fully responsive."
                        link="https://hh-iupui.github.io/group5/index.html"
                        github="https://github.com/HH-IUPUI/group5"
                        type="Featured Project"

                    />
                    </div>
                    

                </div>
            
            </Layout>
        </main>
    </>
  )
}

export default projects