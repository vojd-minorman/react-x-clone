import { ArrowLeft, Calendar, Link, MapPin} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface ProfileHeaderProps {
  name: string
  username: string
  bio: string
  location?: string
  website?: string
  joinDate: string
  followers: number
  following: number
  profileImage: string
  coverImage?: string
  tweetsCount: number
}

export default function ProfileHeader({
  name,
  username,
  bio,
  location,
  website,
  joinDate,
  followers,
  following,
  profileImage,
  coverImage,
  tweetsCount
}: ProfileHeaderProps) {
  const navigate = useNavigate()

  return (
    <div className="bg-black text-white">
      <div className="flex items-center p-4 border-b border-gray-800">
        <button onClick={() => navigate(-1)} className="mr-8">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="text-gray-500 text-sm">{tweetsCount} tweets</p>
        </div>
      </div>
      <div className="relative">
        <div className="h-32 bg-gray-800">
          {coverImage && <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />}
        </div>
        <img 
          src={`/${profileImage}`} 
          alt={`${name}'s profile`}
          className="absolute bottom-0 left-4 transform translate-y-1/2 w-24 h-24 rounded-full border-4 border-black"
        />
      </div>
      <div className="mt-16 px-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h2 className="font-bold text-xl">{name}</h2>
            <p className="text-gray-500">@{username}</p>
          </div>
          <button className="px-4 py-2 border border-gray-600 rounded-full font-bold">
            Modifier le profil
          </button>
        </div>
        <p className="mt-3">{bio}</p>
        <div className="flex flex-wrap mt-2 text-gray-500">
          {location && (
            <div className="flex items-center mr-4">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{location}</span>
            </div>
          )}
          {website && (
            <div className="flex items-center mr-4">
              <Link className="w-4 h-4 mr-1" />
              <a href={website} className="text-blue-400 hover:underline">{website}</a>
            </div>
          )}
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Inscrit en {joinDate}</span>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="mr-4">
            <span className="font-bold">{following}</span> <span className="text-gray-500">Suivant</span>
          </div>
          <div>
            <span className="font-bold">{followers}</span> <span className="text-gray-500">abonnés</span>
          </div>
        </div>
      </div>
    </div>
  )
}