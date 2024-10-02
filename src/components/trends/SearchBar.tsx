import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="w-full bg-[#202327] text-white placeholder-gray-500 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search Twitter"
        aria-label="Search Twitter"
      />
    </div>
  )
}