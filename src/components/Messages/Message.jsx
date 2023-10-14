import React from 'react';
import profilepic from '../../assets/profilepic.png';

const Message = () => {
  return (
    <div className="flex p-4 justify-start bg-white gap-4">
      <div className="relative">
        <div className="absolute w-4 h-4 bg-green-400 rounded-full -right-2 bottom-1 ring-2 ring-white"></div>
        <img
          className="rounded-full ring-2 ring-gray-400 w-[50px]"
          src={profilepic}
        />
      </div>
      <div>
        <h2 className="text-xl">Lawal Olamide</h2>
        <p className="text-gray-500 truncate">Send your account details</p>
      </div>
    </div>
  );
};

export default Message;
