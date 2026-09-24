import { ExerciseDeatailsParams, ExerciseDetails } from "@/app/types/types"
import Image from "next/image";

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
            <div className="content-box-s cmt mb-12 flex justify-between gap-13 md:content-box">
                {/* image */}
                <div className="rounded-xl overflow-hidden min-h-72">
                    <Image src={exerciseDetails.image} alt={exerciseDetails.name} width={740} height={740}/>
                </div>

                {/* details */}
                <div className="w-4/5 flex flex-col gap-4">

                    {/* header */}
                    <div>
                        <h1 className="font-oswald font-bold text-xl md:text-3xl">{exerciseDetails.name}</h1>
                        <p className="text-xs text-gray-500 mt-1">{exerciseDetails.description}</p>
                    </div>

                    {/* muscle group */}
                    <div className="flex gap-2">
                        {exerciseDetails.muscleGroups.map((muscle, index) =>
                            <p key={index} className="bg-lime-400 w-fit px-3 py-1 rounded-full font-bold text-black text-xs ">{muscle}</p>
                        )}
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
                </div>
            </div>
        </>
    )
}

export default ExerciseDetailPage