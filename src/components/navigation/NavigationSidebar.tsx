import AccountHeader from "./AccountHeader";
import NavList from "./NavList";


export default function NavigationSidebar() {
    return (
        <div className='navigation flex flex-col'>

            <ul className='flex flex-col'>
                <div className="pb-6">
                    <img src="/social.png" alt="" className="w-10" />
                </div>
                <NavList
                    images="/nichoir.png"
                    text="Home"
                />
                <NavList
                    images="/hashtags.png"
                    text="Explore"
                />
                <NavList
                    images="/cloche.png"
                    text="Notifications"
                />
                <NavList
                    images="/courrier.png"
                    text="Messages"
                />
                <NavList
                    images="/texte.png"
                    text="Lists"
                />
                <NavList
                    images="/utilisateur.png"
                    text="Profile"
                />
                <div className="py-8">
                    <button className="btn-tweet px-16 py-2 rounded-full">Tweet</button>
                </div>

            </ul>
            <div className="">
            <AccountHeader 
  name="Autre Nom" 
  username="@autre_nom" 
  isPrivate={false}
  profileImageUrl="/profile-photo.png"
/>
            </div>
            
        </div>
    )
}