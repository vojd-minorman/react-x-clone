import { ArrowLeft, Calendar, Globe, Link, MapPin, MoreHorizontal } from 'lucide-react'

export default function ProfileHeader() {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center p-4 border-b border-gray-800">
        <ArrowLeft className="w-5 h-5 mr-8" />
        <div>
          <h1 className="font-bold text-xl">Répertoire d'Ecrits et Ecrivains Congolais</h1>
          <p className="text-gray-500 text-sm">18 messages</p>
        </div>
      </div>
      <div className="relative">
        <div className="h-32 bg-gray-800"></div>
        <img 
          src="/placeholder.svg?height=100&width=100" 
          alt="Profile" 
          className="absolute bottom-0 left-4 transform translate-y-1/2 w-24 h-24 rounded-full border-4 border-black"
        />
      </div>
      <div className="mt-16 px-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h2 className="font-bold text-xl">Répertoire d'Ecrits et Ecrivains Congolais</h2>
            <p className="text-gray-500">@reeccongolais</p>
          </div>
          <button className="px-4 py-2 border border-gray-600 rounded-full font-bold">
            Modifier le profil
          </button>
        </div>
        <p className="mt-3">
          base de données de promotions d'ouvrages et publications d'articles scientifiques
        </p>
        <div className="flex flex-wrap mt-2 text-gray-500">
          <div className="flex items-center mr-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span>République Démocratique Du Congo</span>
          </div>
          <div className="flex items-center mr-4">
            <Link className="w-4 h-4 mr-1" />
            <a href="https://reecco.org" className="text-blue-400 hover:underline">reecco.org</a>
          </div>
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Inscrit en février 2020</span>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="mr-4">
            <span className="font-bold">34</span> <span className="text-gray-500">Suivant</span>
          </div>
          <div>
            <span className="font-bold">9</span> <span className="text-gray-500">abonnés</span>
          </div>
        </div>
      </div>
    </div>
  )
}