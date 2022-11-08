import Image from "next/image"
import {AiFillClockCircle} from "react-icons/ai"

export const Card = () =>{
    return(
        <div className="flex-1 w-[80%] cursor-pointer h-[350px] flex flex-col">
            <div className="w-full  h-[250px] bg-black rounded-md">
                <img className="w-full h-[250px]" src={"https://i.pinimg.com/originals/14/47/7e/14477ee7cab644d125228aa24573eaa8.jpg"} alt="movies"/>
            </div>
            <div>
                <div className="flex-1 flex py-4 items-center justify-between px-2">
                    <span className="text-white">Batmam Fullstack</span>
                    <span className="text-yellow-400">2022</span>
                </div>
                <div className="flex-1 flex py-4 items-center justify-between px-0">
                    <span className="text-yellow-400 border-[1px] px-2">HD</span>
                    <div className="flex items-center gap-1">
                        <AiFillClockCircle className="text-yellow-400 text-2xl"/>
                        <span className="text-white">137 min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}