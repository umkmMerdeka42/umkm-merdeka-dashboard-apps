import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <div className="flex bg-slate-100">
        <Sidebar />
        <Navbar />
        <div className="mt-24 ml-2">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout;