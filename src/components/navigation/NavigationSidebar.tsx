import { Link } from 'react-router-dom';
import AccountHeader from "./AccountHeader";
import NavList from "./NavList";

export default function NavigationSidebar() {
    return (
        <div className='navigation flex flex-col justify-between h-screen p-4'>
            <div >
                <ul className='flex flex-col'>
                    <div className="pb-6">
                        <Link to="/">
                            <img src="/social.png" alt="Logo" className="w-10" />
                        </Link>
                    </div>
                    <NavList
                        images="/nichoir.png"
                        text="Home"
                        to="/"
                    />
                    <NavList
                        images="/hashtags.png"
                        text="Explore"
                        to="/explore"
                    />
                    <NavList
                        images="/cloche.png"
                        text="Notifications"
                        to="/notifications"
                    />
                    <NavList
                        images="/courrier.png"
                        text="Messages"
                        to="/messages"
                    />
                    <NavList
                        images="/texte.png"
                        text="Lists"
                        to="/lists"
                    />
                    <NavList
                        images="/utilisateur.png"
                        text="Profile"
                        to="/profile/vojdminorman"
                    />
                    <div className="py-8">
                        <button className="btn-tweet px-16 py-2 rounded-full">Tweet</button>
                    </div>
                </ul>
            </div>
            <div className="">
                <AccountHeader 
                    name="Neville Mitshiabu" 
                    username="@vojdminorman" 
                    isPrivate={false}
                    profileImageUrl="/profile-photo.png"
                />
            </div>
        </div>
    )
}