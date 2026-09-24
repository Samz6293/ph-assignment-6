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
    onLink: string
    setOnLink: (link: string) => void
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