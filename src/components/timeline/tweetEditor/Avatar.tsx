import React from 'react';

const Avatar: React.FC = () => {
  return (
    <div className="flex-none w-[70px]">
      <img src="profile-photo.png" alt="avatar" className="max-w-full max-h-[100px] rounded-full" />
    </div>
  );
};

export default Avatar;