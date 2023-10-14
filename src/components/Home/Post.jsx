import { FaRegCommentAlt } from 'react-icons/fa';
import { MdThumbUp, MdOutlineThumbUp } from 'react-icons/md';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { PiShareFat } from 'react-icons/pi';
import profilepic from '../../assets/profilepic.png';

const btn1 = (
  <MdOutlineThumbUp className="text-gray.400 rounded-full p-1" size="1.5rem" />
);
const btn2 = (
  <FaRegCommentAlt className="text-gray.400 rounded-full p-1" size="1.5rem" />
);
const btn3 = (
  <PiShareFat className="text-gray.400 rounded-full p-1" size="1.5rem" />
);

function PostButtons({ count, icon }) {
  return (
    <button className="bg-gray-400 w-[calc(100%/3)] rounded-2xl flex justify-center py-1 items-center">
      <div className="flex gap-1 mt-2 ml-2 items-center">
        {icon}
        <span>{count}</span>
      </div>
    </button>
  );
}

export default function Post() {
  return (
    <div className="h-[500px] my-1 bg-white">
      <div className="flex justify-between items-start p-4">
        <div className="flex gap-4">
          <img
            src={profilepic}
            className="rounded-full object-contain h-[50px] w-[50px]"
          />
          <div className="flex flex-col">
            <p className="font-bold">Lawal Olamide</p>
            <p className="text-sm text-gray-500">1hr ago</p>
          </div>
        </div>
        <button>
          <AiOutlineEllipsis size="1.5rem" />
        </button>
      </div>
      <div className="px-4">
        <p>
          Let's fucking go
          <br /> This is it.
        </p>
      </div>
      <img src={profilepic} className="" />
      <div className="flex gap-1 mt-2 ml-2">
        <MdThumbUp
          className="text-white bg-cyan-600 rounded-full p-1"
          size="1.25rem"
        />
        <span>26k</span>
      </div>
      <div className="flex justify-around gap-4 mx-2 mt-2">
        <PostButtons icon={btn1} count="26k" />
        <PostButtons icon={btn2} count="2k" />
        <PostButtons icon={btn3} count="1k" />
      </div>
    </div>
  );
}
