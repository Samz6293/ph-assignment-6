import { Workout } from "../types/types";
import WorkoutCard from "./WorkoutCard";

const getWorkouts = async() => {
    const response = await fetch("https:/api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
}

const Library = async() => {
    const workouts = await getWorkouts();
    return (
        <>
            {/* wrapper */}
            <div id="library" className="flex flex-col gap-6 mb-12">
                {/* header texts */}
                <div className="content-box-s cmt flex flex-col
                md:content-box">
                    <h1 className="font-oswald font-bold text-xl md:text-3xl">THE LIBRARY</h1>
                    <p className="text-xs text-gray-500 mt-2">Twelve lifts covering every major muscle group.</p>
                </div>

                {/* cards */}
                <div className="content-box-s grid grid-cols-1 gap-6
               sm:grid-cols-2 md:grid-cols-3 md:content-box">
                    {workouts.map((workout: Workout) => <WorkoutCard key={workout.id} workout={workout}/>)}
                </div>
            </div>
        </>
    )
}

export default Library