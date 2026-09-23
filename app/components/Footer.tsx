import Image from "next/image"
import logo from "@/app/assets/logo.png"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className=" border-t border-gray-500/80 bg-[#090A0D] py-8">

            {/* content frame */}
            <div className="content-box-s flex flex-col items-center justify-between gap-4
            md:content-box md:flex-row">

                {/* logo */}
                <div >
                    <Link href={"/"} className="flex gap-2 items-center">
                        <Image src={logo} alt="FITLOG Logo" width={28} height={28} className="w-5 h-auto"/>
                        <p className="font-oswald font-extrabold">FITLOG</p>
                    </Link>
                </div>

                <p className="text-gray-500 text-center text-xs">© 2026 FitLog — Workout Library. Train hard, log honest.</p>

            </div>
        </footer>
    )
}

export default Footer