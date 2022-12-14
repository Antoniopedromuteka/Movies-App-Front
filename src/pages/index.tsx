import Head from 'next/head'
import { Header } from '../components/header'
import {AiFillPlayCircle} from "react-icons/ai";
import { Card, MockProps } from '../components/Card';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { Mock } from './mock';
import { Fade, Slide} from "react-awesome-reveal";


export default function Home() {
  return (
    <>
    <head>
      <title>Filmelane | Home </title>
    </head>
    <div className='w-full h-screen bg-[url("../assets/images/movie-bg.png")] bg-no-repeat bg-cover bg-center '>
        <div className='w-screen h-screen bg-blue-bg opacity-[0.7]'>
        <Fade>
        <Header/>
        </Fade>
        <div className='w-full flex flex-col gap-8  md:gap-6 text-white md:pt-24 pt-20 md:px-32 px-12'>
            <div className='flex flex-1 justify-start max-w-[600px] flex-wrap'>
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
    </div>
    <main>
      <section className='w-full h-auto bg-gray-bg pt-10 md:px-20 px-4'>
        <div className='flex items-center md:flex-row flex-col '>
          <div>
            <p className='text-center md:text-left text-yellow-400 relative top-[-6px]'>Online Streaming movies</p>
            <h3 className='text-4xl text-white'>Current Movies</h3>
          </div>
          <div className='flex-1 flex md:justify-end items-center ml-4 md:flex-row flex-wrap md:flex-nowrap gap-6 pt-6 md:pt-0'>
            <span className='px-6 flex justify-center py-3 text-white rounded-full border-[1px] border-yellow-400 w-full md:w-[10vw]  bg-black'>Movies</span>
            <span className='px-6 flex justify-center py-3 text-white rounded-full border-[1px] border-yellow-400 w-full md:w-[10vw]  bg-black'>Movies</span>
            <span className='px-6 flex justify-center py-3 text-white rounded-full border-[1px] border-yellow-400 w-full md:w-[10vw]  bg-black'>Movies</span>
          </div>
          </div>
          <Slide direction='left'>
          <section className='w-full py-14 gap-10  flex flex-col flex-1 md:flex-row md:justify-between md:flex-wrap items-center h-auto'>
            {Mock.map((data) =>(
              <Card {...data}/>
            ))}
          </section>
          </Slide>
      </section>
      <Slide direction='right'>
      <section className='w-full flex-1 h-auto md:px-40 px-4 py-14 gap-20  bg-blue-bg flex flex-col flex-wrap-reverse md:flex-nowrap md:flex-row justify-between'>
        <div className='bg-[url("../assets/images/service-banner.jpg")] bg-no-repeat bg-cover bg-center md:w-[50vw] w-full mt-12 h-[400px] py-10 md:py-0 order-2 md:order-1'>
        </div>
        <div className='w-full md:order-2 order-1'>
          <div className='flex flex-col '>
            <div className='flex flex-col md:items-start items-center flex-1'>
              <h2 className='text-white text-4xl pb-6'>About</h2>
              <div className='flex gap-4 items-center pb-6'>
                <span className='px-12 h-2 rounded-sm bg-yellow-400'></span>
                <span className='text-white text-lg'>Our Services</span>
              </div>
              <h3 className='text-5xl pb-6 text-white text-center md:text-left'>
                Watch Your Movies, Series Or Animes Onine!
              </h3>
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start gap-6 py-4'>
            <p className='md:w-[500px] w-96 px-8 md:text-justify text-slate-50 text-center '>
            FilmeLane is a platsform that was created in 2022 wihere you can whatch movies,
             series, Anime Onine. Come to watch the bests movies in the world.
             For more information sign in application.
            </p>
            <button className='w-[200px] flex items-center gap-2 bg-yellow-400 p-2 px-4 rounded-3xl text-xl text-black'>
              <AiFillPlayCircle className='text-4xl'/> Watch now
            </button>
          </div>
        </div>
      </section>
      </Slide>
      <Fade direction='right' duration={900}>
      <section className='w-full h-auto bg-gray-bg flex flex-col md:px-20 px-6 py-16'>
          <div className='flex flex-col items-center gap-8'>
            <div className='flex flex-1 flex-col items-center gap-4'>
            <p className='text-center md:text-left text-yellow-400 relative top-[-6px]'>Online Streaming movies</p>
            <h3 className='text-4xl text-white'>Current Movies</h3>
            </div>
          <div className='flex-1 flex md:justify-end items-center ml-4  md:flex-row flex-wrap md:flex-nowrap gap-6 pt-6 md:pt-0'>
            <span className='px-6 flex justify-center py-3 text-white rounded-full border-[1px] border-yellow-400 w-full md:w-[10vw]  bg-black'>Movies</span>
            <span className='px-6 flex justify-center py-3 text-white rounded-full border-[1px] border-yellow-400 w-full md:w-[10vw]  bg-black'>Movies</span>
            <span className='px-6 flex justify-center py-3 text-white rounded-full border-[1px] border-yellow-400 w-full md:w-[10vw]  bg-black'>Movies</span>
          </div>
          <section className='w-full py-14 gap-10 flex flex-col flex-1 md:flex-row md:justify-between md:flex-wrap items-center h-auto'>
            {Mock.map((mockData) =>(
                <Card  {...mockData}/>
            ))} 
          </section>
          <section className='w-full py-14 gap-10 flex flex-col flex-1 md:flex-row md:justify-between md:flex-wrap items-center h-auto'>
            {Mock.map((mockData) =>(
                <Card  {...mockData}/>
            ))} 
          </section>
        </div>
      </section>
      </Fade>
      <Fade direction='left' duration={900}>
      <Newsletter/>
      </Fade>
    </main>
    <Fade duration={900} direction="left">
    <Footer/>
    </Fade>
    </>
   
  )
}
