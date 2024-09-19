import { Heart, MessageCircle, Repeat, Share } from 'lucide-react'

interface TweetProps {
  name: string
  username: string
  createdAt: string
  userImage? : string
  text: string
  tweetImage?: string
  comments?: string
  retweets?: string
  likes?: string
}

export default function Tweet({
  name,
  username,
  createdAt,
  userImage,
  text,
  tweetImage,
  comments,
  retweets,
  likes
}: TweetProps) {
  return (
    <article className="flex justify-between gap-5 py-6 border-b border-[#2F3336]">
      <div className="flex-none w-[70px] h-[70px]">
        <img
          src={userImage}
          alt="User avatar"
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-8 w-full p-0">
        <div className="flex flex-col gap-2">
          <div className="flex justify-start items-center gap-2.5 text-base">
            <h2 className="text-base font-semibold">{name}</h2>
            <div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M17.75 9.41667C17.75 8.1 17.0208 6.95833 15.96 6.41667C16.0883 6.05417 16.1583 5.6625 16.1583 5.25C16.1583 3.40833 14.7333 1.91833 12.9767 1.91833C12.585 1.91833 12.21 1.98833 11.8633 2.12667C11.3483 1.0125 10.2583 0.25 9 0.25C7.74166 0.25 6.65333 1.01417 6.13583 2.125C5.78999 1.9875 5.41416 1.91667 5.02249 1.91667C3.26416 1.91667 1.84083 3.40833 1.84083 5.25C1.84083 5.66167 1.90999 6.05333 2.03833 6.41667C0.978327 6.95833 0.249161 8.09833 0.249161 9.41667C0.249161 10.6625 0.900828 11.7483 1.86749 12.3217C1.85083 12.4633 1.84083 12.605 1.84083 12.75C1.84083 14.5917 3.26416 16.0833 5.02249 16.0833C5.41416 16.0833 5.78916 16.0117 6.13499 15.875C6.65166 16.9867 7.73999 17.75 8.99916 17.75C10.2592 17.75 11.3475 16.9867 11.8633 15.875C12.2092 16.0108 12.5842 16.0817 12.9767 16.0817C14.735 16.0817 16.1583 14.59 16.1583 12.7483C16.1583 12.6033 16.1483 12.4617 16.1308 12.3208C17.0958 11.7483 17.75 10.6625 17.75 9.4175V9.41667ZM12.2367 6.63833L8.625 12.055C8.50416 12.2358 8.30666 12.3333 8.10416 12.3333C7.98499 12.3333 7.86416 12.3 7.75749 12.2283L7.66166 12.15L5.64916 10.1375C5.40499 9.89333 5.40499 9.4975 5.64916 9.25417C5.89333 9.01083 6.28916 9.00917 6.53249 9.25417L8.00749 10.7267L11.195 5.94333C11.3867 5.65583 11.775 5.58 12.0617 5.77083C12.35 5.9625 12.4283 6.35083 12.2367 6.6375V6.63833Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <p className="text-[#6E767D]">
              <a href="">{username}</a>
            </p>
            <p className="text-[#6E767D]">.</p>
            <p className="text-[#6E767D]">{createdAt}</p>
          </div>
          <p className="text-[#D9D9D9] text-base">{text}</p>
          {tweetImage && (
            <div className="w-full pt-1.5">
              <img
                src={tweetImage}
                alt="Tweet Image"
                className="max-w-full h-auto rounded-[20px] border border-[#2F3336]"
              />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-12 text-gray-500 text-base">
          <p className="flex items-center justify-center gap-5">
            <MessageCircle className="w-4 h-4 text-[#6E767D]" />
           <span>{comments}</span>
          </p>
          <p className="flex items-center justify-center gap-5">
            <Repeat className="w-5 h-5 text-[#6E767D]" />
            <span>{retweets}</span>
          </p>
          <p className="flex items-center justify-center gap-5">
            <Heart className="w-5 h-5 text-[#6E767D]" />
            <span>{likes}</span>
          </p>
          <p className="flex items-center justify-center gap-5">
            <Share className="w-4 h-4 text-[#6E767D]" />
            <span>0</span>
          </p>
        </div>
      </div>
    </article>
  )
}