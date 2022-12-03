import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <div className="flex h-full min-h-screen w-max min-w-full">
        <Sidebar />
        <Navbar />
        <div className="mt-28 ml-[90px] md:ml-[17rem] min-w-fit">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout;