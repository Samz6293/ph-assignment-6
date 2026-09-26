"use client";
import { ExerciseContextCreate } from "@/app/context/ExerciseContext";
import { SavedCardProps } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link"
import { useContext } from "react";
import { AiFillFire } from "react-icons/ai";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Slide, toast } from "react-toastify";

const SavedCard = ({exercise}: SavedCardProps) => {
    const {saved, setSaved} = useContext(ExerciseContextCreate);
    const handleRemove = () => {
        const newSaved = saved.filter(work=> work.id !== exercise.id);
        setSaved(newSaved);
        toast.success(`${exercise.name} removed from saved`, {
        position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true, 
        pauseOnHover: false, draggable: true, progress: undefined, theme: "light", transition: Slide});
    }
    const showDetailToast = () => {
        toast.info(`Showing ${exercise.name} details`, {
        position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true, 
        pauseOnHover: false, draggable: true, progress: undefined, theme: "light", transition: Slide});
    }
    return (
        <div className="bg-zinc-900 rounded-xl p-4 overflow-hidden flex flex-col justify-between outline outline-zinc-800 w-full mb-5
        md:flex-row">

            <div className="flex flex-col gap-4 items-center
            sm:flex-row">
                {/* image */}
                <div className="w-full overflow-hidden rounded-xl
                md:h-20 md:w-36">
                    <Image src={exercise.image} alt={exercise.name} width={593} height={593} className="object-cover object-center"/>
                </div>

                {/* info */}
                <div className="w-full flex flex-col items-start">
                    <h3 className="font-oswald font-bold uppercase">{exercise.name}</h3>
                    <p className="text-xs mt-1 text-gray-400">{exercise.equipment}</p>

                    {/* time, calorie, rating */}
                    <div className="flex mt-2 gap-3 items-center text-xs text-gray-400">
                        <p className="flex items-center gap-1 font-light"><FaRegClock className="text-lime-300"/>{exercise.duration} min</p>
                        <p className="flex items-center gap-1 font-light"><AiFillFire className="text-lime-300"/>{exercise.caloriesBurned} kcal</p>
                        <p className="flex items-center gap-1 font-light"><FaRegStar className="text-lime-300"/>{exercise.rating}</p>
                    </div>
                </div>
            </div>

            {/* buttons */}
            <div className="flex mt-3 gap-3 items-center">
                <Link href={`/exercise/${exercise.id}`}>
                <button onClick={() => showDetailToast()}  className="flex w-fit justify-center items-center gap-2 rounded-full outline outline-gray-800  text-white text-xs px-3 py-1.5 cursor-pointer
                hover:bg-zinc-800 active:scale-95">View Details</button>
                </Link>
                <button onClick={() => handleRemove()}><RxCross2 className="text-gray-500 cursor-pointer
                hover:text-gray-400 active:scale-90 text-lg" /></button>
            </div>
        </div>
    )
}

export default SavedCard