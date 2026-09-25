"use client";
import { useContext, useEffect, useState } from "react";
import { ExerciseContextCreate } from "../context/ExerciseContext";
import Empty from "./components/Empty";
import Heading from "./components/Heading";
import PlannedCard from "./components/PlannedCard";
import { ExerciseDetails } from "../types/types";

export default function MyPlanPage() {

    const {plan, saved} = useContext(ExerciseContextCreate);
    const [mode, setMode] = useState("plan");
    const [sortby, setSortBy] = useState("Duration");
    const sortPlannedExercises = (exercises: ExerciseDetails[]): ExerciseDetails[] => {
        const sorted = [...exercises];
        if(sortby === "Duration"){
            sorted.sort((a,b)=> b.duration - a.duration);
        }
        else if (sortby === "Calories"){
            sorted.sort((a,b) => b.caloriesBurned - a.caloriesBurned);
        }
        else if(sortby === "Rating")  {
            sorted.sort((a,b) => b.rating - a.rating);
        }
        return sorted
    }
    const sortedPlannedExercises = sortPlannedExercises(plan);
    return (
        <>
            {/* wrapper */}
            <div className="content-box-s flex flex-col gap-6 md:content-box cmt">
                {/* texts */}
                <Heading />

                {/* counts */}
                <div className="p-6 grid grid-cols-3 bg-zinc-900 rounded-xl outline outline-zinc-800">
                    <div className="flex flex-col gap-1 ">
                        <p className="text-xs text-gray-500">Exercises</p>
                        <h2 className="font-oswald font-bold text-4xl text-lime-400">{mode === "plan" ? <p>{plan.length}</p> : <p>{saved.length}</p>}</h2>
                    </div>

                    <div className="flex flex-col gap-1 pl-6 border-l border-l-gray-500/20">
                        <p className="text-xs text-gray-500">Minutes</p>
                        <h2 className="font-oswald font-bold text-4xl">{mode === "plan" ? <p>{plan.reduce((acc, curr)=>(acc+curr.duration),0)}</p> : 
                        <p>{plan.reduce((acc, curr)=>(acc+curr.duration),0)}</p>}</h2>
                    </div>

                    <div className="flex flex-col gap-1 pl-6 border-l border-l-gray-500/20">
                        <p className="text-xs text-gray-500">Calories</p>
                        <h2 className="font-oswald font-bold text-4xl">{mode === "plan" ? <p>{plan.reduce((acc, curr)=>(acc+curr.caloriesBurned),0)}</p> : 
                        <p>{plan.reduce((acc, curr)=>(acc+curr.caloriesBurned),0)}</p>}</h2>
                    </div>
                </div>

                {/* section and sort */}
                <div className="flex flex-col items-start justify-between gap-3
                md:flex-row md:items-center">
                    <div className="bg-zinc-900 rounded-lg p-1.5 outline outline-zinc-800 w-fit">
                        <div className="space-x-2 text-xs font-light">
                            <button onClick={() =>setMode("plan")} className={`px-4 cursor-pointer ${mode === "plan" && "active-section"}`}>Today's Plan</button>
                            <button onClick={() =>setMode("saved")} className={`px-4 cursor-pointer ${mode === "saved" && "active-section"}`}>Saved</button>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse items-center gap-4
                    md:flex-row">
                        <p className="text-sm text-gray-500">Sort By</p>
                        <div>
                        <select defaultValue={sortby} onChange={(e)=> setSortBy(e.target.value)} className="select w-49 bg-zinc-900 rounded-lg p-1.5">
                            <option value="Duration">Duration</option>
                            <option value="Calories">Calories</option>
                            <option value="Rating">Rating</option>
                        </select>
                        </div>
                    </div>
                </div>

                {/* exercise list */}
                {(mode === "plan" && plan.length === 0) || (mode === "saved" && saved.length === 0) ?
                    <Empty />
                :
                mode === "plan" ? 
                    <div className="flex flex-col mb-12">
                        {sortedPlannedExercises.map(exercise => <PlannedCard key={exercise.id} exercise={exercise} />)}
                    </div>
                : 
                    <div>

                    </div>
                }
            </div>
        </>
    );
}