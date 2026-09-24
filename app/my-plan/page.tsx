import Link from "next/link";

export default function MyPlanPage() {
    return (
        <>
            {/* wrapper */}
            <div className="content-box-s flex flex-col gap-6 md:content-box cmt">
                {/* texts */}
                <div>
                    <h1 className="uppercase font-oswald font-bold text-3xl">my plan</h1>
                    <p className="mt-2 text-xs text-gray-500">Cap of five lifts for today. Finish them, then load more.</p>
                </div>

                {/* counts */}
                <div className="p-6 grid grid-cols-3 bg-zinc-900 rounded-xl outline outline-zinc-800">
                    <div className="flex flex-col gap-1 ">
                        <p className="text-xs text-gray-500">Exercises</p>
                        <h2 className="font-oswald font-bold text-4xl text-lime-400">2</h2>
                    </div>

                    <div className="flex flex-col gap-1 pl-6 border-l border-l-gray-500/20">
                        <p className="text-xs text-gray-500">Minutes</p>
                        <h2 className="font-oswald font-bold text-4xl">2</h2>
                    </div>

                    <div className="flex flex-col gap-1 pl-6 border-l border-l-gray-500/20">
                        <p className="text-xs text-gray-500">Calories</p>
                        <h2 className="font-oswald font-bold text-4xl">2</h2>
                    </div>
                </div>

                {/* section and sort */}
                <div className="mt-2 bg-zinc-900 rounded-lg p-1.5 outline outline-zinc-800 w-fit">
                    <div className="space-x-2 text-xs font-light">
                        <button className="bg-gray-600/50 outline outline-gray-500/70 py-0.5 px-4 rounded-md font-bold">Today's Plan</button>
                        <button className="px-4">Saved</button>
                    </div>
                </div>

                {/* exercise list */}
                <div className="mt-2 h-75 border border-dashed border-gray-500/70 rounded-2xl flex flex-col justify-center items-center">
                    <h1 className="uppercase font-oswald text-xl">Nothing here yet</h1>
                    <p className="text-xs text-gray-500">Browse the library and add a lift to get today moving.</p>
                    <Link href={"/"}>
                        <button className="mt-4 rounded-full bg-lime-400 font-bold text-black text-xs px-4 py-1.5 cursor-pointer">Go to workouts</button>
                    </Link>
                </div>
            </div>
        </>
    );
}