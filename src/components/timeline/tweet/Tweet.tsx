import  { useState } from 'react';
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
  const [commentCount, setCommentCount] = useState(parseInt(comments));
  const [retweetCount, setRetweetCount] = useState(parseInt(retweets));
  const [likeCount, setLikeCount] = useState(parseInt(likes));
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleRetweet = () => {
    if (isRetweeted) {
      setRetweetCount(retweetCount - 1);
    } else {
      setRetweetCount(retweetCount + 1);
    }
    setIsRetweeted(!isRetweeted);
  };

  const handleComment = () => {
    setCommentCount(commentCount + 1);
  };

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
          <button 
            onClick={handleComment}
            className="flex items-center hover:text-blue-500 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            <span>{commentCount}</span>
          </button>
          <button 
            onClick={handleRetweet}
            className={`flex items-center hover:text-green-500 transition-colors duration-200 ${isRetweeted ? 'text-green-500' : ''}`}
          >
            <Repeat2 className="w-5 h-5 mr-1" />
            <span>{retweetCount}</span>
          </button>
          <button 
            onClick={handleLike}
            className={`flex items-center hover:text-pink-500 transition-colors duration-200 ${isLiked ? 'text-pink-500' : ''}`}
          >
            <Heart className="w-5 h-5 mr-1" />
            <span>{likeCount}</span>
          </button>
          <button className="hover:text-blue-500 transition-colors duration-200">
            <Share className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}