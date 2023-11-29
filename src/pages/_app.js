import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import {Poppins} from "next/font/google";
import Head from 'next/head';
import Footer from '@/components/Footer';

//https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins", 
  weight: ["400"],
  
})


export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  <main className={`${poppins.variable} font-poppins bg-light dark:bg-dark w-full min-h-screen`}>
    <NavBar />
    <Component {...pageProps}/> 
    <Footer />
    
  </main>
  
    </>
)
}

