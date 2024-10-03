import { useParams } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import Tweet from '../timeline/tweet/Tweet';

export default function Profile() {
  const { username } = useParams<{ username: string }>();

  // In a real app, you'd fetch user data and tweets based on the username
  const userData = {
    name: "Sample User",
    username: username || "@sampleuser",
    bio: "This is a sample bio",
    followers: 1000,
    following: 500,
    joinDate: "January 2020",
  };

  return (
    <div>
      <ProfileHeader 
        name={userData.name}
        username={userData.username}
        bio={userData.bio}
        followers={userData.followers}
        following={userData.following}
        joinDate={userData.joinDate}
      />
      <div className="border-t border-gray-800 pt-4">
        <Tweet
          name={userData.name}
          username={userData.username}
          userImage="/placeholder.svg?height=48&width=48"
          createdAt="1h"
          text="This is a sample tweet on the user's profile."
          comments="5"
          retweets="10"
          likes="20"
        />
        {/* Add more tweets as needed */}
      </div>
    </div>
  );
}