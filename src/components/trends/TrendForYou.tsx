import { Settings, MoreHorizontal } from "lucide-react"

interface Trend {
  hashtag: string
  location: string
  tweetCount: number
}

const trends: Trend[] = [
  { hashtag: "#SQUID", location: "Turkey", tweetCount: 2066 },
  { hashtag: "#SQUID", location: "Turkey", tweetCount: 2066 },
  { hashtag: "#SQUID", location: "Turkey", tweetCount: 2066 },
  { hashtag: "#SQUID", location: "Turkey", tweetCount: 2066 },
]

export default function TrendsForYou() {
  return (
    <div className="bg-[#202327] text-white rounded-xl p-4 w-80">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Trends for you</h2>
        <Settings className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>
      <ul className="space-y-4">
        {trends.map((trend, index) => (
          <li key={index} className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500">Trending in {trend.location}</p>
              <p className="font-bold">{trend.hashtag}</p>
              <p className="text-xs text-gray-500">{trend.tweetCount.toLocaleString()} Tweets</p>
            </div>
            <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
          </li>
        ))}
      </ul>
      <button 
        className="text-blue-400 mt-4 p-0 text-sm font-normal hover:underline focus:outline-none"
      >
        Show more
      </button>
    </div>
  )
}