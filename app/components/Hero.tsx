import Image from "next/image"
import banner from "@/app/assets/banner.png"
import Link from "next/link"

const Hero = () => {
    return (
        <>
                {/* wrapper */}
                <div className="content-box-s flex flex-col justify-between items-center cmt gap-8 p-14 bg-zinc-900 rounded-lg
                md:content-box md:flex-row">
                    
                    {/* writings */}
                    <div className="flex flex-col gap-4 
                    md:max-w-96 lg:max-w-120">
                        <p className="text-lime-300 text-xs font-bold">WORKOUT LIBRARY</p>
                        <h1 className="font-oswald font-extrabold text-2xl w-full uppercase
                        sm:text-4xl md:text-5xl lg:text-6xl">TRAIN WITH INTENT. LOG EVERY SET.</h1>
                        <p className="text-xs md:text-sm">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.</p>
                        <a href={"#library"}>
                            <button className="bg-lime-400 w-fit mx-auto text-black font-bold text-xs px-6 py-2 rounded-md cursor-pointer
                            md:mx-0">BROWSE WORKOUTS</button>
                        </a>
                    </div>

                    {/* image */}
                    <div>
                        <Image src={banner} alt="Muscular Figure working out" width={334} height={334}/>
                    </div>


                </div>
        </>
    )
}

export default Hero