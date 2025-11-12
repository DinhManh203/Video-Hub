import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

const HomeNavbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
            <div className="flex items-center gap-4 w-full">
                {/* Menu và Logo  */}
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger />
                    <Link href="/">
                        <div className="p-4 flex items-center gap-1">
                            <Image src={"/images/logo.png"} alt="Logo" width={32} height={32} />
                            <p className="text-xl font-semibold tracking-tight bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                                SamSora
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomeNavbar;