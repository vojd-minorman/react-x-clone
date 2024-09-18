import React from 'react';
import TweetEditorActions from './TweetEditorActions';
import TweetButton from './TweetButton';

const TweetEditorForm: React.FC = () => {
  return (
    <form className="flex-auto">
      <div>
        <textarea
          className="w-full h-[60px] border-none outline-none text-xl bg-black text-white resize-none py-2.5 my-3.5"
          draggable="false"
          name="tweet"
          id="tweet"
          placeholder="What's happening?"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <TweetEditorActions />
        <TweetButton />
      </div>
    </form>
  );
};

export default TweetEditorForm;