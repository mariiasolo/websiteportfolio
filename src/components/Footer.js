import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light
    sm:text-base
    '>
      <ScrollToTop 
        smooth
        color='#B63E96'
        top = "300"
        
        viewBox="-1 2 25 25"
        svgPath = "M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"
      /> 
      
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
            by&nbsp; Mariia Solo
            </div>
            {/* <Link href="https://www.linkedin.com/in/mariia-solo-260190ms/" target={"_blank"}
            className='underline underline-offset-2'>Say hello</Link> */}
            
        </Layout>
    </footer>
  )
}

export default Footer