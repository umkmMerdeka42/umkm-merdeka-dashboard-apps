import React from 'react';

const AddUserform = () => {
  return (
    <div>
      <section className="bg-white md:border rounded-md md:shadow-md mb-7">
        <div className="flex justify-center">
          <div className="flex items-center w-[300px] md:w-[650px] lg:w-[900px] mx-auto md:py-8 px-4 lg:px-12">
            <div className="w-full">
              <h1 className=" text-gray-900 text-xl font-semibold text-center">
                Tambah Customers UMKM Merdeka
              </h1>

              <form id="addUsers" className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm text-gray-600">Nama</label>
                  <input type="text" placeholder="Nama Customers" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Email</label>
                  <input type="text" placeholder="Emaill Customers" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Telephone</label>
                  <input type="text" placeholder="No Telephone Customers" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Universitas</label>
                  <input type="email" placeholder="Kampus Customers" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">NIM / NPM</label>
                  <input type="NIM / NPM Customers" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Password</label>
                  <input type="password" placeholder="Password Customers" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Konfirmasi Password</label>
                  <input type="password" placeholder="Konfirmasi Password Customers" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <button
                    type="submit"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="block w-full px-5 py-4 mt-2 md:mt-7 text-sm tracking-wide text-white capitalize transition-colors duration-200 ease-in-out rounded-md bg-[#0a2558] hover:bg-sky-700 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                    <span>Tambah Customers</span>
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default AddUserform;