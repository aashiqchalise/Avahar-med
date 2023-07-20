import React from 'react';
import { navbar } from '@/constants/navbar';
import NavItems from '@/components/Navigation/NavItmes/navItems';
const Toolbar = () => {
  return (
    <div className="flex justify-evenly items-center">
      <div className="font-bold text-4xl"> AVAHAR-MED</div>
      <div className="flex items-center gap-6">
        {navbar?.map((item) => {
          return (
            <div key={item.id}>
              <NavItems Path={item.url} Title={item.title} />
            </div>
          );
        })}
        <div className="text-white bg-blue-500 text-xl rounded-lg font-semibold tracking-wide p-4">
          9876543210
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
