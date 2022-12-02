import React from 'react';

const Navbar = () => {
  return (
    <div>
      <section className="relative bg-[#f5f5f5] left-60 home-section transition-all duration-75 ease-in">
        <nav className="flex justify-between bg-[#fff] items-center fixed left-60">
          <div className="flex items-center text-xl font-medium sidebar-button">
            <span className="dashboard font-semibold">Dashboard</span>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default Navbar;
