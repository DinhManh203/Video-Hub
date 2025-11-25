import { SearchIcon } from "lucide-react";

const SearchInput = () => {
    return ( 
        <form className="flex w-full max-w-[600px]">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="w-full pl-4 py-2 pr-12 rounded-l-[8px] border focus:outline-none focus:border-slate-400"
                />
            </div>
            <button 
                type="submit"
                className="px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-[8px] hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <SearchIcon size={16} className="text-slate-500" />
            </button>
        </form>
     );
}
 
export default SearchInput;