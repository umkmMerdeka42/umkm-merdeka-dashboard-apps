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

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Konfirmasi Password</label>
                  <input type="password" placeholder="Konfirmasi Password Kamu" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <button
                    type="submit"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="block w-full px-5 py-4 mt-2 md:mt-7 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-primary to-secondary rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                    <span>Sign Up</span>
                  </button>
                </div>

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
