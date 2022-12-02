import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../public/images/UMKM-Merdeka-Brands.png';

const Register = () => {
  return (
    <div>
      <section class="bg-white">
        <div class="flex justify-center">
          <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
              <div class="flex flex-col justify-center items-center w-full text-center">
                <img src={Logo} class="w-44" alt="logo-umkm-merdeka" />
              </div>

              <h1 class="mt-4 text-gray-500 font-semibold text-center">
                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
              </h1>

              <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label class="block mb-2 text-sm text-gray-600">First Name</label>
                  <input type="text" placeholder="John" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600">Last name</label>
                  <input type="text" placeholder="Snow" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600">NIM</label>
                  <input type="text" placeholder="200401008" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600">Email address</label>
                  <input type="email" placeholder="johnsnow@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600">Password</label>
                  <input type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600">Confirm password</label>
                  <input type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <button
                  data-mdb-ripple="true" data-mdb-ripple-color="light"
                  class="flex items-center md:col-span-2 md:w-1/2 md:mx-auto justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-primary to-secondary rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                  <span>Sign Up </span>

                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </button>

              </form>
              <p class="mt-6 text-sm text-center text-gray-400">Already have an account? <NavLink to="/" class="text-secondary focus:text-primary hover:text-primary no-underline">Login</NavLink>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register;
