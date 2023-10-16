import React from 'react';
import profilepic from '../../assets/profilepic.png';

const Friend = ({ isAddFriend }) => {
  return (
    <div className="flex flex-row p-2 gap-2 items-end mt-1 mx-2 mb-2">
      <img
        src={profilepic}
        alt="profilepic"
        className="rounded-full ring-1 ring-gray w-[90px] h-[90px]"
      />
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-lg">Lawal Olamide</span>
          <span className="text-xs text-gray-500">10w</span>
        </div>
        <div className="flex items-center">
          <img
            src={profilepic}
            alt=""
            className="w-[30px] h-[30px] object-contain rounded-full ring-white z-10 ring-2"
          />
          <img
            src={profilepic}
            alt=""
            className="w-[30px] h-[30px] object-contain rounded-full ring-gray -ml-1"
          />
          <span className="text-gray-500 text-md ml-2">15 mutual friends</span>
        </div>
        <div className="flex-1 flex justify-between gap-2 font-bold text-md">
          <button className="flex-1 bg-cyan-600 px-3 py-1 rounded-lg text-white">
            {isAddFriend ? 'Add friend' : 'Confirm'}
          </button>
          <button className="flex-1 bg-gray-300 px-4 py-2 rounded-lg">
            {isAddFriend ? 'Remove' : 'Reject'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
