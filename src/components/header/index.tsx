import {AiOutlineBars} from "react-icons/ai"
import {RiMovie2Fill} from "react-icons/ri"

export const Header = () =>{
    return(
      <header className="w-full h-[100px]  ">
        <div className="flex gap-6 flex-row flex-wrap h-auto flex-1 justify-between items-center relative pt-8 md:px-32 px-12">
            <div className="flex items-center gap-2">
                <RiMovie2Fill className="text-yellow-400 text-4xl"/>
                <h2 className="text-2xl flex-1  text-white">FilmeLane</h2>
            </div> 
            <div className="hidden md:flex md:flex-1 justify-center">
                <ul className="md:flex  md:gap-14 text-white">
                   <li>Home</li>
                   <li>Movie</li>
                   <li>About</li>
                   <li>Series</li> 
                </ul>
            </div>
            <div className="hidden md:flex md:gap-8 md:flex-1 md:justify-end">
                <input className="p-2  outline-none border-yellow-400 border-[1px] bg-gray-800 text-white  px-4 rounded-3xl" type="search" name="" id="" />
                <button className="p-2 outline-none border-yellow-400 border-[1px] rounded-3xl text-white bg-gray-800 px-10">Sign In</button>
            </div>
            <div className="md:hidden flex flex-1 justify-end">
                <AiOutlineBars className="text-5xl cursor-pointer text-white"/>
            </div>
        </div>
      </header>
    );
}