import React from 'react';
import Avatar from './Avatar';
import TweetEditorForm from './TweetEditorForm';

const TweetEditor: React.FC = () => {
  return (
    <section className="flex items-start justify-start gap-5 p-3 border-b border-[#2F3336]">
      <Avatar />
      <TweetEditorForm />
    </section>
  );
};

export default TweetEditor;