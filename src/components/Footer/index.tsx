import { RiMovie2Fill, RiFacebookBoxFill, RiInstagramFill, RiLinkedinBoxFill, RiGoogleFill } from "react-icons/ri";
export const Footer = () => {
    return (
        <footer className="w-full h-auto flex flex-col pt-10 pb-4 md:px-20 px-6 bg-gray-bg">
            <header className="w-full flex flex-col md:flex-row items-center border-b-2 pb-8 border-gray-400">
                <div className="flex gap-2 items-center">
                    <RiMovie2Fill className="text-yellow-400 text-4xl" />
                    <h2 className="text-2xl flex-1  text-white">FilmeLane</h2>
                </div>
                <div className="md:flex py-4 md:py-0 flex-col md:flex-row items-center md:flex-1 justify-end">
                <ul className="flex gap-4  md:gap-14 text-gray-400">
                   <li className="cursor-pointer">Home</li>
                   <li className="cursor-pointer">Movie</li>
                   <li className="cursor-pointer">About</li>
                   <li className="cursor-pointer">Series</li> 
                </ul>
            </div>
            </header>
            <div className="flex items-center md:flex-row flex-col gap-6 md:gap-0 py-10">
                <div>
                    <ul className="flex flex-wrap md:justify-start justify-center gap-6  md:gap-14 text-gray-400">
                    <li className="cursor-pointer font-normal">FAQ</li>
                    <li className="cursor-pointer font-normal">HELP CENTER</li>
                    <li className="cursor-pointer font-normal">TERMS OF USES</li>
                    <li className="cursor-pointer font-normal">PRIVACITY</li> 
                    <li className="cursor-pointer font-normal">DESENVOLVIDO POR <span className="text-white">M-CODERS</span></li> 
                    </ul>
                </div>
                <div className="flex flex-1 justify-end gap-4 px-6 ">
                    <RiFacebookBoxFill className="text-3xl text-white "/>
                    <RiInstagramFill className="text-3xl text-white "/>
                    <RiLinkedinBoxFill className="text-3xl text-white "/>
                    <RiGoogleFill className="text-3xl text-white "/>
                </div>
            </div>
        </footer>
    );
}