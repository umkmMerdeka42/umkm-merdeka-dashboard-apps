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
                className="bg-yellow-400 transition duration-200 ease-linear hover:bg-yellow-300 active:bg-yellow-500 text-white rounded-md px-3 py-1 mr-2 shadow-md"><span className="hidden md:inline">Edit Profile </span><i className="fa-solid fa-address-card"></i>
              </button>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default Navbar;
