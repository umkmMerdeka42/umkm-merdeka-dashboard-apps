import React, { useState } from 'react';
import {NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';
import Logo from '../public/images/UMKM-Merdeka-Brands.png';
import Alert from './Alert';
import Spinner from './Spinner';

const Register = () => {
  const { USERS } = API_ENDPOINT;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [university, setUniversity] = useState('');
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.post(USERS, {
        name: name,
        email: email,
        telephone:telephone,
        university: university,
        nim: nim,
        password: password,
        confPassword: confPassword
      });
      setIsLoading(false);
      navigate('/');
    } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
          setIsLoading(false);
        }
    }
  }
  
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
              {message && Alert(message)}

              <form onSubmit={register} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                {isLoading && <Spinner/>}
                <div>
                  <label className="block mb-2 text-sm text-gray-600">Nama</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Nama Kamu"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Kamu"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">No Wa Aktif</label>
                  <input
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    type="text"
                    placeholder="No Wa Aktif Kamu"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Universitas</label>
                  <input
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    type="text"
                    placeholder="Kampus Kamu"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">NIM / NPM</label>
                  <input
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    type="text"
                    placeholder="NIM / NPM Kamu"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password Kamu"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Konfirmasi Password</label>
                  <input
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    type="password" placeholder="Konfirmasi Password Kamu" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
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
