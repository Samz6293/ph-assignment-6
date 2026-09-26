"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { navlinks } from "../constants/navlinks";
import { RiHome2Line } from "react-icons/ri";
import logo from "@/app/assets/logo.png"
import Image from "next/image";
import { ExerciseContextCreate } from "../context/ExerciseContext";
import { usePathname } from "next/navigation";

const Nav = () => {

    // mobile dropdown
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    },[isOpen])
    const pathname = usePathname();

    const {onLink, setOnLink, plan, saved} = useContext(ExerciseContextCreate);
    const handleOnLink = (link: string) => {
        if(onLink !== link) {
            setOnLink(link);
        }
    }

    return (
        <nav className="font-inter sticky top-0 z-50 py-4 backdrop-blur-xl border-b border-gray-500/80
        bg-[#090A0D] shadow-2xl shadow-black/50">

            {/* content wrapper */}
            <div className="content-box-s grid grid-cols-2 items-center
            md:content-box md:grid-cols-3">

                {/* hamburger menu */}
                <div className="flex items-center
                md:hidden">
                    {isOpen ?
                    <button onClick={() => setIsOpen(!isOpen)} className="nav-clicks"><MdClose/></button>
                    :
                    <button onClick={() => setIsOpen(!isOpen)} className="nav-clicks"><MdMenu/></button>
                     }
                </div>

                {/* logo */}
                <div className="hidden gap-2 items-center
                md:flex">
                    <Link href={"/"} className="flex gap-2 items-center" onClick={() => {onLink !== "none" && handleOnLink("Workouts")}}>
                        <Image src={logo} alt="FITLOG Logo" width={28} height={28} className="w-5 h-auto"/>
                        <p className="font-oswald font-extrabold">FITLOG</p>
                    </Link>
                </div>

                {/* links */}
                <ul className="hidden justify-center items-center text-gray-500 gap-4 text-xs
                md:flex">
                    {navlinks.map((link) => (
                        <li key={link.name} className={`hover:text-lime-400 active:scale-95 ${link.page === pathname ? "font-bold text-lime-400 rounded-full px-3 py-1 bg-lime-800/20" : ""}`}>
                            <Link onClick={() => handleOnLink(link.name)} href={link.page}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* plan, saved */}
                <div className="flex gap-4 items-center justify-end text-xs">
                    <Link href={"/my-plan"} onClick={() => handleOnLink("My Plan")}>
                        <div className="flex gap-2 items-center hover:bg-gray-900 active:scale-95 rounded-full px-2 py-1">
                            <p>Plan</p>
                            <p className="bg-lime-400 rounded-full px-2 py-0.5 font-bold text-center text-black">{plan.length}</p>
                        </div>
                    </Link>

                    
                    <Link href={"/my-plan"} onClick={() => handleOnLink("My Plan")}>
                        <div className="flex gap-2 items-center  hover:bg-gray-900 active:scale-95 rounded-full px-2 py-1">
                            <p className="text-gray-300">Saved</p>
                            <p className="outline-2 outline-gray-500/30 rounded-full px-2 py-0.5 text-center">{saved.length}</p>
                        </div>
                    </Link>
                </div>

            </div>

            {/* clipping boundary wrapper */}
            <div className={`absolute left-0 top-full w-full h-[calc(100dvh-100%)] overflow-hidden md:hidden 
            ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>

                {/* sliding dropdown panel */}
                <div className={`w-full h-full bg-black/95 backdrop-blur-xl flex flex-col items-center gap-8 transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>

                    <ul className="flex flex-col text-lime-400 justify-start items-center gap-2 mt-20 text-lg">
                        {navlinks.map((link) => (
                            <li key={link.name} className="w-full text-center text-2xl hover:text-lime-500 active:scale-95">
                                <Link onClick={() => setIsOpen(false)} href={link.page}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link onClick={() => setIsOpen(false)} href={"/"}>
                        <button className="flex items-center gap-2 bg-lime-400 rounded-full px-4 py-2 text-black font-bold
                        hover:bg-lime-500 active:scale-95">
                            <RiHome2Line />Return Home
                        </button>
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Nav