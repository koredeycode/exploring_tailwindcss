import React from 'react';
import { Message } from '../components/Messages';
import { NavIcon } from '../components/NavBar';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdSearch, MdOutlineSettings } from 'react-icons/md';
import profilepic from '../assets/profilepic.png';

export const Avatar = () => {
  return (
    <div className="relative h-full w-[70px] shrink-0 p-1">
      <div className="absolute w-4 h-4 bg-green-400 rounded-full right-1 bottom-3 ring-2 ring-white"></div>
      <img
        className="rounded-full ring-2 ring-gray-400 w-[70px]"
        src={profilepic}
      />
      <h3 className="text-gray-500 text-center mt-1">Lawal</h3>
    </div>
  );
};

const Messages = () => {
  return (
    <div className="">
      <div className="flex justify-between items-end mb-[1px] p-2 bg-white">
        <h2 className="text-black font-bold text-2xl">Messages</h2>
        <div className="flex justify-between gap-3">
          <NavIcon icon={<MdOutlineSettings size={'1.5rem'} />} isColored />
          <NavIcon icon={<MdSearch size={'1.5rem'} />} isColored />
        </div>
      </div>
      <div className="fixed bottom-[2rem] right-4 lg:right-[50vh] rounded-full h-[60px] w-[60px] bg-cyan-600 text-white font-bold z-10 cursor-pointer flex items-center justify-center">
        <AiOutlinePlus size={'1rem'} />
      </div>
      <div className="flex gap-4 flex-nowrap overflow-x-scroll overflow-y-auto scrollbar-hidden h-[100px] bg-white p-2 my-2">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
