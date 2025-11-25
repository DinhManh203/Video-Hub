import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "./search-input";
import AuthButton from "@/modules/auth/components/auth-button";

const HomeNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
            <div className="flex items-center gap-4 w-full">
                {/* Menu và Logo  */}
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger />
                    <Link href="/">
                        <div className="flex items-center gap-2 p-4">
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={36}
                                height={36}
                                className="object-contain"
                            />
                            <p className="text-xl font-semibold tracking-tight bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                                SamSora
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Thanh tìm kiếm  */}
                <div className="flex-1 flex justify-center max-w-[720px]">
                    <SearchInput />
                </div>

                <div className="flex-shrink-0 items-center flex gap-4">
                    <AuthButton />
                </div>
            </div>
        </nav>
    );
}

export default HomeNavbar;