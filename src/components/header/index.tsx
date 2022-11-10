import { useState } from "react";
import { AiOutlineBars, AiOutlineClose} from "react-icons/ai"
import { RiMovie2Fill } from "react-icons/ri"
import { SideBar } from "../SideBar";

export const Header = () => {
    const [menuActive, setMenuActive] = useState<Boolean>(false)

    return (
        <>
        <header className="w-full h-[100px]  ">
            <div className="flex gap-6 flex-row flex-wrap h-auto flex-1 justify-between items-center relative pt-8 md:px-32 px-12">
                <div className="flex items-center gap-2">
                    <RiMovie2Fill className="text-yellow-400 text-4xl" />
                    <h2 className="text-2xl flex-1  text-white">FilmeLane</h2>
                </div>
                <div className="hidden  md-900:flex md-900:flex-1 justify-center md-900:justify-end md-800:justify-end">
                    <ul className="md:flex   md:gap-14 md-900:gap-6 md-800:gap-6 text-white">
                        <li>Home</li>
                        <li>Movie</li>
                        <li>About</li>
                        <li>Series</li>
                    </ul>
                </div>
                <div className="hidden  md-1205:flex  md:gap-8 md:flex-1 md:justify-end">
                    <input className="p-2  outline-none border-yellow-400 border-[1px] bg-gray-800 text-white  px-4 md-1205:px-2 md-1205:py-2 rounded-3xl" type="search" name="" id="" />
                    <button className="p-2 outline-none border-yellow-400 border-[1px] rounded-3xl text-white bg-gray-800 px-10 md-1205:px-5">Sign In</button>
                </div>
                <div className="flex md-892:hidden flex-1 justify-end">
                    {menuActive ?
                     <AiOutlineClose onClick={()=> setMenuActive(!menuActive)} className="z-[100] text-5xl cursor-pointer text-white" /> 
                     :
                     <AiOutlineBars onClick={()=> setMenuActive(!menuActive)} className="z-[100] text-5xl cursor-pointer text-white" />
                     }
                </div>
            </div>
        </header>
        {menuActive ? <SideBar/> : null}
        </>
    );
}