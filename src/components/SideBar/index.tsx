import Link from "next/link"
export const SideBar = () =>{
    return(
        <>
           <section className="md:hidden flex flex-col py-24 px-6 absolute z-10 top-0 right-0 h-[100vh] w-[270px] bg-gray-800">
                <nav>
                    <ul>    
                        <li className="text-2xl text-yellow-400 hover:text-yellow-200 cursor-pointer py-1">Home</li>
                        <li className="text-2xl text-yellow-400 hover:text-yellow-200 cursor-pointer py-1">Movies</li>
                        <li className="text-2xl text-yellow-400 hover:text-yellow-200 cursor-pointer py-1">About</li>
                    </ul>
                </nav> 
            </section> 
        </>
    )
}