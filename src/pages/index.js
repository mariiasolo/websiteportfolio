import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import aigeneratedpic from "../../public/images/profile/aigeneratedpic.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import {LinkArrow} from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"


export default function Home() {
  return (
    <>
      <Head>
        <title>MS website</title>
        <meta name="description" content="Generated by create next app" />
        
    </Head>
    

      <main className='flex items-center text-dark w-full min-h-screen
      dark:text-light '>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>

          <div className= "flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={aigeneratedpic} alt="MariiaSolo" className='w-auto h-auto 
              lg:hidden md:inline-block md:w-full'
              priority
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center
            lg:w-full lg:text-center'>
              <AnimatedText  text="Turning Vision Into Reality With Design and Code"
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl
                md:!text-5xl sm:!text-3xl'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              With a set of digital content creation tools and front-end development skills, 
              I am passionate to turn ideas into innovative digital products. 
              Explore my latest projects, showcasing my experience in digital design and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/cvSolo.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base'
                download={true}
                >CV <LinkArrow className={'w-6 h-5 ml-1'}/>
                
                </Link>
                
                <Link href="mailto:mariia_solo@hotmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline
                dark:text-light md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>

        </Layout>
        <HireMe />
        <div className='absolute right-8 -bottom-12 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="MariiaSolo" className='w-full h-auto'/>
        </div>
        
      </main>
    </>
  )
}
