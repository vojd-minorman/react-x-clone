import { Link } from 'react-router-dom';
import { MessageCircle, Repeat2, Heart, Share } from 'lucide-react';

interface TweetProps {
  name: string;
  username: string;
  userImage: string;
  createdAt: string;
  text: string;
  tweetImage?: string;
  comments: string;
  retweets: string;
  likes: string;
}

export default function Tweet({
  name,
  username,
  userImage,
  createdAt,
  text,
  tweetImage,
  comments,
  retweets,
  likes
}: TweetProps) {
  return (
    <div className="border-b border-gray-800 py-4 sm:p-4 flex">
      <Link to={`/profile/${username.replace('@', '')}`} className="flex-shrink-0 mr-3">
        <img src={userImage} alt={name} className="w-12 h-12 rounded-full" />
      </Link>
      <div className="flex-grow">
        <div className="flex items-center">
          <Link to={`/profile/${username.replace('@', '')}`} className="font-bold hover:underline">{name}</Link>
          <span className="text-gray-500 ml-2">{username}</span>
          <span className="text-gray-500 mx-1">·</span>
          <span className="text-gray-500">{createdAt}</span>
        </div>
        <p className="mt-2 mb-2">{text}</p>
        {tweetImage && <img src={tweetImage} alt="Tweet content" className="rounded-2xl max-h-80 w-full object-cover mb-3" />}
        <div className="flex justify-between text-gray-500 mt-3">
          <div className="flex items-center">
            <MessageCircle className="w-5 h-5 mr-1" />
            <span>{comments}</span>
          </div>
          <div className="flex items-center">
            <Repeat2 className="w-5 h-5 mr-1" />
            <span>{retweets}</span>
          </div>
          <div className="flex items-center">
            <Heart className="w-5 h-5 mr-1" />
            <span>{likes}</span>
          </div>
          <Share className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}