import React from 'react';
import { NavIcon } from '../components/NavBar';
import { MdSearch } from 'react-icons/md';
const Marketplace = () => {
  return (
    <div>
      <div className="flex justify-between items-end mb-[1px] p-2 bg-white">
        <h2 className="text-black font-bold text-2xl">MarketPlace</h2>
        <div className="flex justify-between gap-3">
          <NavIcon icon={<MdSearch size={'1.5rem'} />} isColored />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
