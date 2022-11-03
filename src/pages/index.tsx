import Head from 'next/head'
 
import { Header } from '../components/header'
import {AiFillPlayCircle} from "react-icons/ai";


export default function Home() {
  return (
    <>
    <div className='w-full h-screen bg-banner bg-no-repeat bg-cover bg-center '>
        <Header/>
        <div className='w-full flex flex-col gap-8  md:gap-6 text-white md:pt-24 pt-20 md:px-32 px-12'>
            <div className='flex flex-1 justify-start max-w-[400px] flex-wrap'>
             <p className='md:text-6xl text-5xl'>
               Come To See <span className='text-yellow-400'>Unlimited</span>  Movie, Series, Tv Show & More 
             </p>
            </div>
            <div>
            <button className='flex items-center gap-2 bg-yellow-400 p-2 px-8 rounded-3xl text-xl text-black'>
              <AiFillPlayCircle className='text-4xl'/> Watch now
            </button>
            </div>
        </div>
    </div>

    </>
   
  )
}
