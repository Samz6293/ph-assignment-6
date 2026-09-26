import { Dispatch, SetStateAction } from "react"

export interface Workout {
    id: number
    name: string
    image: string
    muscleGroups: string[]
    equipment: string
    difficulty: string
    duration: number
    caloriesBurned: number
    sets: number
    reps: string
    rating: number
    description: string
    instructions: string[]
}

export interface WorkoutCardProps {
    workout: Workout
}

 export interface ExerciseContextType {
    plan: ExerciseDetails[]
    setPlan: Dispatch<SetStateAction<ExerciseDetails[]>>
    saved: ExerciseDetails[]
    setSaved: Dispatch<SetStateAction<ExerciseDetails[]>>
}

export interface ExerciseDeatailsParams {
    params: Promise<{id: string}>
}

export interface ExerciseDetails {
    id: number
    name: string
    image: string
    muscleGroups: string[]
    equipment: string
    difficulty: string
    duration: number
    caloriesBurned: number
    sets: number
    reps: string
    rating: number
    description: string
    instructions: string[]
}

export interface UpdateButtonProps {
    exercise: ExerciseDetails;
}
export interface PlannedCardProps {
    exercise: ExerciseDetails;
}

export interface SavedCardProps {
    exercise: ExerciseDetails;
}