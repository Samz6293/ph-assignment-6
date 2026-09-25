"use client";
import { useContext, useState } from "react";
import { ExerciseContextCreate } from "../context/ExerciseContext";
import Empty from "./components/Empty";
import Heading from "./components/Heading";
import PlannedCard from "./components/PlannedCard";

export default function MyPlanPage() {

    const {plan, saved} = useContext(ExerciseContextCreate);
    const [mode, setMode] = useState("plan");
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
                <div className="mt-2 bg-zinc-900 rounded-lg p-1.5 outline outline-zinc-800 w-fit">
                    <div className="space-x-2 text-xs font-light">
                        <button onClick={() =>setMode("plan")} className={`px-4 cursor-pointer ${mode === "plan" && "active-section"}`}>Today's Plan</button>
                        <button onClick={() =>setMode("saved")} className={`px-4 cursor-pointer ${mode === "saved" && "active-section"}`}>Saved</button>
                    </div>
                </div>

                {/* exercise list */}
                {(mode === "plan" && plan.length === 0) || (mode === "saved" && saved.length === 0) ?
                    <Empty />
                :
                mode === "plan" ? 
                    <div className="flex flex-col mb-12">
                        {plan.map(exercise => <PlannedCard key={exercise.id} exercise={exercise} />)}
                    </div>
                : <p>yo</p>
                }
            </div>
        </>
    );
}