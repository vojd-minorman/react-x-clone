import TrendsForYou from "./TrendForYou";
import WhoToFollow from "./WhoToFollow";


export default function AsideSection() {
    return (
        <div className='navigation'>
            <div className="px-8 py-4">
            <TrendsForYou/>
            </div>
            <div className="px-8 py-4">
                <WhoToFollow/>
            </div>
        
    </div>
    )
}