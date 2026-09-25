"use client";
import Link from "next/link"

const Error = () => {
  return (
    <div className="content-box-s md:content-box  mt-10 mb-12 h-75 border border-dashed border-gray-500/70 rounded-2xl flex flex-col justify-center items-center">
        <h1 className="uppercase font-oswald text-xl">Error 404</h1>
        <p className="text-xs text-gray-500">You straved away from the path</p>
        <Link href={"/"}>
            <button className="mt-4 rounded-full bg-lime-400 font-bold text-black text-xs px-4 py-1.5 cursor-pointer">Go Home</button>
        </Link>
    </div>
  )
}

