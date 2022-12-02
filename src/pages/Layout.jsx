import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Sidebar />
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
    </React.Fragment>
  )
}

export default Layout;