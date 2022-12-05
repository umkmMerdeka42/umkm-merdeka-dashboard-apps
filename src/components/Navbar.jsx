import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <section className="relative bg-[#f5f5f5] left-60 home-section transition-all duration-75 ease-in">
        <nav className="flex justify-between bg-[#fff] items-center fixed left[60px] lg:left-60">
          <div className="flex items-center font-medium sidebar-button">
            <span className="dashboard font-semibold text-base md:text-xl"><div className="hidden md:inline-block">Dashboard : </div> { user && user.data.name }</span>
          </div>
          <div>
            <Link to={`/users/edit/${user && user.data.uuid}`}>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="bg-[#0a2558] transition duration-200 ease-linear hover:bg-[#081d45] active:bg-[[#081d45]] text-white rounded-sm py-1 px-2 md:px-3 md:py-2 mr-2 shadow-md"><span className="hidden md:inline">Edit Profile </span><i className="fa-solid fa-address-card"></i>
              </button>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default Navbar;
