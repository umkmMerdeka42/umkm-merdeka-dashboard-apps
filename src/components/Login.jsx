import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../public/images/UMKM-Merdeka-Brands.png';

const Login = () => {
  return (
    <div>
      <div className="flex justify-center p-8 px-6">
        <div className="w-full max-w-md my-auto lg:w-2/6">
          <div className="flex-1">
            <div className="flex flex-col justify-center items-center w-full text-center">
              <img src={Logo} className="w-44" alt="logo-umkm-merdeka"/>

              <p className="mt-3 text-gray-500 dark:text-gray-300 font-semibold">UMKM Merdeka Apps</p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                    <label htmlFor="email" className="block mb-2 text-lg font-semibold text-gray-600">Alamat Email</label>
                    <input type="email" name="email" id="email" placeholder="Email Kamu" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-6">
                  <label htmlFor="email" className="block mb-2 text-lg font-semibold text-gray-600">Password</label>
                  <input type="password" name="password" id="password" placeholder="Password Kamu" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-6">
                  <button data-mdb-ripple="true" data-mdb-ripple-color="light" type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-primary to-secondary py-2 px-4 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">Belum berabung di UMKM Merdeka?
               <NavLink to="/register" className="text-secondary focus:text-primary hover:text-primary no-underline ">Sign up</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;
