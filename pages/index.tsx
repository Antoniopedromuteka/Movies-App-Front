import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/header'


export default function Home() {
  return (
    <>
    <div className='w-full h-screen bg-black'>
        <Header/>
        <div className='w-full flex flex-col gap-4 md:gap-6 text-white md:pt-16 pt-10 md:px-32 px-12'>
            <div className='flex flex-1 justify-start max-w-[400px] flex-wrap'>
             <p className='md:text-6xl text-5xl'>
               Come To See <span>Unlimited</span>  Movie, Series, Tv Show & More 
             </p>
            </div>
            <div>
            <button className='bg-yellow-400 p-3 px-8 rounded-3xl text-xl text-black'>
              Watch now
            </button>
            </div>
        </div>
    </div>

    </>
   
  )
}
