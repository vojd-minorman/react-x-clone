import { Lock, MoreHorizontal } from "lucide-react"

interface AccountHeaderProps {
  name: string
  username: string
  isPrivate: boolean
  profileImageUrl: string
}

const defaultProps: AccountHeaderProps = {
  name: "Bradley Ortiz",
  username: "@bradley_",
  isPrivate: true,
  profileImageUrl: "/placeholder.svg?height=40&width=40"
}

export default function AccountHeader({ 
  name,
  username,
  isPrivate,
  profileImageUrl
}: AccountHeaderProps = defaultProps) {
  return (
    <div className="flex items-center justify-between p-3 text-white">
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
  )
}