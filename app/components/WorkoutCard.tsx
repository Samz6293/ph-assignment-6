import Image from "next/image"
import { WorkoutCardProps } from "../types/types"
import { FaRegClock, FaRegStar } from "react-icons/fa"
import { AiFillFire } from "react-icons/ai"
import Link from "next/link"

const WorkoutCard = ({workout}: WorkoutCardProps) => {
    return (
        <>
            {/* frame */}
            <Link href={`/exercise/${workout.id}`}>
            <div className="bg-zinc-900 rounded-xl overflow-hidden flex flex-col justify-between outline outline-zinc-800 w-full
            hover:outline-lime-400">
                {/* image */}
                <div className="h-full overflow-hidden">
                    <Image src={workout.image} alt={workout.name} width={593} height={593}/>
                </div>

                {/* details */}
                <div className="flex flex-col p-6">

                    {/* muscle group */}
                    <div className="flex gap-2">
                        {workout.muscleGroups.map((muscle, index) =>
                            <p key={index} className="bg-lime-400 w-fit px-3 py-1 rounded-full font-bold text-black text-xs ">{muscle}</p>
                        )}
                    </div>

                    <h3 className="font-oswald font-bold uppercase mt-3">{workout.name}</h3>
                    <p className="text-xs text-gray-400">{workout.equipment}</p>

                    <div className="h-px w-full bg-zinc-600/40 my-3"></div>

                    {/* time, calorie, rating */}
                    <div className="flex gap-3 items-center text-xs text-gray-400">
                        <p className="flex items-center gap-1 font-light"><FaRegClock />{workout.duration} min</p>
                        <p className="flex items-center gap-1 font-light"><AiFillFire />{workout.caloriesBurned} min</p>
                        <p className="flex items-center gap-1 font-light"><FaRegStar />{workout.rating} min</p>

                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}

export default WorkoutCard