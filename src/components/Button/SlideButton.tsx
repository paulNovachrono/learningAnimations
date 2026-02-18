import { cn } from "../../lib/utils"

export default function SlideButton(){
    return<button className="relative rounded-[9.5px] border-2 border-white/20 flex items-center gap-2 text-lg pl-10 py-0.5 pr-3 tracking-tight group overflow-hidden">
        <Box/>
        <div className="bg-primary absolute inset-0 [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-[clip-path] duration-500 ease-in "/>
        <span className="inline-block group-hover:-translate-x-8 transition-all ease-in duration-500">Chat with Ishan</span>
    </button>
}


function Box () {
    return <div className="absolute group-hover:left-[calc(100%-2.1rem)] group-hover:transform group-hover:rotate-180 ease-out left-0 inset-y-0 my-auto transition-all duration-700 size-8 bg-primary rounded-md flex flex-col justify-center items-center mx-w-[90%] gap-[2px] z-40">
        <div className=" flex items-center gap-[2px] overflow-hidden z-50">
        <Bubble/>
        <Bubble/>
        <Bubble heightlight/>
        <Bubble/>
        <Bubble/>
        </div>
        <div className="flex items-center gap-[2px] overflow-hidden">
        <Bubble/>
        <Bubble/>
        <Bubble />
        <Bubble heightlight/>
        <Bubble/>
        </div>
        <div className="flex items-center gap-[2px] overflow-hidden">
        <Bubble heightlight/>
        <Bubble heightlight/>
        <Bubble heightlight/>
        <Bubble heightlight/>
        <Bubble heightlight/>
        </div><div className="flex items-center gap-[2px] overflow-hidden">
        <Bubble/>
        <Bubble/>
        <Bubble />
        <Bubble heightlight/>
        <Bubble/>
        </div><div className="flex items-center gap-[2px] overflow-hidden">
        <Bubble/>
        <Bubble/>
        <Bubble heightlight/>
        <Bubble/>
        <Bubble/>
        </div>
    </div>
}

function Bubble ({ heightlight}:{ heightlight?: boolean}){
    return <span className={cn("bg-white/25 rounded-full size-[3px] shrink-0 ", heightlight && "bg-white animate-pulse ease-linear transition-all duration-500")}/>
}