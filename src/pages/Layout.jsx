import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <div className="flex h-full min-h-screen">
        <Sidebar />
        <Navbar />
        <div className="mt-[120px] flex justify-center w-screen">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout;