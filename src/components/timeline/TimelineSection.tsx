import { useEffect, useState } from 'react';
import Tweet from "./tweet/Tweet";
import TweetEditor from "./tweetEditor/TweetEditor";
import data from '../../../data.json';

interface User {
  id: string;
  name: string;
  username: string;
  profileImage: string;
}

interface TweetData {
  id: string;
  userId: string;
  text: string;
  createdAt: string;
  comments: string;
  retweets: string;
  likes: string;
  tweetImage?: string;
}

export default function TimelineSection() {
    const [tweets, setTweets] = useState<(TweetData & { user: User })[]>([]);

    useEffect(() => {
        const processedTweets = data.tweets.map(tweet => {
            const user = data.users.find(user => user.id === tweet.userId);
            if (!user) throw new Error(`User not found for tweet ${tweet.id}`);
            return { ...tweet, user };
        });
        setTweets(processedTweets);
    }, []);

    return (
        <div className='w-full'>
            <TweetEditor />
            {tweets.map(tweet => (
                <Tweet
                    key={tweet.id}
                    name={tweet.user.name}
                    username={`@${tweet.user.username}`}
                    userImage={tweet.user.profileImage}
                    createdAt={new Date(tweet.createdAt).toLocaleDateString()}
                    text={tweet.text}
                    tweetImage={tweet.tweetImage}
                    comments={tweet.comments}
                    retweets={tweet.retweets}
                    likes={tweet.likes}
                />
            ))}
        </div>
    )
}