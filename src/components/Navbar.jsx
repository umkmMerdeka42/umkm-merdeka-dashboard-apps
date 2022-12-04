import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <section className="relative bg-[#f5f5f5] left-60 home-section transition-all duration-75 ease-in">
        <nav className="flex justify-between bg-[#fff] items-center fixed left[60px] lg:left-60">
          <div className="flex items-center text-xl font-medium sidebar-button">
            <span className="dashboard font-semibold">Dashboard: { user && user.data.name }</span>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default Navbar;
