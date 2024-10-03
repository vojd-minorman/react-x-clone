import { Lock, MoreHorizontal } from "lucide-react"
import { Link } from 'react-router-dom'

interface AccountHeaderProps {
  name: string
  username: string
  isPrivate: boolean
  profileImageUrl: string
}

const defaultProps: AccountHeaderProps = {
  name: "Neville Mitshiabu",
  username: "@vojdminorman",
  isPrivate: false,
  profileImageUrl: "/profile-photo.png"
}

export default function AccountHeader({ 
  name,
  username,
  isPrivate,
  profileImageUrl
}: AccountHeaderProps = defaultProps) {
  return (
    <Link to={`/profile/${username.replace('@', '')}`} className="block">
      <div className="flex items-center justify-between p-3 text-white hover:bg-gray-800 rounded-full transition-colors duration-200">
        <div className="flex items-center space-x-3">
          <img
            src={profileImageUrl}
            alt={`${name}'s profile picture`}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center">
              <h2 className="font-bold text-sm">{name}</h2>
              {isPrivate && <Lock className="w-4 h-4 ml-1 text-gray-400" />}
            </div>
            <p className="text-sm text-gray-400">{username}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </Link>
  )
}