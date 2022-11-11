 
export const Newsletter = () =>{
    return(
        <section className="w-full h-auto flex  flex-col md:flex-row items-center gap-8 bg-yellow-500 py-10 md:px-20 px-8">
            <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-semibold text-center md:text-left">TRIAL START FOR 30 DAYS</h3>
                <span className="text-gray-600 text-center md:text-left">Enter your Email To Create Or Restart your Remembership</span>
            </div>
            <div className="flex flex-1 justify-end relative">
                <input type="search" className="px-6 md:w-[450px] w-80 text-slate-700 outline-none py-5 rounded-2xl" />
                <button className="absolute top-1 py-4 right-2 rounded-2xl bg-black text-white md:px-20 px-10">Send</button>
            </div>
        </section>
    );
}