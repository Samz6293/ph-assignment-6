"use client";
import { ExerciseContextCreate } from "@/app/context/ExerciseContext";
import { UpdateButtonProps } from "@/app/types/types"
import { useContext } from "react";
import { CiBookmark } from "react-icons/ci"
import { LuCalendarPlus2 } from "react-icons/lu"
import { Slide, toast } from "react-toastify";

const UpdateButton = ({exercise}: UpdateButtonProps) => {
    const {plan, setPlan, saved, setSaved} = useContext(ExerciseContextCreate);
    const inPlan = plan.some(workout => workout.id === exercise.id);
    const inSaved = saved.some(workout => workout.id === exercise.id)
    const handlePlan = () => {
        if(plan.length === 5) {
            toast.error(`Finish today's workout first`, {
            position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true, 
            pauseOnHover: false, draggable: true, progress: undefined, theme: "light", transition: Slide});
            return;
        }

        // duplicate check
        if(!inPlan){
            setPlan([...plan, exercise]);
            toast.success(`Added to today's plan`, {
            position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true, 
            pauseOnHover: false, draggable: true, progress: undefined, theme: "light", transition: Slide});
        }
        else{
            toast.error(`${exercise.name} already added`, {
            position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true, 
            pauseOnHover: false, draggable: true, progress: undefined, theme: "light", transition: Slide});
        }
    }

    const handleSave = () => {
        if(!inSaved){
            toast.success(`${exercise.name} saved for later`, {
            position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true, 
            pauseOnHover: false, draggable: true, progress: undefined, theme: "light", transition: Slide});
            setSaved([...saved, exercise]);
        }
        else{
            console.log("Already in array");
            toast.error(`${exercise.name} already added`, {
            position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true, 
            pauseOnHover: false, draggable: true, progress: undefined, theme: "light", transition: Slide});
        }

    }

    return (
        <div className="flex flex-col gap-4
        lg:flex-row">
            <button onClick={handlePlan} className={`${inPlan || plan.length === 5 ? "cursor-not-allowed" : "cursor-pointer"} 
            flex justify-center items-center gap-2 rounded-xl bg-lime-400 font-semibold text-black text-sm px-6 py-3 
            hover:bg-lime-500 active:scale-95`}><LuCalendarPlus2 className="text-base" />Add to today's plan</button>
            
            <button onClick={handleSave} className={`${inSaved ? "cursor-not-allowed" : "cursor-pointer"} 
            flex justify-center items-center gap-2 rounded-xl outline outline-gray-800 font-semibold text-white text-sm px-6 py-3
            hover:bg-zinc-800 active:scale-95`}><CiBookmark className="text-base" />Save for later</button>
        </div>
    )
}

export default UpdateButton