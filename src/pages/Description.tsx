import Image from "next/image";
import { Header } from "../components/header";
import img from "../assets/images/movie-3.png";
import {BsFillShareFill} from "react-icons/bs"
import {AiFillPlayCircle} from "react-icons/ai"
import {AiFillClockCircle} from "react-icons/ai"
import {AiOutlinePlayCircle} from "react-icons/ai"

export default function Description(){
    return(
      <>
        <section className="w-full h-screen bg-no-repeat bg-cover bg-center bg-[url('../assets/images/movie-desc.png')]">
            <div className="w-full h-screen bg-sky-900 opacity-[0.9]">
                <Header/>
                <section className="w-full flex md:flex-row flex-wrap flex-col items-center md:items-start md:pt-20 pt-8 md:px-32 px-2 gap-10">
                    <div className="md:w-[30%] w-[90%] relative cursor-pointer">
                      <div className="w-full absolute h-full bg-blue-bg opacity-[0.6] flex items-center justify-center">
                      <AiOutlinePlayCircle className="text-8xl hover:font-bold hover:text-9xl transition-all duration-100 text-white"/>
                      </div>
                      <Image className="w-full md:h-[500px] h-[350px]"  src={img} alt="filme"/>    
                    </div>
                    <div className="flex flex-col md:w-[60%] w-full  md:items-start items-center px-4">
                      <div className="flex flex-col w-full py-2">
                        <h3 className="text-yellow-400 text-left text-3xl md:pb-6 pb-2">NEW EPISODES</h3>
                        <h3 className="text-4xl pb-6 text-white">BAT<span className="text-yellow-400">MAN</span></h3>
                      </div>
                      <div>
                        <div className="flex flex-col md:flex-row  md:items-center md:gap-4 gap-2 text-white">
                            <span className="px-2 w-10 border text-white">HD</span>
                            <span className="font-semibold">Commedy, Action, Adventure, Science Fiction</span>
                            <div className="flex items-center gap-1">
                                <AiFillClockCircle className="text-2xl text-yellow-400"/>
                                <span>137 min</span>
                            </div>
                        </div>
                        <div className="pt-6 md:text-justify text-center text-white pb-6">
                            <p>Batman  a super hero, 
                                he is called Batman because he like to eat bat and act like a bat, 
                                in this movie he fite against super man and he kick his ass.</p>
                        </div>
                        <div className="md:w-[500px]  w-full md:h-[100px] h-auto flex md:flex-row flex-col items-center  gap-10  bg-blue-bg text-white px-10 py-2">
                            <div className="flex flex-col items-center gap-1">
                                <BsFillShareFill className="text-2xl"/>
                                <span>Share</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold">Prime Video</span>
                                <span className="text-sm">Streaming Channels</span>
                            </div>
                            <div>
                                
                                <button className="button text-xs md:text-sm
                                ">
                                  <AiFillPlayCircle className="text-2xl"/>
                                  Watch now
                                </button>
                            </div>
                        </div>
                      </div>
                    </div>
                </section>
            </div>
        </section>
      </>
    );
}