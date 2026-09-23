import Image from "next/image"
import banner from "@/app/assets/banner.png"

const Hero = () => {
    return (
        <>
                {/* wrapper */}
                <div className="content-box-s flex flex-col justify-between cmt gap-8 p-14 bg-zinc-900 rounded-lg
                md:content-box md:flex-row">
                    
                    {/* writings */}
                    <div className="flex flex-col gap-3">
                        <p className="text-lime-300 text-xs font-bold">WORKOUT LIBRARY</p>
                        <h1 className="font-oswald font-extrabold text-6xl">TRAIN WITH INTENT. <br/> LOG
                        EVERY SET.</h1>
                        <p className="text-xs">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.</p>
                        <button className="bg-lime-400 text-black font-bold text-sm px-6 py-2 rounded-md">BROWSE WORKOUTS</button>
                    </div>

                    {/* image */}
                    <div>
                        <Image src={banner} alt="Muscular Figure working out" />
                    </div>


                </div>
        </>
    )
}

export default Hero