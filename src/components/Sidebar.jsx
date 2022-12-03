import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../public/images/UMKM-Merdeka.png';

const Sidebar = () => {
  return (
    <div>
      <div className="relative h-full min-h-screen lg:w-60 bg-[#0a2558] sidebar">
        <div className="h-20 flex items-center logo-details">
          <img
            src={logo}
            alt="Logo UMKM Merdeka"
            className="w-8 mx-3"
           />
          <span className="text-slate-100 text-xl font-semibold hidden lg:block">UMKM Merdeka</span>
        </div>
        <ul className="nav-links">
          <li className="relative list-none h-[50px]">
            <NavLink to="/dashboard" className="h-full w-full flex items-center no-underline 
              hover:bg-[#081d45] focus:bg-[#081d45]">
            <i className="min-w-[60px] text-center text-[15px] text-slate-100 fa-solid fa-house-user"></i>
            <span className="text-slate-100 text-[15px] font-normal whitespace-nowrap links_name hidden lg:block">Dashboard</span>
            </NavLink>
          </li>
          <li className="relative list-none h-[50px]">
            <NavLink to="/products" className="h-full w-full flex items-center no-underline 
              hover:bg-[#081d45] focus:bg-[#081d45]">
            <i className="min-w-[60px] text-center text-[15px] text-slate-100 fa-solid fa-box-archive"></i>
            <span className="text-slate-100 text-[15px] font-normal whitespace-nowrap links_name hidden lg:block">Product</span>
            </NavLink>
          </li>
          <li className="relative list-none h-[50px]">
            <NavLink to="/users" className="h-full w-full flex items-center no-underline 
              hover:bg-[#081d45] focus:bg-[#081d45]">
            <i className="min-w-[60px] text-center text-[15px] text-slate-100 fa-solid fa-user"></i>
            <span className="text-slate-100 text-[15px] font-normal whitespace-nowrap links_name hidden lg:block">Users</span>
            </NavLink>
          </li>
          <li className="absolute bottom-0 w-full list-none h-[50px] log_out">
            <NavLink to="/logout" className="h-full flex items-center no-underline 
              hover:bg-[#081d45] active:bg-[#081d45]">
            <i className="min-w-[60px] text-center text-[15px] text-white fa-solid fa-arrow-right-from-bracket"></i>
            <span className="text-slate-100 text-[15px] font-normal whitespace-nowrap links_name hidden lg:block">Log out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
