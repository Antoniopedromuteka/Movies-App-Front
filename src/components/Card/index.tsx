import Image from "next/image"
import {AiFillClockCircle} from "react-icons/ai"

export type MockProps = {
    title: string;
    time: number;
    year: number;
    format: string;
    image: string;
}
export const Card = (data: MockProps) =>{
    console.log(data)
    return(
        <div className="flex-1 w-[80%] cursor-pointer h-[350px] flex flex-col">
            <div className="w-full  h-[250px] bg-black rounded-md">
                <img className="w-full h-[250px]" src={data.image} alt="movies"/>
            </div>
            <div>
                <div className="flex-1 flex py-4 items-center justify-between px-2">
                    <span className="text-white">{data.title}</span>
                    <span className="text-yellow-400">{data.year}</span>
                </div>
                <div className="flex-1 flex py-4 items-center justify-between px-0">
                    <span className="text-yellow-400 border-[1px] px-2">{data.format}</span>
                    <div className="flex items-center gap-1">
                        <AiFillClockCircle className="text-yellow-400 text-2xl"/>
                        <span className="text-white">{data.time} min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}