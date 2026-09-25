"use client";
import { createContext, ReactNode, useState } from "react"
import { ExerciseContextType, ExerciseDetails } from "../types/types";

export const ExerciseContextCreate = createContext<ExerciseContextType>({} as ExerciseContextType);
const ExerciseContext = ({children}:{children: ReactNode}) => {
    const [onLink, setOnLink] = useState("none");
    const [plan, setPlan] = useState<ExerciseDetails[]>([]);
    const [saved, setSaved] = useState<ExerciseDetails[]>([]);
    const sharedData: ExerciseContextType = {
        onLink,
        setOnLink,
        plan,
        setPlan,
        saved,
        setSaved
    };
    return <ExerciseContextCreate.Provider value={sharedData}>{children}</ExerciseContextCreate.Provider>
}

export default ExerciseContext