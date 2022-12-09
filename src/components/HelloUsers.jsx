import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';
import logo from '../public/images/UMKM-Merdeka-Brands.png'

const HelloUsers = () => {
  const { user } = useSelector((state) => state.auth);

  const { PRODUCTS, USERS } = API_ENDPOINT;
  const [products, setProduct] = useState([]);
  const [allUsersData, setAllUsersData] = useState([]);

  useEffect(() => {
    allProduct();
    allUsers();
  });
  
  const allProduct = async () => {
    const response = await axios.get(PRODUCTS);
    setProduct(response.data.data);
  }

  const allUsers = async () => {
    const response = await axios.get(USERS);
    setAllUsersData(response.data.data);
  }
  
  return (
    <div className="pb-10 -mt-8 md:-mt-0">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div className="lg:bg-gray-50 lg:p-16 rounded-[5rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            <img
              src={logo}
              alt="UMKM Merdeka Logo"
              loading="lazy"
              className="hidden lg:block"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Halo!, Selamat Datang { user && user.data.name }
            </h2>
            <p className="my-8 text-gray-600">
              Selamat datang di dashboard <strong>UMKM MERDEKA.</strong> Jual produk disekitar kampusmu dan hasilkan banyak cuan!
            </p>
            <div className="divide-y space-y-4 divide-gray-100">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-indigo-100">
                  <i class="fa-sharp fa-solid fa-cart-shopping w-7 h-7 mt-3 ml-2 text-indigo-400"></i>   
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700">Manage Produkmu</h4>
                  <p className="text-gray-600">Atur dan pasarkan produk usahamu dengan mudah di <strong>UMKM MERDEKA.</strong></p>
                </div> 
              </div> 
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-teal-100">
                  <i class="fa-solid fa-store w-7 h-7 mt-3 ml-2 text-teal-600"></i>
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700">Jumlah Produk</h4>
                  <p className="text-gray-600">Total Produkmu pada katalog : <strong>{products.length} Produk</strong></p>
                </div> 
              </div> 
              { user && user.data.role === 'admin' && 
                <div className="pt-4 flex gap-4 md:items-center">
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-orange-100">
                    <i class="fa-solid fa-users w-7 h-7 mt-3 ml-2 text-orange-600"></i>
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700">Jumlah Pengguna</h4>
                    <p className="text-gray-600">Total Pengguna : <strong>{allUsersData.length} Pengguna</strong></p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelloUsers;
