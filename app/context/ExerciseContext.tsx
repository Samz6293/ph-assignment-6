"use client";
import { createContext, ReactNode, useState } from "react"
import { ExerciseContextType } from "../types/types";

export const ExerciseContextCreate = createContext<ExerciseContextType>({} as ExerciseContextType);
const ExerciseContext = ({children}:{children: ReactNode}) => {
    const [onLink, setOnLink] = useState("none");
    const sharedData: ExerciseContextType = {
        onLink,
        setOnLink,
    };
    return <ExerciseContextCreate.Provider value={sharedData}>{children}</ExerciseContextCreate.Provider>
}

export default ExerciseContext