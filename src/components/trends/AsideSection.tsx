import SearchBar from "./SearchBar";
import TrendsForYou from "./TrendForYou";
import WhoToFollow from "./WhoToFollow";


export default function AsideSection() {
    return (
        <div className='navigation px-8'>
            <div className="py-4">
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