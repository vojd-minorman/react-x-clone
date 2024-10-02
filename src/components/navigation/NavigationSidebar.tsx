import AccountHeader from "./AccountHeader";
import NavList from "./NavList";

export default function NavigationSidebar() {
    return (
        <div className='navigation  top-0 left-0 h-screen flex flex-col justify-between p-4 lg:w-1/4 xl:w-1/5'>
            <div>
                <div className="pb-6">
                    <img src="/twitter.png" alt="Logo" className="imgNav" />
                </div>
                <nav>
                    <ul className='flex flex-col space-y-2'>
                        <NavList images="/nichoir.png" text="Home" />
                        <NavList images="/hashtags.png" text="Explore" />
                        <NavList images="/cloche.png" text="Notifications" />
                        <NavList images="/courrier.png" text="Messages" />
                        <NavList images="/texte.png" text="Lists" />
                        <NavList images="/utilisateur.png" text="Profile" />
                    </ul>
                </nav>
                <div className="py-8">
                    <button className="btn-tweet px-16 py-2 rounded-full ">Tweet</button>
                </div>
            </div>
            <AccountHeader 
                name="Bradley Ortiz" 
                username="@bradley" 
                isPrivate={false}
                profileImageUrl="/profile-photo.png"
            />
        </div>
    )
}