import { ExerciseDeatailsParams, ExerciseDetails } from "@/app/types/types"
import Image from "next/image";
import UpdateButton from "./components/UpdateButton";

const getExerciseDetails = async(id: number): Promise<ExerciseDetails> => {
    const request = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const data = await request.json();
    return data;
}

const ExerciseDetailPage = async({params}: ExerciseDeatailsParams) => {
    const {id} = await params;
    const exerciseDetails: ExerciseDetails = await getExerciseDetails(Number(id));
    return (
        <>
            {/* wrapper */}
            <div className="content-box-s cmt mb-12 flex flex-col justify-between gap-13
            md:flex-row md:content-box">
                {/* image */}
                <div className="rounded-xl overflow-hidden">
                    <Image src={exerciseDetails.image} alt={exerciseDetails.name} width={740} height={740} className="h-full object-cover object-center"/>
                </div>

                {/* details */}
                <div className="flex flex-col w-full gap-4
                md:w-[60%]">

                    {/* header */}
                    <div>
                        <h1 className="font-oswald font-bold text-xl uppercase md:text-3xl">{exerciseDetails.name}</h1>
                        <p className="text-xs text-gray-500 mt-1">{exerciseDetails.description}</p>
                    </div>

                    {/* muscle group */}
                    <div className="flex gap-2">
                        {exerciseDetails.muscleGroups.map((muscle, index) =>
                            <p key={index} className="bg-lime-400 w-fit px-3 py-1 rounded-full font-bold text-black text-xs ">{muscle}</p>
                        )}
                    </div>

                    {/* importand info */}
                    <div className="bg-zinc-900 rounded-xl outline outline-zinc-800">

                        {/* row */}
                        <div className="end-to-end text-xs px-6 py-3">
                            <h4 className="font-bold text-start text-gray-400">Equipment</h4>
                            <p className="text-sm text-start md:text-end">{exerciseDetails.equipment}</p>
                        </div>

                        <div className="end-to-end text-xs px-6 py-3">
                            <h4 className="font-bold text-start text-gray-400">Difficulty</h4>
                            <p className="text-sm text-end">{exerciseDetails.difficulty}</p>
                        </div>
                        <div className="end-to-end text-xs px-6 py-3">
                            <h4 className="font-bold text-start text-gray-400">Sets</h4>
                            <p className="text-sm text-end">{exerciseDetails.sets}</p>
                        </div>
                        <div className="end-to-end text-xs px-6 py-3">
                            <h4 className="font-bold text-start text-gray-400">Reps</h4>
                            <p className="text-sm text-end">{exerciseDetails.reps}</p>
                        </div>
                        <div className="end-to-end text-xs px-6 py-3">
                            <h4 className="font-bold text-start text-gray-400">Duration</h4>
                            <p className="text-sm text-end">{exerciseDetails.duration} min</p>
                        </div>
                        <div className="end-to-end text-xs px-6 py-3">
                            <h4 className="font-bold text-start text-gray-400">Calories</h4>
                            <p className="text-sm text-end">{exerciseDetails.caloriesBurned} kcal</p>
                        </div>

                        <div className="end-to-end border-none text-xs px-6 py-3">
                            <h4 className="font-bold text-start text-gray-400">Rating</h4>
                            <p className="text-sm text-end">{exerciseDetails.rating}</p>
                        </div>
                    </div>

                    {/* instructions */}
                    <div>
                        <h3 className="uppercase font-extrabold mb-3">Instructions</h3>
                        <ol>
                            {exerciseDetails.instructions.map((step, index)=>
                                <li className="text-xs text-gray-500 mb-2" key={index}>{index+1}. {step}</li>
                            )}
                        </ol>
                    </div>

                    <UpdateButton exercise={exerciseDetails} />

                </div>
            </div>
        </>
    )
}

export default ExerciseDetailPage