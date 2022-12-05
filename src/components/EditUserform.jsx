import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';
import Alert from './Alert';
import Spinner from './Spinner';

const EditUserform = () => {
  const { UPDATE_USERS, DETAIL_USERS } = API_ENDPOINT;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [university, setUniversity] = useState('');
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();


  useEffect(() => {
    const getUserById = async () => {
      try {
        setLoading(true);
        const response = await axios.get(DETAIL_USERS(id));
        const {
          name,
          email,
          telephone,
          university,
          nim
        } = response.data.data;
        setName(name);
        setEmail(email);
        setTelephone(telephone);
        setUniversity(university);
        setNim(nim);
        setLoading(false);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };
    getUserById();
  }, [DETAIL_USERS, id]);

  const editUsers = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put(UPDATE_USERS(id), {
        name: name,
        email: email,
        telephone:telephone,
        university: university,
        nim: nim,
        password: password,
        confPassword: confPassword
      });
      setLoading(false);
      navigate('/users');
    } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
        }
    }
  }
  
  return (
    <div>
      <section className="bg-white md:border rounded-md md:shadow-md mb-7">
        <div className="flex justify-center">
          <div className="flex items-center w-[300px] md:w-[650px] lg:w-[900px] mx-auto md:py-8 px-4 lg:px-12">
            <div className="w-full">
              <h1 className=" text-gray-900 text-xl font-semibold text-center">
                Edit Customers UMKM Merdeka
              </h1>
              {message && Alert(message)}

              <form onSubmit={editUsers} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              {loading && <Spinner />}
                <div>
                  <label className="block mb-2 text-sm text-gray-600">Nama</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Nama Customers"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Email</label>
                  <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Emaill Customers"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Telephone</label>
                  <input
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    type="text"
                    placeholder="No Telephone Customers"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Universitas</label>
                  <input
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    type="text"
                    placeholder="Kampus Customers"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">NIM / NPM</label>
                  <input
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    type="text"
                    placeholder="NIM / NPM Customers"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password Customers"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Konfirmasi Password</label>
                  <input
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    type="password"
                    placeholder="Konfirmasi Password Customers"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <button
                    type="submit"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="block w-full px-5 py-4 mt-2 md:mt-7 text-sm tracking-wide text-white capitalize transition-colors duration-200 ease-in-out rounded-md bg-[#0a2558] hover:bg-sky-700 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                    <span>Update Customers</span>
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

export default EditUserform;