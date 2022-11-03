
export const Header = () =>{
    return(
      <header className="w-full h-[100px] bg-slate-600">
        <div className="flex gap-6 flex-row justify-between items-center relative pt-8 md:px-32 px-12">
            <div>
                <h2 className="text-2xl flex-1  text-white">Movies APP</h2>
            </div> 
            <div className="hidden md:flex md:flex-1 justify-center">
                <ul className="md:flex  md:gap-14 text-white">
                   <li>Home</li>
                   <li>Movie</li>
                   <li>About</li>
                   <li>Series</li> 
                </ul>
            </div>
            <div className="hidden md:flex md:gap-6 md:flex-1 md:justify-end">
                <input className="p-2 outline-none border-yellow-400 border-2 bg-black text-white  px-4 rounded-3xl" type="search" name="" id="" />
                <button className="p-2 outline-none border-yellow-400 border-2 rounded-3xl text-white bg-black px-10">Sign In</button>
            </div>
            <div className="md:hidden flex flex-1 justify-end">
                <h2>hello</h2>
            </div>
        </div>
      </header>
    );
}