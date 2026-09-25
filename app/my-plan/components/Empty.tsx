import Link from "next/link"

const Empty = () => {
    return (
        <div className="mt-2 mb-12 h-75 border border-dashed border-gray-500/70 rounded-2xl flex flex-col justify-center items-center">
            <h1 className="uppercase font-oswald text-xl">Nothing here yet</h1>
            <p className="text-xs text-gray-500">Browse the library and add a lift to get today moving.</p>
            <Link href={"/"}>
                <button className="mt-4 rounded-full bg-lime-400 font-bold text-black text-xs px-4 py-1.5 cursor-pointer">Go to workouts</button>
            </Link>
        </div>
    )
}

export default Empty