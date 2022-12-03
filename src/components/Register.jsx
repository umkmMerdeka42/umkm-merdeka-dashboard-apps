import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../public/images/UMKM-Merdeka-Brands.png';

const Register = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="flex justify-center">
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <div className="flex flex-col justify-center items-center w-full text-center">
                <img src={Logo} className="w-44" alt="logo-umkm-merdeka" />
              </div>

              <h1 className="mt-4 text-gray-500 font-semibold text-center">
                Ayoo!, Bergabung dengan UMKM Merdeka Sekarang...
              </h1>

              <form id="register" className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm text-gray-600">Nama</label>
                  <input type="text" placeholder="Nama Kamu" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Email</label>
                  <input type="text" placeholder="Emaill Kamu" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Telephone</label>
                  <input type="text" placeholder="No Telephone Kamu" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Universitas</label>
                  <input type="email" placeholder="Kampus Kamu" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">NIM / NPM</label>
                  <input type="NIM / NPM Kamu" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Password</label>
                  <input type="password" placeholder="Password Kamu" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <button
                  data-mdb-ripple="true" data-mdb-ripple-color="light"
                  className="flex items-center md:col-span-2 md:w-1/2 md:mx-auto justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-primary to-secondary rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                  <span>Sign Up </span>

                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </button>

              </form>
              <p className="mt-6 text-sm text-center text-gray-400">Sudah bergabung dengan UMKM Merdeka? <NavLink to="/" className="text-secondary focus:text-primary hover:text-primary no-underline">Sign In</NavLink>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register;
