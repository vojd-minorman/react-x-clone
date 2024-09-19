import Tweet from "./tweet/Tweet";
import TweetEditor from "./tweetEditor/TweetEditor";



export default function TimelineSection() {
    return (
        <div className=''>

            <div className=''>
                <TweetEditor />
                <Tweet
                    name="CNN"
                    username="@CNN"
                    userImage="tweet-profile-photo.png"
                    createdAt="7m"
                    text='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.'
                    comments="57"
                    retweets="144"
                    likes="184"
                />
                
                <Tweet
                    name="The New York Times"
                    username="@nytimes"
                    userImage="nytimes-avatar.png"
                    createdAt="2h"
                    text="Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land"
                    tweetImage="tweet-image.png"
                    comments="19"
                    retweets="48"
                    likes="482"
                />
                <Tweet
                    name="Twitter"
                    username="@Twitter"
                    userImage="tweeter-avatar.png"
                    createdAt="Oct 29"
                    text="BIG NEWS lol jk still Twitter"
                    comments="6.8k"
                    retweets="36.6k"
                    likes="267.1k"
                />
                <Tweet
                    name="Twitter"
                    username="@Twitter"
                    userImage="tweeter-avatar.png"
                    createdAt="Oct 4"
                    text="hello literally everyone"
                    comments="118.7k"
                    retweets="785.4k"
                    likes="3.3M"
                />
                <Tweet
                    name="Twitter"
                    username="@Twitter"
                    userImage="tweeter-avatar.png"
                    createdAt="Oct 4"
                    text="hello literally everyone"
                    comments="118.7k"
                    retweets="785.4k"
                    likes="3.3M"
                    tweetImage="tweet-image.png"
                />
            </div>
        </div>

    )
}