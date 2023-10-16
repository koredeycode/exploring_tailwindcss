import {
  MdHome,
  MdMenu,
  MdPeopleOutline,
  MdSearch,
  MdOutlineMessage,
  MdNotificationsNone,
  MdOndemandVideo,
} from 'react-icons/md';
import { AiOutlineShop, AiOutlinePlus } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

export function NavIcon({ icon, isColored, isActive, to }) {
  return (
    <Link
      to={to}
      className={`flex-1 p-2 ${
        isColored ? 'rounded-full bg-gray-300' : ' hover:bg-gray-300'
      } ${isActive ? 'text-cyan-500' : ''} flex justify-center`}
    >
      {icon}
    </Link>
  );
}

export default function NavBar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isFriends = pathname === '/friends';
  const isMessages = pathname === '/messages';
  const isNotifications = pathname === '/notifications';
  const isVideos = pathname === '/videos';
  const isMarketplace = pathname === '/marketplace';

  return (
    <nav className="border-b-2 sticky w-full top-0 bg-white z-10 pt-2">
      <div className="mb-2">
        <div
          className={`${
            isHome ? 'flex justify-between items-end mx-4' : 'hidden'
          }`}
        >
          <h2 className="text-cyan-500 font-bold text-3xl">facebook</h2>
          <div className="flex justify-between gap-3">
            <NavIcon icon={<AiOutlinePlus size={'1.5rem'} />} isColored />
            <NavIcon icon={<MdSearch size={'1.5rem'} />} isColored />
            <NavIcon icon={<MdMenu size={'1.5rem'} />} isColored />
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <NavIcon icon={<MdHome size={'1.5rem'} />} isActive={isHome} to="/" />
          <NavIcon
            icon={<MdPeopleOutline size={'1.5rem'} />}
            isActive={isFriends}
            to="/friends"
          />
          <NavIcon
            icon={<MdOutlineMessage size={'1.5rem'} />}
            isActive={isMessages}
            to="/messages"
          />
          <NavIcon
            icon={<MdNotificationsNone size={'1.5rem'} />}
            isActive={isNotifications}
            to="/notifications"
          />
          <NavIcon
            icon={<MdOndemandVideo size={'1.5rem'} />}
            isActive={isVideos}
            to="/videos"
          />
          <NavIcon
            icon={<AiOutlineShop size={'1.5rem'} />}
            isActive={isMarketplace}
            to="/marketplace"
          />
        </div>
      </div>
    </nav>
  );
}
