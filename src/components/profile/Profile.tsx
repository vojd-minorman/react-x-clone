import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProfileHeader from './ProfileHeader';
import Tweet from '../timeline/tweet/Tweet';
import data from '../../../data.json';

interface UserData {
  id: string;
  name: string;
  username: string;
  profileImage: string;
  bio: string;
  location?: string;
  website?: string;
  joinDate: string;
  followers: number;
  following: number;
  coverImage?: string;
  tweetsCount: number;
}

interface UserTweet {
  id: string;
  userId: string;
  text: string;
  createdAt: string;
  comments: string;
  retweets: string;
  likes: string;
  tweetImage?: string;
}

export default function Profile() {
  const { username } = useParams<{ username: string }>();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userTweets, setUserTweets] = useState<UserTweet[]>([]);

  useEffect(() => {
    const user = data.users.find(u => u.username === username);
    if (user) {
      setUserData(user);
      const tweets = data.tweets.filter(t => t.userId === user.id);
      setUserTweets(tweets);
    }
  }, [username]);

  if (!userData) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div>
      <ProfileHeader 
        name={userData.name}
        username={userData.username}
        bio={userData.bio}
        location={userData.location}
        website={userData.website}
        joinDate={userData.joinDate}
        followers={userData.followers}
        following={userData.following}
        profileImage={userData.profileImage}
        coverImage={userData.coverImage}
        tweetsCount={userData.tweetsCount}
      />
      <div className="border-t border-gray-800 pt-4">
        {userTweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            name={userData.name}
            username={`@${userData.username}`}
            userImage={`/${userData.profileImage}`}
            createdAt={new Date(tweet.createdAt).toLocaleDateString()}
            text={tweet.text}
            comments={tweet.comments}
            retweets={tweet.retweets}
            likes={tweet.likes}
            {...(tweet.tweetImage ? { tweetImage: `/${tweet.tweetImage}` } : {})}
          />
        ))}
      </div>
    </div>
  );
}