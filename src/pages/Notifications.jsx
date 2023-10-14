import React from 'react';
import { Notification } from '../components/Notifications';
import { NavIcon } from '../components/NavBar';
import { MdSearch } from 'react-icons/md';
const Notifications = () => {
  return (
    <>
      <div className="flex justify-between items-end mb-[1px] p-2 bg-white">
        <h2 className="text-black font-bold text-2xl">Notifications</h2>
        <div className="flex justify-between gap-3">
          <NavIcon icon={<MdSearch size={'1.5rem'} />} isColored />
        </div>
      </div>
      <Notification />
    </>
  );
};

export default Notifications;
