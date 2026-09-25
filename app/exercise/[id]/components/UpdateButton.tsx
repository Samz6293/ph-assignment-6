"use client";
import { ExerciseContextCreate } from "@/app/context/ExerciseContext";
import { UpdateButtonProps } from "@/app/types/types"
import { useContext } from "react";
import { CiBookmark } from "react-icons/ci"
import { LuCalendarPlus2 } from "react-icons/lu"

const UpdateButton = ({exercise}: UpdateButtonProps) => {
    const {plan, setPlan, saved, setSaved} = useContext(ExerciseContextCreate);
    const handlePlan = () => {
        if(plan.length === 5) {
            console.log("full");
            return;
        }

        // duplicate check
        const inPlan = plan.some(workout => workout.id === exercise.id);
        if(!inPlan){
            console.log(`Added ${exercise.name} to plan array`);
            setPlan([...plan, exercise]);
        }
        else{
            console.log("Already in array");
        }
    }

    const handleSave = () => {
        const inSaved = saved.some(workout => workout.id === exercise.id)
        if(!inSaved){
            console.log(`Added ${exercise.name} to save array`);
            setSaved([...saved, exercise]);
        }
        else{
            console.log("Already in array");
        }

    }

    return (
        <div className="flex flex-col gap-4
        lg:flex-row">
            <button onClick={handlePlan} className="flex justify-center items-center gap-2 rounded-xl bg-lime-400 font-semibold text-black text-sm px-6 py-3 cursor-pointer"><LuCalendarPlus2 className="text-base" />Add to today's plan</button>
            <button onClick={handleSave} className="flex justify-center items-center gap-2 rounded-xl outline outline-gray-800 font-semibold text-white text-sm px-6 py-3 cursor-pointer"><CiBookmark className="text-base" />Save for later</button>
        </div>
    )
}

export default UpdateButton