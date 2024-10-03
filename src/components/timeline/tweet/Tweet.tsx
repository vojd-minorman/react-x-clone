import React, { useState } from 'react';
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

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (isNaN(diffInSeconds)) {
    console.error('Invalid date:', dateString);
    return 'Date invalide';
  }

  const intervals = [
    { label: 'an', seconds: 31536000 },
    { label: 'mois', seconds: 2592000 },
    { label: 'sem', seconds: 604800 },
    { label: 'j', seconds: 86400 },
    { label: 'h', seconds: 3600 },
    { label: 'min', seconds: 60 },
    { label: 's', seconds: 1 }
  ];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      if (interval.label === 'mois' || interval.label === 'an') {
        return `il y a ${count} ${interval.label}${count > 1 ? 's' : ''}`;
      } else {
        return `il y a ${count}${interval.label}`;
      }
    }
  }

  return 'à l\'instant';
}

function truncateUsername(username: string): string {
  if (username.length > 5) {
    return username.slice(0, 5) + '...';
  }
  return username;
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

  const truncatedUsername = truncateUsername(username);

  return (
    <div className="border-b border-gray-800 ">
      <div className='p-4 flex'>
      <Link to={`/profile/${username.replace('@', '')}`} className="flex-shrink-0 mr-3">
        <img src={userImage} alt={name} className="w-12 h-12 rounded-full" />
      </Link>
      <div className="flex-grow">
        <div className="flex items-center">
          <Link to={`/profile/${username.replace('@', '')}`} className="font-bold hover:underline">{name}</Link>
          <span className="text-gray-500 ml-2" title={username}>{truncatedUsername}</span>
          <span className="text-gray-500 mx-1">·</span>
          <span className="text-gray-500">{getRelativeTime(createdAt)}</span>
        </div>
        <p className="mt-2 mb-2">{text}</p>
        {tweetImage && <img src={tweetImage} alt="Tweet content" className="rounded-2xl max-h-80 w-full object-cover mb-3" />}
        <div className="flex justify-between text-gray-500 mt-3">
          <button 
            onClick={handleComment}
            className="flex items-center hover:text-blue-500 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            <span>{formatNumber(commentCount)}</span>
          </button>
          <button 
            onClick={handleRetweet}
            className={`flex items-center hover:text-green-500 transition-colors duration-200 ${isRetweeted ? 'text-green-500' : ''}`}
          >
            <Repeat2 className="w-5 h-5 mr-1" />
            <span>{formatNumber(retweetCount)}</span>
          </button>
          <button 
            onClick={handleLike}
            className={`flex items-center hover:text-pink-500 transition-colors duration-200 ${isLiked ? 'text-pink-500' : ''}`}
          >
            <Heart className="w-5 h-5 mr-1" />
            <span>{formatNumber(likeCount)}</span>
          </button>
          <button className="hover:text-blue-500 transition-colors duration-200">
            <Share className="w-5 h-5" />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}