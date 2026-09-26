"use client";
import { createContext, ReactNode, useEffect, useState } from "react"
import { ExerciseContextType, ExerciseDetails } from "../types/types";

export const ExerciseContextCreate = createContext<ExerciseContextType>({} as ExerciseContextType);

const ExerciseContext = ({children}:{children: ReactNode}) => {
    // initial state
    const [onLink, setOnLink] = useState("none");
    const [plan, setPlan] = useState<ExerciseDetails[]>([]);
    const [saved, setSaved] = useState<ExerciseDetails[]>([]);
    const [onBrowser, setOnBrowser] = useState(false);
    
    // on mount get data from local storage and confirm we are in browswer
    useEffect(() => {
        const storedOnLink = localStorage.getItem("onLink");
        const storedPlan = localStorage.getItem("plan");
        const storedSaved = localStorage.getItem("saved");

        // TODO: update state if local sotrage not empty
        if(storedPlan) setPlan(JSON.parse(storedPlan));
        if(storedSaved) setSaved(JSON.parse(storedSaved));
        if(storedOnLink) setOnLink(storedOnLink);

        setOnBrowser(true);
    }, []);

    // storing plan
    useEffect(() => {
        if(onBrowser){
           localStorage.setItem("plan", JSON.stringify(plan)); 
        } 
    }, [plan]);

    // storing saved
    useEffect (() => {
        if(onBrowser){
            localStorage.setItem("saved", JSON.stringify(saved));
        } 
    }, [saved]);
    
    // storing onLink
    useEffect(() => {
        if(onBrowser) localStorage.setItem("onLink", onLink);
    }, [onLink]);
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