import React from 'react';
import { NavLink } from 'react-router-dom';

const ListUser = () => {
  return (
    <div>
      <section className="w-[270px] md:w-[640px] lg:w-[50rem] xl:w-[62rem] text-gray-600">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full mr-[14px] bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="font-semibold text-[10px] w-24 md:w-full md:text-base lg:text-xl text-gray-800">Customers UMKM Merdeka</h2>
              <NavLink to="/add">
                <button className="bg-red-400 transition duration-200 ease-linear hover:bg-red-300 active:bg-red-500 px-2 py-2 md:px-3 md:py-2 text-[10px] md:text-base md:w-36 rounded-sm text-white font-bold">
                Add User <i className="fa-solid fa-user-plus ml-2"></i>
              </button>
              </NavLink>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">No</div>
                      </th>
                      <th className="px-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">Nama</div>
                      </th>
                      <th className="py-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">Email</div>
                      </th>
                      <th className="py-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">No Telephone</div>
                      </th>
                      <th className="py-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">Universitas</div>
                      </th>
                      <th className="py-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">NIM / NPM</div>
                      </th>
                      <th className="py-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">Role</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-center">Aksi</div>
                      </th>
                    </tr>
                  </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="px-4 lg:px-0 text-left">1.</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="px-4 lg:px-0 text-left">M Aji Perdana</div>
                        </td>
                        <td className="py-2 whitespace-nowrap">
                          <div className="px-4 lg:px-0 text-left">alexshatov@gmail.com</div>
                        </td>
                        <td className="py-2 whitespace-nowrap">
                          <div className="px-4 lg:px-0 text-left">085695951121</div>
                        </td>
                        <td className="py-2 whitespace-nowrap">
                          <div className="px-4 lg:px-0 text-left">Universitas Bandar Lampung</div>
                        </td>
                        <td className="py-2 whitespace-nowrap">
                          <div className="px-4 lg:px-0 text-left">19411011</div>
                        </td>
                        <td className="py-2 whitespace-nowrap">
                          <div className="px-4 lg:px-0 text-left">Admin</div>
                        </td>
                        <td className="py-2 whitespace-nowrap text-center">
                          <button className="bg-yellow-400 transition duration-200 ease-linear hover:bg-yellow-300 active:bg-yellow-500 text-white rounded-full px-2 py-1 mr-2"><i className="fa-solid fa-pen-to-square"></i></button>
                          <button className="bg-red-400 transition duration-200 ease-linear hover:bg-red-300 active:bg-red-500 text-white rounded-full px-2 py-1"><i className="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ListUser;
