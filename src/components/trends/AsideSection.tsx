import SearchBar from "./SearchBar";
import TrendsForYou from "./TrendForYou";
import WhoToFollow from "./WhoToFollow";

export default function AsideSection() {
    return (
        <div className='w-full p-4 lg:px-0 sm:ml-4'>
            <div className="py-4 pr-6">
                <SearchBar/>
            </div>
            <div className="py-4">
                <TrendsForYou/>
            </div>
            <div className="py-4">
                <WhoToFollow/>
            </div>
        </div>
    )
}