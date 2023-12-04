import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import profiilikuva from '../../public/images/profile/profiilikuva.jpeg';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';


const about = () => {
  return (
    <>
        <Head>
            <title> Mariia Solo | About Page</title>
            <meta name='description' content='any description' />
        </Head>

        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-14'>
                <AnimatedText text="Take your passion, and make it happen!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl
                sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 ' >
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 lg:col-span-4'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                        <p className='font-medium text-justify'>
                        Hello, I am Mariia Solo from Porvoo, Finland. A web developer and UI/UX designer with a passion for creating purposeful, functional, 
                        and user-centered digital products. I am always seeking innovative ways to solve problems and enhance users&apos; experiences through new designs 
                        and functionalities.
                        </p>
                        <p className='my-4 font-medium text-justify'>
                        Currently, I am a final-year student pursuing a bachelor&apos;s degree in Business Information Technology at Haaga-Helia University of Applied Sciences. 
                        In 2016, I graduated from LAB University of Applied Sciences with a bachelor&apos;s degree in Hotel, Restaurant, and Tourism Management. 
                        Additionally, in 2023, I completed a study module at Arcada University of Applied Sciences in Digital Content Creation. 
                        </p>
                        
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1'>

                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark dark:bg-light md:col-span-4' />
                        <Image src={profiilikuva} alt="Mariia Solo" className='w-full h-auto rounded-2xl ' 
                            priority
                            
                        />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between md:order-3 md:col-span-8  lg:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Why Me</h2>
                        <p className='font-medium text-justify'>
                        I believe having two bachelor's degrees is a valuable asset as it broadens my vision for problem-solving. 
                        I have significant experience in customer service, which provides a different perspective on delivering the best solutions for users. 
                        </p>

                        <p className='my-4 font-medium text-justify'>
                        Currently, I am eager to seize an opportunity to demonstrate my commitment to quickly learning new things and bringing user-centered experiences to life in the tech world. 
                        </p>
                    </div>

                </div>

            <Skills />
            <Education />
            <Experience />
            
            </Layout>
        </main>
    </>
  )
}

export default about
