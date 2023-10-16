import React from 'react';
import { NavIcon } from '../components/NavBar';
import { MdSearch } from 'react-icons/md';
import { Friend } from '../components/Friends';

const Friends = () => {
  return (
    <div>
      <div className="px-2 py-1 bg-white flex gap-4 flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-black font-bold text-2xl">Friends</h2>
          <div className="flex justify-between gap-3">
            <NavIcon icon={<MdSearch size={'1.5rem'} />} isColored />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-gray font-bold text-md bg-gray-400 py-2 px-2 rounded-full">
            Suggestions
          </button>
          <button className="bg-gray font-bold text-md bg-gray-400 py-2 px-2 rounded-full">
            Your friends
          </button>
        </div>
        <div className="flex justify-between bg-white">
          <span className="font-bold text-lg">Friend request 14</span>
          <span className="text-cyan-600">See all</span>
        </div>
      </div>
      <div className="bg-white">
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
      <div className="flex justify-between bg-white pt-4">
        <span className="font-bold text-lg">People you may know</span>
      </div>
      <div className="bg-white">
        <Friend isAddFriend />
        <Friend isAddFriend />
        <Friend isAddFriend />
        <Friend isAddFriend />
        <Friend isAddFriend />
      </div>
    </div>
  );
};

export default Friends;
