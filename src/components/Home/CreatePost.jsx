import {
  MdPhotoLibrary,
  MdEmojiEmotions,
  MdVideoCameraFront,
  MdLocationOn,
} from 'react-icons/md';

import profilepic from '../../assets/profilepic.png';

const IconText = ({ icon, title, color }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`text-[${color}]`}>{icon}</div>
      <span>{title}</span>
    </div>
  );
};

export default function CreatePost() {
  return (
    <div className=" bg-white">
      <div className="flex p-4 gap-4 items-center border-b-2 ">
        <div className="relative">
          <div className="absolute w-4 h-4 bg-green-400 rounded-full -right-2 bottom-2 ring-2 ring-white"></div>
          <img
            className="rounded-full ring-2 ring-gray-400 w-[50px]"
            src={profilepic}
          />
        </div>
        <button className="flex-1 bg-gray-400 rounded-2xl ml-2 py-2 px-2 text-left">
          What's on your mind?
        </button>
        <div className="rounded-full w-[50px] flex flex-col items-center">
          <MdPhotoLibrary size={'30'} />
          <p className="text-sm">Photo</p>
        </div>
      </div>
      <div className="flex justify-evenly p-2">
        <IconText
          icon={<MdEmojiEmotions size="1.25rem" />}
          title="Feeling"
          color="yellow"
        />
        <div className="w-[2px] bg-gray-400" />
        <IconText
          icon={<MdVideoCameraFront size="1.25rem" />}
          title="Live video"
          color="pink"
        />
        <div className="w-[2px] bg-gray-400" />
        <IconText
          icon={<MdLocationOn size="1.25rem" />}
          title="Location"
          color="red"
        />
      </div>
    </div>
  );
}
