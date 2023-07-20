import React from 'react';
import Toolbar from '@/components/Navigation/Toolbar/Toolbar';
const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Toolbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
